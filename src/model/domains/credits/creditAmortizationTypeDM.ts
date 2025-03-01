import { convertDomainToList, convertDomainToOptions } from "src/utils/domains";

const creditAmortizationTypeDataDomain = {
  FIXED_INTEGRAL_QUOTA: {
    id: "IntegralFixedQuota",
    value: "Cuota fija integral",
  },
  FIXED_CAPITAL_QUOTA: {
    id: "FixedCapitalQuota",
    value: "Abonos fijos a capital",
  },
};

const creditAmortizationTypeDMValueOf = (id: string) =>
  Object.values(creditAmortizationTypeDataDomain).find(
    (item) => item.id === id,
  );

const creditAmortizationTypeDM = {
  ...creditAmortizationTypeDataDomain,
  list: convertDomainToList(creditAmortizationTypeDataDomain),
  options: convertDomainToOptions(creditAmortizationTypeDataDomain),
  valueOf: creditAmortizationTypeDMValueOf,
};

export { creditAmortizationTypeDM };
