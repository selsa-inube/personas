import { IAttribute, IProduct } from "src/model/entity/product";
import { currencyFormat } from "src/utils/currency";

const consumptionAttributes = [
  "consumption_date",
  "consumption_value",
  "dues_paid",
  "outstanding_dues",
  "net_value",
  "interest",
];

const consumptionCurrencyAttributes = ["consumption_value", "net_value"];

function extractConsumptionAttributes(consumption: IProduct) {
  const foundAttributes = consumption.attributes.filter((attribute) =>
    consumptionAttributes.includes(attribute.id),
  );

  return foundAttributes.sort(
    (a, b) =>
      consumptionAttributes.indexOf(a.id) - consumptionAttributes.indexOf(b.id),
  );
}

function formatConsumptionCurrencyAttrs(attributes: IAttribute[]) {
  return attributes.map((attribute) => {
    if (consumptionCurrencyAttributes.includes(attribute.id)) {
      return {
        ...attribute,
        value: currencyFormat(Number(attribute.value)),
      };
    }
    return attribute;
  });
}

export { extractConsumptionAttributes, formatConsumptionCurrencyAttrs };
