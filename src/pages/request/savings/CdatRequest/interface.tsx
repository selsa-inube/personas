import { DecisionModal } from "@components/modals/general/DecisionModal";
import { LoadingModal } from "@components/modals/general/LoadingModal";
import { Title } from "@design/data/Title";
import { inube } from "@design/tokens";
import { DisbursementForm } from "@forms/DisbursementForm";
import { ShareMaturityForm } from "@forms/ShareMaturityForm";
import { SystemValidationsForm } from "@forms/SystemValidationsForm";
import { TermsAndConditionsForm } from "@forms/TermsAndConditionsForm";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Assisted, IAssistedStep } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { MdArrowBack } from "react-icons/md";
import { Blocker } from "react-router-dom";
import { ContactChannelsForm } from "src/shared/forms/ContactChannelsForm";
import { cdatRequestSteps } from "./config/assisted";
import { crumbsCdatRequest } from "./config/navigation";
import { DeadlineForm } from "./forms/DeadlineForm";
import { InterestPaymentForm } from "./forms/InterestPaymentForm";
import { InvestmentForm } from "./forms/InvestmentForm";
import { PaymentMethodForm } from "./forms/PaymentMethodForm";
import { CdatRequestVerification } from "./forms/Verification";
import { IFormsCdatRequest, IFormsCdatRequestRefs } from "./types";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormsCdatRequestRefs,
  cdatRequest: IFormsCdatRequest,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  handleStepChange: (stepId: number) => void,
) => {
  return (
    <>
      {currentStep === cdatRequestSteps.investment.number && (
        <InvestmentForm
          initialValues={cdatRequest.investment.values}
          ref={formReferences.investment}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.deadline.number && (
        <DeadlineForm
          initialValues={cdatRequest.deadline.values}
          ref={formReferences.deadline}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.interestPayment.number && (
        <InterestPaymentForm
          initialValues={cdatRequest.interestPayment.values}
          ref={formReferences.interestPayment}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.paymentMethod.number && (
        <PaymentMethodForm
          initialValues={cdatRequest.paymentMethod.values}
          ref={formReferences.paymentMethod}
          onFormValid={setIsCurrentFormValid}
        />
      )}

      {currentStep === cdatRequestSteps.disbursement.number && (
        <DisbursementForm
          initialValues={cdatRequest.disbursement.values}
          ref={formReferences.disbursement}
          requestType="cdat"
          productId={cdatRequest.investment.values.product?.id || ""}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.shareMaturity.number && (
        <ShareMaturityForm
          initialValues={cdatRequest.shareMaturity.values}
          productId={cdatRequest.investment.values.product?.id || ""}
          ref={formReferences.shareMaturity}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.systemValidations.number && (
        <SystemValidationsForm
          initialValues={cdatRequest.systemValidations.values}
          ref={formReferences.systemValidations}
          disbursementValues={cdatRequest.disbursement.values}
          moneySources={[
            {
              type: cdatRequest.paymentMethod.values.paymentMethod,
              name: cdatRequest.paymentMethod.values.paymentMethodName,
              accountNumber: cdatRequest.paymentMethod.values.accountNumber,
              value: cdatRequest.investment.values.investmentValue || 0,
            },
          ]}
          requestType="cdat"
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.termsAndConditions.number && (
        <TermsAndConditionsForm
          initialValues={cdatRequest.termsAndConditions.values}
          ref={formReferences.termsAndConditions}
          productId={cdatRequest.investment.values.product?.id || ""}
          productType="cdat"
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.contactChannels.number && (
        <ContactChannelsForm
          initialValues={cdatRequest.contactChannels.values}
          ref={formReferences.contactChannels}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === cdatRequestSteps.verification.number && (
        <CdatRequestVerification
          cdatRequest={cdatRequest}
          handleStepChange={handleStepChange}
        />
      )}
    </>
  );
};

interface CdatRequestUIProps {
  currentStep: number;
  steps: IAssistedStep[];
  isCurrentFormValid: boolean;
  cdatRequest: IFormsCdatRequest;
  formReferences: IFormsCdatRequestRefs;
  loadingSend: boolean;
  blocker: Blocker;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleStepChange: (stepId: number) => void;
  handleFinishAssisted: () => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

function CdatRequestUI(props: CdatRequestUIProps) {
  const {
    currentStep,
    steps,
    isCurrentFormValid,
    cdatRequest,
    formReferences,
    loadingSend,
    blocker,
    setIsCurrentFormValid,
    handleStepChange,
    handleFinishAssisted,
    handleNextStep,
    handlePreviousStep,
  } = props;

  const isTablet = useMediaQuery("(max-width: 1100px)");
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <>
      <Stack
        direction="column"
        gap={
          isMobile
            ? inube.spacing.s300
            : isTablet
              ? inube.spacing.s500
              : inube.spacing.s600
        }
      >
        <Stack direction="column" gap={inube.spacing.s300}>
          <Breadcrumbs crumbs={crumbsCdatRequest} />
          <Title
            title="CDAT"
            subtitle="Simula tu solicitud de CDAT"
            icon={<MdArrowBack />}
            navigatePage="/savings"
          />
        </Stack>

        <Assisted
          step={steps[currentStep - 1]}
          totalSteps={steps.length}
          onNextClick={handleNextStep}
          onBackClick={handlePreviousStep}
          onSubmitClick={handleFinishAssisted}
          disableNext={!isCurrentFormValid}
          size={isTablet ? "small" : "large"}
          controls={{
            goBackText: "Anterior",
            goNextText: "Siguiente",
            submitText: "Enviar",
          }}
        />

        <Stack direction="column" gap={inube.spacing.s300}>
          {renderStepContent(
            currentStep,
            formReferences,
            cdatRequest,
            setIsCurrentFormValid,
            handleStepChange,
          )}

          <Stack gap={inube.spacing.s150} justifyContent="flex-end">
            <Button
              onClick={handlePreviousStep}
              type="button"
              disabled={currentStep === steps[0].id}
              spacing="compact"
              variant="outlined"
              appearance="gray"
            >
              Atrás
            </Button>

            <Button
              onClick={handleNextStep}
              spacing="compact"
              disabled={!isCurrentFormValid}
            >
              {currentStep === steps.length ? "Pagar" : "Siguiente"}
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {loadingSend && (
        <LoadingModal
          title="Procesando pago..."
          message="Espera unos segundos, estamos generando la transacción."
        />
      )}

      {blocker.state === "blocked" && (
        <DecisionModal
          title="Abandonar solicitud"
          description="¿Estás seguro? Se perderá la solicitud en proceso."
          cancelText="Continuar"
          actionText="Salir"
          onCloseModal={() => blocker.reset()}
          onClick={() => blocker.proceed()}
          portalId="modals"
        />
      )}
    </>
  );
}

export { CdatRequestUI };
