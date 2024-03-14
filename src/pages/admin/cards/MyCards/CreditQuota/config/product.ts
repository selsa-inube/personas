import { IAttribute, ICreditQuotaDetails } from "src/model/entity/product";
import { currencyFormat } from "src/utils/currency";

const quotaDetailsAttrs = [
  "quota_available",
  "min_payment",
  "full_payment",
  "next_payment_date",
  "type",
  "payment_method",
  "assigned_quota",
];

const quotaDetailsCurrencyAttrs = [
  "quota_available",
  "min_payment",
  "full_payment",
  "assigned_quota",
];

function extractQuotaDetailsAttrs(quotaDetail: ICreditQuotaDetails) {
  const foundAttributes = quotaDetail.attributes.filter((attribute) =>
    quotaDetailsAttrs.includes(attribute.id),
  );

  return foundAttributes.sort(
    (a, b) => quotaDetailsAttrs.indexOf(a.id) - quotaDetailsAttrs.indexOf(b.id),
  );
}

function formatQuotaDetailsAttrs(attributes: IAttribute[]) {
  return attributes.map((attribute) => {
    if (quotaDetailsCurrencyAttrs.includes(attribute.id)) {
      return {
        ...attribute,
        value: currencyFormat(Number(attribute.value)),
      };
    }
    return attribute;
  });
}

export { extractQuotaDetailsAttrs, formatQuotaDetailsAttrs };