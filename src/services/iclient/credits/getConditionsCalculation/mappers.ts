import { IConditionRequest, IConditionRequestResponse } from "./types";

const mapConditionsEntityToEntity = (
  conditionOption: Record<string, string | object>,
): IConditionRequestResponse => {
  return {
    productId: String(conditionOption.productId),
    paymentMethodId: String(conditionOption.paymentMethodId),
    customerCode: String(conditionOption.customerCode),
    amount: Number(conditionOption.amount),
    cutOffDate: String(conditionOption.cutOffDate),
    deadline: Number(conditionOption.deadline),
    rate: Number(conditionOption.rate),
  };
};

const mapConditionsEntityToApi = (
  condition: IConditionRequest,
): Record<string, string | number> => {
  return {
    productId: condition.productId,
    paymentMethodId: condition.paymentMethodId,
    customerCode: condition.customerCode,
    amount: condition.amount,
  };
};

export { mapConditionsEntityToEntity, mapConditionsEntityToApi };
