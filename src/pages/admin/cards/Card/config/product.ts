import { IAttribute, IProduct } from "src/model/entity/product";
import { currencyFormat } from "src/utils/currency";
import { EQuotasMovementType } from "src/model/entity/product";

const cardAttributes = [
  "card_number",
  "cardholder",
  "status",
  "savings_accounts",
  "handling_fee",
  "commissions",
];

const creditQuotasCurrencyAttributes = [
  "available_space",
  "used_quota",
  "next_payment_value",
  "assigned_quota",
];

const cardCurrencyAttributes = ["handling_fee"];

function extractCardAttributes(credit: IProduct) {
  const foundAttributes = credit.attributes.filter((attribute) =>
    cardAttributes.includes(attribute.id),
  );

  return foundAttributes.sort(
    (a, b) => cardAttributes.indexOf(a.id) - cardAttributes.indexOf(b.id),
  );
}

function formatCardCurrencyAttrs(attributes: IAttribute[]) {
  return attributes.map((attribute) => {
    if (cardCurrencyAttributes.includes(attribute.id)) {
      return {
        ...attribute,
        value: currencyFormat(Number(attribute.value)),
      };
    }
    return attribute;
  });
}

function formatCreditQuotasCurrencyAttrs(attributes: IAttribute[]) {
  return attributes.map((attribute) => {
    if (creditQuotasCurrencyAttributes.includes(attribute.id)) {
      return {
        ...attribute,
        value: currencyFormat(Number(attribute.value)),
      };
    }
    return attribute;
  });
}

function getMovementDescriptionType(type?: EQuotasMovementType): string {
  switch (type) {
    case EQuotasMovementType.BUY:
      return "Compra";
    case EQuotasMovementType.REVERSE:
      return "Reverso";
    case EQuotasMovementType.PAY:
      return "Pago";
    default:
      return "";
  }
}

export {
  extractCardAttributes,
  formatCardCurrencyAttrs,
  getMovementDescriptionType,
  formatCreditQuotasCurrencyAttrs,
};
