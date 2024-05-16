import { enviroment } from "@config/enviroment";
import { developmentUsersMock } from "@mocks/users/users.mocks";
import { ISavingsState } from "src/context/savings/types";
import { mapSavingsApiToEntities } from "./mappers";
import { saveNetworkTracking } from "src/services/analytics/saveNetworkTracking";

const getSavingsForUser = async (
  userIdentification: string,
  accessToken: string,
): Promise<ISavingsState> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;
  const emptyResponse = {
    savingsAccounts: [],
    programmedSavings: [],
    savingsContributions: [],
    cdats: [],
    commitments: [],
  };

  const queryParams = new URLSearchParams({
    customerCode:
      developmentUsersMock[userIdentification] || userIdentification,
  });

  const requestUrl = `${enviroment.ICLIENT_API_URL_QUERY}/saving-products?${queryParams.toString()}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: enviroment.REALM,
      Authorization: `Bearer ${accessToken}`,
      "X-Action": "SearchAllSavingProductCatalogs",
      "X-Business-Unit": enviroment.BUSINESS_UNIT,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const trackNetworkRequest = async (
    requestTime: Date,
    responseStatusCode: number,
    responseTimeMs: number,
  ) => {
    if (enviroment.IS_PRODUCTION) {
      await saveNetworkTracking(
        requestTime,
        options.method || "GET",
        requestUrl,
        responseStatusCode,
        responseTimeMs,
      );
    }
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const startTime = performance.now();
    const requestTime = new Date();
    let responseTimeMs;
    let responseStatusCode;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const res = await fetch(requestUrl, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      responseTimeMs = Math.round(performance.now() - startTime);
      responseStatusCode = res.status;

      await trackNetworkRequest(
        requestTime,
        responseStatusCode,
        responseTimeMs,
      );

      if (res.status === 204) {
        return emptyResponse;
      }

      const data = await res.json();

      if (!res.ok) {
        throw {
          message: "Error al obtener los productos de ahorro del usuario",
          status: res.status,
          data,
        };
      }

      const normalizedSavings = Array.isArray(data)
        ? mapSavingsApiToEntities(data)
        : emptyResponse;

      return normalizedSavings;
    } catch (error) {
      if (attempt === maxRetries) {
        await trackNetworkRequest(
          requestTime,
          (responseStatusCode = 400),
          (responseTimeMs = Math.round(performance.now() - startTime)),
        );
        throw new Error(
          "Todos los intentos fallaron. No se pudieron obtener los productos de ahorro del usuario.",
        );
      }
    }
  }

  return emptyResponse;
};

export { getSavingsForUser };
