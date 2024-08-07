interface ISimulationRequest {
  productId: string;
  paymentMethodCapitalId: string;
  customerCode: string;
  amount: number;
  periodicityInMonthsCapital: number;
  quotaDeadlineInMonths: number;
  quotaValue: number;
  rate: number;
}

interface ISimulationRequestResponse {
  productId: string;
  paymentMethodCapitalId: string;
  customerCode: string;
  amount: number;
  cutOffDate: string;
  periodicityInMonthsCapital: number;
  quotaDeadlineInMonths: number;
  rate: number;
  calculatedQuotaValue: number;
  calculatedQuotaDeadline: number;
  anticipatedInterest: number;
  chargeName: string;
  discountName: string;
  chargeValue: number;
  discountValue: number;
  amountToBeDrawn: number;
}

export type { ISimulationRequest, ISimulationRequestResponse };
