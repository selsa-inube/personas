import { BoxAttribute } from "@components/cards/BoxAttribute";
import { inube } from "@design/tokens";
import { renderContactChannelsVerification } from "@forms/ContactChannelsForm/verification";
import { renderDisbursementVerification } from "@forms/DisbursementForm/verification";
import { renderDocumentaryRequirementsVerification } from "@forms/DocumentaryRequirementsForm/verification";
import { renderSystemValidationsVerification } from "@forms/SystemValidationsForm/verification";
import { renderTermsAndConditionsVerification } from "@forms/TermsAndConditionsForm/verification";
import { Grid } from "@inubekit/grid";
import { aidTypeDM } from "src/model/domains/services/aids/aidTypeDM";
import { currencyFormat } from "src/utils/currency";
import { capitalizeEachWord } from "src/utils/texts";
import { aidRequestSteps } from "../../../config/assisted";
import { IFormsAidRequest } from "../../../types";
import { IBeneficiariesEntry } from "../../BeneficiariesForm/types";
import { IDetailsSituationEntry } from "../../DetailsSituationForm/types";

const renderBeneficiariesVerification = (
  values: IBeneficiariesEntry,
  isTablet: boolean,
) => {
  const selectedBeneficiary = values.beneficiaries.find(
    (beneficiary) => beneficiary.selected,
  );

  return (
    <Grid
      templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
      autoRows="auto"
      width="100%"
      gap={inube.spacing.s100}
    >
      <BoxAttribute
        label="Nombre:"
        value={capitalizeEachWord(selectedBeneficiary?.name || "")}
      />
      <BoxAttribute
        label="Identificación:"
        value={`${selectedBeneficiary?.identificationType} ${selectedBeneficiary?.identificationNumber}`}
      />
      <BoxAttribute
        label="Tipo:"
        value={selectedBeneficiary?.relationship?.value}
      />
    </Grid>
  );
};

const renderDetailsSituationVerification = (
  values: IDetailsSituationEntry,
  isTablet: boolean,
) => {
  return (
    <Grid
      templateColumns={`repeat(${isTablet ? 1 : 2}, 1fr)`}
      autoRows="auto"
      width="100%"
      gap={inube.spacing.s100}
    >
      <BoxAttribute
        label="Valor de la solicitud:"
        value={
          values.aidType.id === aidTypeDM.REQUIRED_DAYS.id
            ? `${values.applicationDays} Días`
            : currencyFormat(values.applicationValue || 0)
        }
      />
      {values.message !== "" && (
        <BoxAttribute
          label="Detalles adicionales:"
          value={values.message}
          direction="column"
        />
      )}
    </Grid>
  );
};

interface VerificationBoxesProps {
  aidRequest: IFormsAidRequest;
  stepKey: keyof typeof aidRequestSteps;
  isTablet: boolean;
}

function VerificationBoxes(props: VerificationBoxesProps) {
  const { stepKey, aidRequest, isTablet } = props;
  return (
    <>
      {stepKey === "beneficiaries" &&
        renderBeneficiariesVerification(
          aidRequest.beneficiaries.values,
          isTablet,
        )}

      {stepKey === "detailsSituation" &&
        renderDetailsSituationVerification(
          aidRequest.detailsSituation.values,
          isTablet,
        )}

      {stepKey === "systemValidations" &&
        renderSystemValidationsVerification(
          aidRequest.systemValidations.values,
          isTablet,
        )}

      {stepKey === "documentaryRequirements" &&
        renderDocumentaryRequirementsVerification(
          aidRequest.documentaryRequirements.values,
          isTablet,
        )}

      {stepKey === "disbursement" &&
        renderDisbursementVerification(
          aidRequest.disbursement.values,
          isTablet,
        )}

      {stepKey === "termsAndConditions" &&
        renderTermsAndConditionsVerification(
          aidRequest.termsAndConditions.values,
          isTablet,
        )}

      {stepKey === "contactChannels" &&
        renderContactChannelsVerification(aidRequest.contactChannels.values)}
    </>
  );
}

export { VerificationBoxes };
