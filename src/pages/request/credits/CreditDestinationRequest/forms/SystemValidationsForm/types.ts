import { IValidation } from "src/model/entity/service";

interface ISystemValidationsEntry {
  validations: IValidation[];
  documents: IValidation[];
  productId: string;
  productName: string;
  destinationId: string;
  destinationName: string;
  paymentMethodCode: string;
  paymentMethodName: string;
  requestAmount: number;
  creditAmount: number;
  capitalPaymentPeriod: string;
  numQuotas: number;
  nominalRate: string;
  amortizationType: string;
  interestPaymentPeriod: string;
  periodicity: string;
  quotaValue: number;
  amountToTurn: number;
}

export type { ISystemValidationsEntry };
