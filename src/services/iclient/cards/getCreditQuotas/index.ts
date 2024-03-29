import { enviroment } from "@config/enviroment";
import { IProduct } from "src/model/entity/product";
import { mapCreditQuotaApiToEntities } from "./mappers";

interface DataSummary {
  [key: string]: string | number | unknown
}

const getCreditQuotasForUser = async (
  cardId: string,
  accessToken: string,
): Promise<IProduct[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const optionsSummary: RequestInit = {
        method: "GET",
        headers: {
          Realm: enviroment.REALM,
          Authorization: `Bearer ${accessToken}`,
          "X-Action": "SearchCreditProductsSummary",
          "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: controller.signal,
      };

      const optionsDetail: RequestInit = {
        method: "GET",
        headers: {
          Realm: enviroment.REALM,
          Authorization: `Bearer ${accessToken}`,
          "X-Action": "SearchCreditProductsDetail",
          "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: controller.signal,
      };

      const [resSummary, resDetail] = await Promise.all([
        fetch(
          `${enviroment.ICLIENT_API_URL_QUERY}/credit-card-products/${cardId}/summary`,
          optionsSummary,
        ),
        fetch(
          `${enviroment.ICLIENT_API_URL_QUERY}/credit-card-products/${cardId}/detail`,
          optionsDetail,
        ),
      ]);

      clearTimeout(timeoutId);

      if (resSummary.status === 204 || resDetail.status === 204) {
        return [];
      }

      const dataSummary = await resSummary.json();
      const dataDetail = await resDetail.json();

      if (!resSummary.ok || !resDetail.ok) {
        throw {
          message: "Error al obtener los cupos de credito del usuario",
          status: resSummary.status || resDetail.status,
          dataSummary,
          dataDetail,
        };
      }

      const productCode = dataDetail.creditProductCode;

      for (const [key, value] of Object.entries(dataDetail)) {
        dataSummary.map((data:DataSummary) => {
        
          if (data.creditProductCode === productCode && (!data[key as typeof dataDetail] || key === "totalDebt" || key === "nextPaymentValue")) {
            data[key as typeof dataDetail]=value;
          }
        });
      }
      
      const normalizedCreditQuotas = Array.isArray(dataSummary)
        ? mapCreditQuotaApiToEntities(dataSummary)
        : [];

      return normalizedCreditQuotas;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(
          "Todos los intentos fallaron. No se pudieron obtener los cupos de credito del usuario.",
        );
      }
    }
  }

  return [];
};

export { getCreditQuotasForUser };
