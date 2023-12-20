import { usersMock } from "@mocks/users/users.mocks";
import { FormikProps } from "formik";
import { useRef, useState } from "react";
import {
  creditDestinationRequestSteps,
  creditDestinationStepsRules,
} from "./config/assisted";
import { initalValuesCreditDestination } from "./config/initialValues";
import { mapCommunicationChannels } from "./config/mappers";
import { ICommentsEntry } from "./forms/CommentsForm/types";
import { ICommunicationChannelsEntry } from "./forms/CommunicationChannelsForm/types";
import { ICreditConditionsEntry } from "./forms/CreditConditionsForm/types";
import { IDestinationEntry } from "./forms/DestinationForm/types";
import { IDisbursementEntry } from "./forms/DisbursementForm/types";
import { IPreliquidationEntry } from "./forms/PreliquidationForm/types";
import { ITermsAndConditionsEntry } from "./forms/TermsAndConditionsForm/types";
import { CreditDestinationRequestUI } from "./interface";
import {
  IFormsCreditDestinationRequest,
  IFormsCreditDestinationRequestRefs,
} from "./types";

function CreditDestinationRequest() {
  const [currentStep, setCurrentStep] = useState(
    creditDestinationRequestSteps.destination.id
  );
  const steps = Object.values(creditDestinationRequestSteps);

  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const [creditDestinationRequest, setCreditDestinationRequest] =
    useState<IFormsCreditDestinationRequest>({
      destination: {
        isValid: false,
        values: initalValuesCreditDestination.destination,
      },
      creditConditions: {
        isValid: false,
        values: initalValuesCreditDestination.creditConditions,
      },
      preliquidation: {
        isValid: true,
        values: initalValuesCreditDestination.preliquidation,
      },
      disbursement: {
        isValid: false,
        values: initalValuesCreditDestination.disbursement,
      },
      comments: {
        isValid: true,
        values: initalValuesCreditDestination.comments,
      },
      termsAndConditions: {
        isValid: false,
        values: initalValuesCreditDestination.termsAndConditions,
      },
      communicationChannels: {
        isValid: false,
        values: mapCommunicationChannels(usersMock[0].contact[0]),
      },
    });

  const destinationRef = useRef<FormikProps<IDestinationEntry>>(null);
  const creditConditionsRef = useRef<FormikProps<ICreditConditionsEntry>>(null);
  const preliquidationRef = useRef<FormikProps<IPreliquidationEntry>>(null);
  const disbursementRef = useRef<FormikProps<IDisbursementEntry>>(null);
  const commentsRef = useRef<FormikProps<ICommentsEntry>>(null);
  const termsAndConditionsRef =
    useRef<FormikProps<ITermsAndConditionsEntry>>(null);
  const communicationChannelsRef =
    useRef<FormikProps<ICommunicationChannelsEntry>>(null);

  const formReferences: IFormsCreditDestinationRequestRefs = {
    destination: destinationRef,
    creditConditions: creditConditionsRef,
    preliquidation: preliquidationRef,
    disbursement: disbursementRef,
    comments: commentsRef,
    termsAndConditions: termsAndConditionsRef,
    communicationChannels: communicationChannelsRef,
  };

  const handleStepChange = (stepId: number) => {
    const newCreditDestinationRequest = creditDestinationStepsRules(
      currentStep,
      creditDestinationRequest,
      formReferences,
      isCurrentFormValid
    );
    setCreditDestinationRequest(newCreditDestinationRequest);

    const changeStepKey = Object.entries(creditDestinationRequestSteps).find(
      ([, config]) => config.id === stepId
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;
    setIsCurrentFormValid(
      changeIsVerification ||
        newCreditDestinationRequest[
          changeStepKey as keyof IFormsCreditDestinationRequest
        ]?.isValid ||
        false
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleFinishAssisted = () => {};

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  return (
    <CreditDestinationRequestUI
      creditDestinationRequest={creditDestinationRequest}
      currentStep={currentStep}
      formReferences={formReferences}
      handleFinishAssisted={handleFinishAssisted}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleStepChange={handleStepChange}
      steps={steps}
      isCurrentFormValid={isCurrentFormValid}
      setIsCurrentFormValid={setIsCurrentFormValid}
    />
  );
}

export { CreditDestinationRequest };