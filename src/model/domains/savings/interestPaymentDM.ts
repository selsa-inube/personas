import { convertDomainToList, convertDomainToOptions } from "src/utils/domains";

const interestPaymentDataDomain = {
  AT_EXPIRATION: {
    id: "PayAtExpiration",
    value: "Al vencimiento",
  },
};

const interestPaymentDMValueOf = (id: string) =>
  Object.values(interestPaymentDataDomain).find((value) => value.id === id);

const interestPaymentDM = {
  ...interestPaymentDataDomain,
  list: convertDomainToList(interestPaymentDataDomain),
  options: convertDomainToOptions(interestPaymentDataDomain),
  valueOf: interestPaymentDMValueOf,
};

export { interestPaymentDM };
