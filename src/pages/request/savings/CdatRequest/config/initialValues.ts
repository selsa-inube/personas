import { IDeadlineEntry } from "../forms/DeadlineForm/types";
import { IPaymentMethodEntry } from "../forms/PaymentMethodForm/types";

const deadline: IDeadlineEntry = {
  productId: "",
  productName: "",
  investmentValue: 0,
  simulationWithDate: false,
  simulationWithDays: false,
  rateTerms: [],
  hasResult: false,
};

const paymentMethod: IPaymentMethodEntry = {
  paymentMethods: [],
  paymentMethod: "",
  paymentMethodName: "",
};

const initalValuesCDAT = {
  deadline,
  paymentMethod,
};

export { initalValuesCDAT };
