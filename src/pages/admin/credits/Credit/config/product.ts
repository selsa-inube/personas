import { IAttribute, IProduct } from "src/model/entity/product";
import { currencyFormat } from "src/utils/currency";

const creditAttributes = [
  "loan_date",
  "loan_value",
  "next_payment",
  "dues_paid",
  "outstanding_dues",
  "payment_method",
  "periodicity",
  "net_value",
  "days_past_due",
  "guarantee_type",
  "amortization_type",
  "interest_rate",
];

const creditCurrencyAttributes = ["loan_value", "net_value"];

function extractCreditAttributes(credit: IProduct) {
  const foundAttributes = credit.attributes.filter((attribute) =>
    creditAttributes.includes(attribute.id),
  );

  return foundAttributes.sort(
    (a, b) => creditAttributes.indexOf(a.id) - creditAttributes.indexOf(b.id),
  );
}

function formatCreditCurrencyAttrs(attributes: IAttribute[]) {
  return attributes.map((attribute) => {
    if (creditCurrencyAttributes.includes(attribute.id)) {
      return {
        ...attribute,
        value: currencyFormat(Number(attribute.value)),
      };
    }
    return attribute;
  });
}

export { extractCreditAttributes, formatCreditCurrencyAttrs };
