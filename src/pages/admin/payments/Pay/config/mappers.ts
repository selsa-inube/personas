import { TagProps } from "@design/data/Tag";
import { IPayment } from "src/model/entity/payment";
import { ICommitment, IProduct } from "src/model/entity/product";
import { ICommentsEntry } from "src/shared/forms/CommentsForm/types";
import { extractAttribute } from "src/utils/products";
import { IObligationsEntry } from "../forms/ObligationsForm/types";
import { IPaymentMethodEntry } from "../forms/PaymentMethodForm/types";
import {
  EPaymentGroupType,
  EPaymentOptionType,
  EPaymentStatusType,
} from "../types";

const buAllowCustomValue = true;

const mapObligations = (
  credits: IProduct[],
  commitments: ICommitment[],
): IObligationsEntry => {
  const payments: IPayment[] = [];
  const paymentMethodFilters: string[] = [];

  credits.forEach((credit) => {
    /* const expiredValue = Number( // TEMP
      extractAttribute(credit.attributes, "expired_value")?.value || 0,
    ); */

    const nextPaymentValue = Number(
      extractAttribute(credit.attributes, "next_payment_value")?.value || 0,
    );

    const paymentMethod = String(
      extractAttribute(credit.attributes, "payment_method")?.value,
    );

    if (!paymentMethodFilters.includes(paymentMethod)) {
      paymentMethodFilters.push(paymentMethod);
    }

    /* const totalValue = Number( // TEMP
      extractAttribute(credit.attributes, "net_value")?.value || 0,
    ); */

    const inArrears =
      extractAttribute(credit.attributes, "in_arrears")?.value.toString() ==
      "true";

    const tags: TagProps[] = [
      {
        label: paymentMethod,
        appearance: "primary",
        modifier: "clear",
        textAppearance: "primary",
      },
    ];

    if (inArrears) {
      tags.push({
        label: "En mora",
        appearance: "error",
      });
    }

    const options = [
      /* { // TEMP
        id: EPaymentOptionType.EXPIREDVALUE,
        label: "Valor vencido",
        value: expiredValue,
      }, */
      {
        id: EPaymentOptionType.NEXTVALUE,
        label: "Próximo vencimiento",
        description: "Inmediato",
        value: nextPaymentValue,
      },
      /* { // TEMP
        id: EPaymentOptionType.TOTALVALUE,
        label: "Pago total",
        value: totalValue,
      }, */
      {
        id: EPaymentOptionType.OTHERVALUE,
        label: "Otro valor / Reducir cuota",
        value: 0,
        hidden: true,
      },
    ];

    payments.push({
      id: credit.id,
      title: credit.title,
      group: EPaymentGroupType.CREDITS,
      paymentMethod,
      status: inArrears
        ? EPaymentStatusType.ARREARS
        : EPaymentStatusType.ANYWHERE,
      options,
      tags,
    });
  });

  commitments.forEach((commitment) => {
    /* const expiredValue = Number( // TEMP
      extractAttribute(commitment.attributes, "expired_value")?.value || 0,
    ); */

    const nextPaymentValue = Number(
      extractAttribute(commitment.attributes, "next_payment_value")?.value || 0,
    );

    const paymentMethod = String(
      extractAttribute(commitment.attributes, "payment_method")?.value,
    );

    if (!paymentMethodFilters.includes(paymentMethod)) {
      paymentMethodFilters.push(paymentMethod);
    }

    const inArrears =
      extractAttribute(commitment.attributes, "in_arrears")?.value.toString() ==
      "true";

    const tags: TagProps[] = [
      {
        label: paymentMethod,
        appearance: "primary",
        modifier: "clear",
        textAppearance: "primary",
      },
    ];

    if (inArrears) {
      tags.push({
        label: "En mora",
        appearance: "error",
      });
    }

    const options = [
      /* { // TEMP
        id: EPaymentOptionType.EXPIREDVALUE,
        label: "Valor vencido",
        value: expiredValue,
      }, */
      {
        id: EPaymentOptionType.NEXTVALUE,
        label: "Próximo vencimiento",
        description: "Inmediato",
        value: nextPaymentValue,
      },
    ];

    payments.push({
      id: commitment.id,
      title: commitment.title,
      group: EPaymentGroupType.SAVINGS,
      paymentMethod,
      status: inArrears
        ? EPaymentStatusType.ARREARS
        : EPaymentStatusType.ANYWHERE,
      options,
      tags,
    });
  });

  return {
    payments,
    allowCustomValue: buAllowCustomValue,
    totalPayment: 0,
    paymentMethodFilters,
  };
};

const mapPaymentMethod = (): IPaymentMethodEntry => {
  return {
    paymentMethod: "",
    valueToPay: 0,
    paidValue: 0,
    pendingValue: 0,
  };
};

const mapComments = (): ICommentsEntry => {
  return {
    comments: "",
  };
};

export { mapComments, mapObligations, mapPaymentMethod };
