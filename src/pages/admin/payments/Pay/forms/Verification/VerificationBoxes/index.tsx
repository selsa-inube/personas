import { BoxAttribute } from "@components/cards/BoxAttribute";
import { Totalizer } from "@components/layout/Totalizer";
import { inube } from "@design/tokens";
import { Divider, Grid, Stack } from "@inubekit/inubekit";
import { Fragment } from "react";
import { EPaymentMethodType } from "src/model/entity/payment";
import { ICommentsEntry } from "src/shared/forms/CommentsForm/types";
import { currencyFormat } from "src/utils/currency";
import { paySteps } from "../../../config/assisted";
import { IFormsPay } from "../../../types";
import { IObligationsEntry } from "../../ObligationsForm/types";
import { paymentMethods } from "../../PaymentMethodForm/config/payment";
import {
  EMoneySourceType,
  IPaymentMethodEntry,
} from "../../PaymentMethodForm/types";
import { StyledPayments } from "./styles";

const renderObligationsVerification = (
  values: IObligationsEntry,
  isTablet: boolean,
) => {
  const filteredPayments = values.payments.filter(
    (payment) => payment.valueToPay,
  );

  return (
    <Stack width="100%" direction="column" gap={inube.spacing.s200}>
      <StyledPayments>
        {filteredPayments.map((payment) => {
          const selectedPayment = payment.options.find(
            (option) => option.selected,
          );

          const applyPay =
            payment.applyPayOption && payment.applyPayOption.label;

          return (
            <Fragment key={payment.id}>
              <Grid
                templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
                gap={inube.spacing.s100}
                autoRows="auto"
              >
                <BoxAttribute
                  label="Nombre de la obligación:"
                  value={payment.title}
                />
                <BoxAttribute
                  label="Numero de obligación:"
                  value={payment.id}
                />
                <BoxAttribute
                  label="Tipo de pago:"
                  value={selectedPayment?.label}
                />
                <BoxAttribute
                  label="Valor del pago:"
                  value={`${currencyFormat(payment.valueToPay || 0)}`}
                />
                {applyPay && (
                  <BoxAttribute label="Pago aplicado a:" value={applyPay} />
                )}
              </Grid>
              {filteredPayments.length > 1 && <Divider dashed />}
            </Fragment>
          );
        })}
      </StyledPayments>

      <Stack justifyContent="flex-end" width="100%">
        <Totalizer isMobile={isTablet} value={values.totalPayment} />
      </Stack>
    </Stack>
  );
};

const renderPaymentMethodVerification = (
  values: IPaymentMethodEntry,
  isTablet: boolean,
) => (
  <Grid
    templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
    gap={inube.spacing.s100}
    autoRows="auto"
    width="100%"
  >
    {values.paymentMethod === EPaymentMethodType.PSE ? (
      <BoxAttribute
        label="Forma de recaudo:"
        value={
          paymentMethods.find(
            (paymentMethod) => paymentMethod.id === values.paymentMethod,
          )?.label
        }
      />
    ) : (
      <>
        <BoxAttribute
          label="Forma de recaudo:"
          value={
            paymentMethods.find(
              (paymentMethod) => paymentMethod.id === values.paymentMethod,
            )?.label
          }
        />

        <BoxAttribute
          label="Valor pagado:"
          value={currencyFormat(values.valueToPay)}
        />

        {Object.values(values.moneySources || {}).map((moneySource) =>
          moneySource.value && moneySource.value > 0 ? (
            <BoxAttribute
              key={moneySource.id}
              label={
                moneySource.type === EMoneySourceType.SAVINGACCOUNT
                  ? `${moneySource.label} - ${moneySource.id}`
                  : moneySource.label
              }
              value={currencyFormat(moneySource.value)}
            />
          ) : undefined,
        )}
      </>
    )}
  </Grid>
);

const renderCommentsVerification = (values: ICommentsEntry) => (
  <Stack width="100%" direction="column">
    {values.comments !== "" && (
      <BoxAttribute
        label="Comentarios adicionales:"
        value={values.comments}
        direction="column"
      />
    )}
  </Stack>
);

interface VerificationBoxesProps {
  pay: IFormsPay;
  stepKey: keyof typeof paySteps;
  isTablet: boolean;
}

function VerificationBoxes(props: VerificationBoxesProps) {
  const { pay, stepKey, isTablet } = props;
  return (
    <>
      {stepKey === "obligations" &&
        renderObligationsVerification(pay.obligations.values, isTablet)}

      {stepKey === "paymentMethod" &&
        renderPaymentMethodVerification(pay.paymentMethod.values, isTablet)}

      {stepKey === "comments" &&
        renderCommentsVerification(pay.comments.values)}
    </>
  );
}

export { VerificationBoxes };
