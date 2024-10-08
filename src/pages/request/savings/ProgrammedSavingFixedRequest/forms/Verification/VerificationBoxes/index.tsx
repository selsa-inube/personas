import { BoxAttribute } from "@components/cards/BoxAttribute";
import { inube } from "@design/tokens";
import { renderCommentsVerification } from "@forms/CommentsForm/verification";
import { renderContactChannelsVerification } from "@forms/ContactChannelsForm/verification";
import { renderDisbursementVerification } from "@forms/DisbursementForm/verification";
import { renderPaymentMethodVerification } from "@forms/PaymentMethodForm/verification";
import { renderSystemValidationsVerification } from "@forms/SystemValidationsForm/verification";
import { renderTermsAndConditionsVerification } from "@forms/TermsAndConditionsForm/verification";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { periodicityDM } from "src/model/domains/general/periodicityDM";
import { currencyFormat } from "src/utils/currency";
import { programmedSavingFixedRequestSteps } from "../../../config/assisted";
import { IFormsProgrammedSavingFixedRequest } from "../../../types";
import { IPlanNameEntry } from "../../PlanNameForm/types";
import { ISavingConditionsEntry } from "../../SavingConditionsForm/types";
import { IShareMaturityEntry } from "../../ShareMaturityForm/types";

const renderSavingConditionsVerification = (
  values: ISavingConditionsEntry,
  isTablet: boolean,
) => (
  <Grid
    templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
    autoRows="auto"
    gap={inube.spacing.s100}
    width="100%"
  >
    <BoxAttribute label="Cuota:" value={currencyFormat(values.quota || 0)} />
    <BoxAttribute label="Medio de pago:" value={values.paymentMethod?.value} />
    <BoxAttribute
      label="Periodicidad:"
      value={periodicityDM.valueOf(values.periodicity.id)?.value}
    />
    <BoxAttribute label="¿Cuántas cuotas?:" value={values.deadline} />
  </Grid>
);

const renderShareMaturityVerification = (
  values: IShareMaturityEntry,
  isTablet: boolean,
) => (
  <Grid
    templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
    autoRows="auto"
    gap={inube.spacing.s100}
    width="100%"
  >
    <BoxAttribute label="Acción al vencimiento:" value={values.actionName} />
  </Grid>
);

const renderPlanNameVerification = (
  values: IPlanNameEntry,
  isTablet: boolean,
) => (
  <Stack
    direction="column"
    gap={isTablet ? inube.spacing.s200 : inube.spacing.s250}
    width="100%"
  >
    <BoxAttribute label="Nombre:" value={values.productName} />
  </Stack>
);

interface VerificationBoxesProps {
  programmedSavingFixedRequest: IFormsProgrammedSavingFixedRequest;
  stepKey: keyof typeof programmedSavingFixedRequestSteps;
  isTablet: boolean;
}

function VerificationBoxes(props: VerificationBoxesProps) {
  const { programmedSavingFixedRequest, stepKey, isTablet } = props;
  return (
    <>
      {stepKey === "savingConditions" &&
        renderSavingConditionsVerification(
          programmedSavingFixedRequest.savingConditions.values,
          isTablet,
        )}

      {stepKey === "paymentMethod" &&
        renderPaymentMethodVerification(
          programmedSavingFixedRequest.paymentMethod.values,
          isTablet,
        )}
      {stepKey === "shareMaturity" &&
        renderShareMaturityVerification(
          programmedSavingFixedRequest.shareMaturity.values,
          isTablet,
        )}
      {stepKey === "disbursement" &&
        renderDisbursementVerification(
          programmedSavingFixedRequest.disbursement.values,
          isTablet,
        )}
      {stepKey === "systemValidations" &&
        renderSystemValidationsVerification(
          programmedSavingFixedRequest.systemValidations.values,
          isTablet,
        )}
      {stepKey === "planName" &&
        renderPlanNameVerification(
          programmedSavingFixedRequest.planName.values,
          isTablet,
        )}
      {stepKey === "termsAndConditions" &&
        renderTermsAndConditionsVerification(
          programmedSavingFixedRequest.termsAndConditions.values,
          isTablet,
        )}
      {stepKey === "comments" &&
        renderCommentsVerification(
          programmedSavingFixedRequest.comments.values,
        )}
      {stepKey === "contactChannels" &&
        renderContactChannelsVerification(
          programmedSavingFixedRequest.contactChannels.values,
        )}
    </>
  );
}

export { VerificationBoxes };
