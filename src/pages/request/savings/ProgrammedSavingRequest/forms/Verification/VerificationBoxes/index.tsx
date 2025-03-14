import { BoxAttribute } from "@components/cards/BoxAttribute";
import { inube } from "@design/tokens";
import { renderActionExpirationVerification } from "@forms/ActionExpirationForm/verification";
import { renderContactChannelsVerification } from "@forms/ContactChannelsForm/verification";
import { renderDisbursementVerification } from "@forms/DisbursementForm/verification";
import { renderPaymentMethodVerification } from "@forms/PaymentMethodForm/verification";
import { renderSystemValidationsVerification } from "@forms/SystemValidationsForm/verification";
import { renderTermsAndConditionsVerification } from "@forms/TermsAndConditionsForm/verification";
import { Grid } from "@inubekit/inubekit";
import { periodicityDM } from "src/model/domains/general/periodicityDM";
import { currencyFormat } from "src/utils/currency";
import { programmedSavingRequestSteps } from "../../../config/assisted";
import { IFormsProgrammedSavingRequest } from "../../../types";
import { IDestinationEntry } from "../../DestinationForm/types";
import { ISavingConditionsEntry } from "../../SavingConditionsForm/types";

const renderDestinationVerification = (
  values: IDestinationEntry,
  isTablet: boolean,
) => (
  <Grid
    templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
    autoRows="auto"
    gap={inube.spacing.s100}
    width="100%"
  >
    <BoxAttribute
      label="Producto:"
      direction={isTablet ? "column" : "row"}
      value={values.product?.title}
    />
  </Grid>
);

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

interface VerificationBoxesProps {
  programmedSavingRequest: IFormsProgrammedSavingRequest;
  stepKey: keyof typeof programmedSavingRequestSteps;
  isTablet: boolean;
}

function VerificationBoxes(props: VerificationBoxesProps) {
  const { programmedSavingRequest, stepKey, isTablet } = props;
  return (
    <>
      {stepKey === "destination" &&
        renderDestinationVerification(
          programmedSavingRequest.destination.values,
          isTablet,
        )}
      {stepKey === "savingConditions" &&
        renderSavingConditionsVerification(
          programmedSavingRequest.savingConditions.values,
          isTablet,
        )}

      {stepKey === "paymentMethod" &&
        renderPaymentMethodVerification(
          programmedSavingRequest.paymentMethod.values,
          isTablet,
        )}
      {stepKey === "actionExpiration" &&
        renderActionExpirationVerification(
          programmedSavingRequest.actionExpiration.values,
          isTablet,
        )}
      {stepKey === "disbursement" &&
        renderDisbursementVerification(
          programmedSavingRequest.disbursement.values,
          isTablet,
        )}
      {stepKey === "systemValidations" &&
        renderSystemValidationsVerification(
          programmedSavingRequest.systemValidations.values,
          isTablet,
        )}
      {stepKey === "termsAndConditions" &&
        renderTermsAndConditionsVerification(
          programmedSavingRequest.termsAndConditions.values,
          isTablet,
        )}
      {stepKey === "contactChannels" &&
        renderContactChannelsVerification(
          programmedSavingRequest.contactChannels.values,
          isTablet,
        )}
    </>
  );
}

export { VerificationBoxes };
