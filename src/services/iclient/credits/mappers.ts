import { TagProps } from "@design/data/Tag";
import { IMovement, IProduct } from "src/model/entity/product";
import { formatPrimaryDate } from "src/utils/dates";
import { capitalizeText } from "src/utils/texts";

const mapCreditMovementApiToEntity = (
  movement: Record<string, any>
): IMovement => {
  const totalPay = movement.capitalCreditPesos
    ? Number(movement.capitalCreditPesos)
    : 0 + movement.creditInterestPesos
    ? Number(movement.creditInterestPesos)
    : 0 + movement.lifeInsuranceCreditPesos
    ? Number(movement.lifeInsuranceCreditPesos)
    : 0 + movement.capitalizationCreditPesos
    ? Number(movement.capitalizationCreditPesos)
    : 0;

  return {
    id: movement.movementId,
    date: formatPrimaryDate(new Date(movement.movementDate)),
    reference: movement.movementNumber,
    description: movement.movementDescription || "",
    capitalPayment: movement.capitalCreditPesos
      ? Number(movement.capitalCreditPesos)
      : 0,
    interest: movement.creditInterestPesos
      ? Number(movement.creditInterestPesos)
      : 0,
    lifeInsurance: movement.lifeInsuranceCreditPesos
      ? Number(movement.lifeInsuranceCreditPesos)
      : 0,
    patrimonialInsurance: 0,
    capitalization: movement.capitalizationCreditPesos
      ? Number(movement.capitalizationCreditPesos)
      : 0,
    commission: 0,
    totalValue: totalPay,
  };
};

const mapCreditMovementsApiToEntities = (
  movements: Record<string, any>[]
): IMovement[] => {
  return movements.map((movement) => mapCreditMovementApiToEntity(movement));
};

const mapCreditApiToEntity = (credit: Record<string, any>): IProduct => {
  const nextPaymentDate = new Date(credit.nextPaymentDate);
  nextPaymentDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const attributes = [
    {
      id: "net_value",
      label: "Saldo total",
      value: Number(credit.balanceObligation.TotalPending),
    },
    {
      id: "next_payment_date",
      label: "Fecha próximo pago",
      value: formatPrimaryDate(new Date(nextPaymentDate)),
    },
    {
      id: "loan_date",
      label: "Fecha de préstamo",
      value: formatPrimaryDate(new Date(credit.obligationDate)),
    },
    {
      id: "next_due_date",
      label: "Próximo vencimiento",
      value: formatPrimaryDate(new Date(credit.nextPaymentDate)),
    },
    { id: "quote", label: "Cuota", value: credit.heightQuota },

    {
      id: "payment_means",
      label: "Medio de pago",
      value: credit.paymentMethodName,
    },
    { id: "loan_value", label: "Valor del préstamo", value: credit.amount },
    {
      id: "peridiocity",
      label: "Periodicidad",
      value: credit.periodicityOfQuota,
    },
  ];

  const tags: TagProps[] =
    today > nextPaymentDate
      ? [
          {
            label: "En mora",
            appearance: "error",
          },
        ]
      : [];

  const normalizedProductName = capitalizeText(
    credit.productName.toLowerCase()
  );

  return {
    id: credit.obligationNumber,
    title: normalizedProductName,
    description: `${normalizedProductName} ${credit.obligationNumber}`,
    type: credit.lineCode,
    attributes,
    movements: mapCreditMovementsApiToEntities(credit.lastMovementTheObligations),
    amortization: [],
    tags,
  };
};

const mapCreditsApiToEntities = (
  credits: Record<string, any>[]
): IProduct[] => {
  return credits.map((credit) => mapCreditApiToEntity(credit));
};

export {
  mapCreditApiToEntity,
  mapCreditMovementApiToEntity,
  mapCreditMovementsApiToEntities,
  mapCreditsApiToEntities,
};
