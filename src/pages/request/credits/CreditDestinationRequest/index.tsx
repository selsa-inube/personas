import { useAuth } from "@inube/auth";
import { IMessage } from "@ptypes/messages.types";
import { FormikProps } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { MdSentimentNeutral } from "react-icons/md";
import { Navigate, useBlocker, useNavigate } from "react-router-dom";
import { AppContext } from "src/context/app";
import { getDestinationsForUser } from "src/services/iclient/credits/getDestinations";
import { ICommentsEntry } from "src/shared/forms/CommentsForm/types";
import { mapContactChannels } from "src/shared/forms/ContactChannelsForm/mappers";
import { IContactChannelsEntry } from "src/shared/forms/ContactChannelsForm/types";
import { initialMessageState } from "src/utils/messages";
import { IDisbursementEntry } from "../../../../shared/forms/DisbursementForm/types";
import { creditDestinationRequestSteps } from "./config/assisted";
import { initalValuesCreditDestination } from "./config/initialValues";
import { mapDestination } from "./config/mappers";
import { ICreditConditionsEntry } from "./forms/CreditConditionsForm/types";
import { IDestinationEntry } from "./forms/DestinationForm/types";
import { IDocumentaryRequirementsEntry } from "./forms/DocumentaryRequirementsForm/types";
import { IPaymentMethodEntry } from "./forms/PaymentMethodForm/types";
import { ISystemValidationsEntry } from "./forms/SystemValidationsForm/types";
import { ITermsAndConditionsEntry } from "./forms/TermsAndConditionsForm/types";
import { CreditDestinationRequestUI } from "./interface";
import {
  IFormsCreditDestinationRequest,
  IFormsCreditDestinationRequestRefs,
} from "./types";
import { creditDestinationStepsRules, sendCreditRequest } from "./utils";

function CreditDestinationRequest() {
  const { accessToken } = useAuth();
  const { user } = useContext(AppContext);
  const [loadingSend, setLoadingSend] = useState(false);

  const [currentStep, setCurrentStep] = useState(
    creditDestinationRequestSteps.destination.id,
  );
  const steps = Object.values(creditDestinationRequestSteps);
  const [message, setMessage] = useState<IMessage>(initialMessageState);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const { getFlag } = useContext(AppContext);
  const navigate = useNavigate();

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
      paymentMethod: {
        isValid: false,
        values: initalValuesCreditDestination.paymentMethod,
      },
      disbursement: {
        isValid: false,
        values: initalValuesCreditDestination.disbursement,
      },
      systemValidations: {
        isValid: false,
        values: initalValuesCreditDestination.systemValidations,
      },
      documentaryRequirements: {
        isValid: true,
        values: initalValuesCreditDestination.documentaryRequirements,
      },
      comments: {
        isValid: true,
        values: initalValuesCreditDestination.comments,
      },
      termsAndConditions: {
        isValid: false,
        values: initalValuesCreditDestination.termsAndConditions,
      },
      contactChannels: {
        isValid: false,
        values: mapContactChannels({
          cellPhone: parseInt(user.phone) || 0,
          email: user.email || "",
        }),
      },
    });

  const destinationRef = useRef<FormikProps<IDestinationEntry>>(null);
  const creditConditionsRef = useRef<FormikProps<ICreditConditionsEntry>>(null);
  const paymentMethodRef = useRef<FormikProps<IPaymentMethodEntry>>(null);
  const disbursementRef = useRef<FormikProps<IDisbursementEntry>>(null);
  const systemValidationsRef =
    useRef<FormikProps<ISystemValidationsEntry>>(null);
  const documentaryRequirementsRef =
    useRef<FormikProps<IDocumentaryRequirementsEntry>>(null);
  const commentsRef = useRef<FormikProps<ICommentsEntry>>(null);
  const termsAndConditionsRef =
    useRef<FormikProps<ITermsAndConditionsEntry>>(null);
  const contactChannelsRef = useRef<FormikProps<IContactChannelsEntry>>(null);

  const formReferences: IFormsCreditDestinationRequestRefs = {
    destination: destinationRef,
    creditConditions: creditConditionsRef,
    paymentMethod: paymentMethodRef,
    disbursement: disbursementRef,
    systemValidations: systemValidationsRef,
    documentaryRequirements: documentaryRequirementsRef,
    comments: commentsRef,
    termsAndConditions: termsAndConditionsRef,
    contactChannels: contactChannelsRef,
  };

  const validateDestinations = async () => {
    if (
      !accessToken ||
      (creditDestinationRequest.destination.values.destination &&
        creditDestinationRequest.destination.values.product)
    )
      return;

    const destinations = await getDestinationsForUser(
      user.identification,
      accessToken,
    );

    setCreditDestinationRequest((prev) => ({
      ...prev,
      destination: {
        ...prev.destination,
        values: mapDestination(destinations),
      },
    }));
  };

  useEffect(() => {
    validateDestinations();
  }, [user, accessToken]);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname &&
      !nextLocation.search.includes("?success_request=true"),
  );

  const handleStepChange = (stepId: number) => {
    const newCreditDestinationRequest = creditDestinationStepsRules(
      currentStep,
      creditDestinationRequest,
      formReferences,
      isCurrentFormValid,
    );
    setCreditDestinationRequest(newCreditDestinationRequest);

    const changeStepKey = Object.entries(creditDestinationRequestSteps).find(
      ([, config]) => config.id === stepId,
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;
    setIsCurrentFormValid(
      changeIsVerification ||
        newCreditDestinationRequest[
          changeStepKey as keyof IFormsCreditDestinationRequest
        ]?.isValid ||
        false,
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleFinishAssisted = () => {
    if (!accessToken || !user) return;

    setLoadingSend(true);

    sendCreditRequest(
      user,
      creditDestinationRequest,
      accessToken,
      navigate,
    ).catch(() => {
      setMessage({
        show: true,
        title: "La solicitud no pudo ser procesada",
        description:
          "Ya fuimos notificados y estamos revisando. Intenta de nuevo más tarde.",
        icon: <MdSentimentNeutral />,
        appearance: "danger",
      });
      setLoadingSend(false);
    });
  };

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length) {
      handleStepChange(currentStep + 1);
      return;
    }
    handleFinishAssisted();
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleCloseMessage = () => {
    setMessage(initialMessageState);
  };

  if (!getFlag("admin.credits.credits.request-credit").value) {
    return <Navigate to="/" />;
  }

  return (
    <CreditDestinationRequestUI
      steps={steps}
      isCurrentFormValid={isCurrentFormValid}
      creditDestinationRequest={creditDestinationRequest}
      currentStep={currentStep}
      formReferences={formReferences}
      loadingSend={loadingSend}
      message={message}
      blocker={blocker}
      handleFinishAssisted={handleFinishAssisted}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleStepChange={handleStepChange}
      setIsCurrentFormValid={setIsCurrentFormValid}
      onCloseMessage={handleCloseMessage}
    />
  );
}

export { CreditDestinationRequest };
