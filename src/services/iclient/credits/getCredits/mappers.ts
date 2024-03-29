import { TagProps } from "@design/data/Tag";
import {
  amortizationTypeValuesMock,
  peridiocityValuesMock,
} from "@mocks/products/credits/utils.mocks";
import { EProductType, IAttribute, IProduct } from "src/model/entity/product";
import { formatPrimaryDate } from "src/utils/dates";
import { capitalizeText } from "src/utils/texts";

const mapCreditApiToEntity = (
  credit: Record<string, string | number | object>,
): IProduct => {
  const nextPaymentDate = new Date(String(credit.nextPaymentDate));
  nextPaymentDate.setUTCHours(5, 5, 5, 5);

  const today = new Date();

  today.setUTCHours(5, 5, 5, 5);

  const duesPaid = credit.duesPaid;

  const outstandingDues = credit.outstandingDues;

  const inArrears = today > nextPaymentDate;

  const nextPayment = inArrears
    ? "Inmediato"
    : formatPrimaryDate(nextPaymentDate);

  const differenceDays =
    (today.getTime() - nextPaymentDate.getTime()) / (1000 * 60 * 60 * 24);

  const nextPaymentCapital =
    Object(credit.valueExpired)?.capitalValuePending ||
    Object(credit.nextPaymentValue).capitalValuePending;

  const nextPaymentInterest =
    Object(credit.valueExpired)?.interestValuePending ||
    Object(credit.nextPaymentValue).interestValuePending;

  const nextPaymentArrearsInterest =
    Object(credit.valueExpired)?.penalityInterestPending ||
    Object(credit.nextPaymentValue)?.penalityInterestPending;

  const nextPaymentValue =
    Number(nextPaymentCapital || 0) +
    Number(nextPaymentInterest || 0) +
    Number(nextPaymentArrearsInterest || 0);

  const normalizedPaymentMethodName = capitalizeText(
    String(credit.paymentMethodName).toLowerCase(),
  );
  const interesRate =
    (Object(credit.accumulatedByObligations)[0].spreadCurrentRate || 0) +
    (Object(credit.accumulatedByObligations)[0].currentFixedPoints || 0);

  const roundInteresRate =
    interesRate == 0 ? interesRate : interesRate.toFixed(2);

  const attributes: IAttribute[] = [
    {
      id: "loan_date",
      label: "Fecha de préstamo",
      value: formatPrimaryDate(new Date(String(credit.obligationDate))),
    },
    {
      id: "loan_value",
      label: "Valor del préstamo",
      value: String(credit.amount),
    },
    {
      id: "next_payment_date",
      label: "Fecha próximo pago",
      value: nextPayment,
    },
    {
      id: "next_payment_value",
      label: "Valor próximo pago",
      value: nextPaymentValue,
    },
    {
      id: "dues_paid",
      label: "Cuotas pagadas",
      value: Number(duesPaid || 0),
    },
    {
      id: "outstanding_dues",
      label: "Cuotas pendientes",
      value: Number(outstandingDues || 0),
    },
    {
      id: "peridiocity",
      label: "Periodicidad",
      value: peridiocityValuesMock[String(credit.periodicityOfQuota)],
    },
    {
      id: "payment_means",
      label: "Medio de pago",
      value: normalizedPaymentMethodName,
    },
    {
      id: "net_value",
      label: "Saldo de capital",
      value: Number(Object(credit.balanceObligation).capitalBalanceInPesos),
    },
    {
      id: "amortization_type",
      label: "Tipo de amortización",
      value: amortizationTypeValuesMock[Object(credit.amortization).code],
    },
    {
      id: "guarantee_type",
      label: "Tipo de garantía",
      value: capitalizeText(String(credit.warrantyClass).toLowerCase()),
    },
    {
      id: "terms",
      label: "Plazo",
      value: `${Number(duesPaid || 0) + Number(outstandingDues || 0)} Meses`,
    },
    {
      id: "interest_rate",
      label: "Tasa de interés",
      value: `${roundInteresRate} % NAMV`,
    },
  ];

  if (differenceDays) {
    attributes.push({
      id: "days_past_due",
      label: "Días de mora",
      value: differenceDays,
    });
  }

  if (nextPaymentCapital) {
    attributes.push({
      id: "next_payment_capital",
      label: "Capital próximo pago",
      value: nextPaymentCapital,
    });
  }
  if (nextPaymentInterest) {
    attributes.push({
      id: "next_payment_interest",
      label: "Interes próximo pago",
      value: nextPaymentInterest,
    });
  }
  if (nextPaymentArrearsInterest) {
    attributes.push({
      id: "next_payment_arrears_interest",
      label: "Interés de mora",
      value: nextPaymentArrearsInterest,
    });
  }

  const tags: TagProps[] = inArrears
    ? [
        {
          label: "En mora",
          appearance: "error",
        },
      ]
    : [];

  const normalizedProductName = capitalizeText(
    String(credit.productName).toLowerCase(),
  );

  const creditType: EProductType = Object(
    credit.originationModel,
  ).code.toUpperCase();

  return {
    id: String(credit.obligationNumber),
    title: normalizedProductName,
    description: `${normalizedProductName} ${credit.obligationNumber}`,
    type: creditType,
    attributes,
    movements: [],
    amortization: [],
    tags,
  };
};

const mapCreditsApiToEntities = (
  credits: Record<string, string | number | object>[],
): IProduct[] => {
  return credits
    .map((credit) => mapCreditApiToEntity(credit))
    .filter((credit) => credit.type !== EProductType.CREDITCARD);
};

export { mapCreditApiToEntity, mapCreditsApiToEntities };
