import { enviroment } from "@config/enviroment";
import { ICreditDestinationProduct } from "@pages/request/credits/CreditDestinationRequest/forms/DestinationForm/types";
import { saveNetworkTracking } from "src/services/analytics/saveNetworkTracking";
import { mapProductsApiToEntities } from "./mappers";

const getProductsForDestination = async (
  userIdentification: string,
  accessToken: string,
  destinationId: string,
): Promise<ICreditDestinationProduct[]> => {
  const requestTime = new Date();
  const startTime = performance.now();

  const requestUrl = `${enviroment.ICLIENT_API_URL_QUERY}/manage-product-request/product/destination/${destinationId}/customer/${userIdentification}`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        Realm: enviroment.AUTH_REALM,
        Authorization: `Bearer ${accessToken}`,
        "X-Action": "SearchProductsByDestination",
        "X-Business-Unit": enviroment.BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const res = await fetch(requestUrl, options);

    saveNetworkTracking(
      requestTime,
      options.method || "GET",
      requestUrl,
      res.status,
      Math.round(performance.now() - startTime),
    );

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw {
        message: "Error al obtener los destinos de crédito del usuario.",
        status: res.status,
        data,
      };
    }

    const normalizedProducts = Array.isArray(data)
      ? mapProductsApiToEntities(data)
      : [];

    return normalizedProducts;
  } catch (error) {
    saveNetworkTracking(
      requestTime,
      "GET",
      requestUrl,
      (error as { status?: number }).status || 500,
      Math.round(performance.now() - startTime),
    );

    console.info(error);

    throw error;
  }
};

export { getProductsForDestination };
