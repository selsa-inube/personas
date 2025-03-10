import { mapComments } from "@forms/CommentsForm/mappers";
import { mapDisbursement } from "@forms/DisbursementForm/mappers";
import { mapDocumentaryRequirements } from "@forms/DocumentaryRequirementsForm/mappers";
import { mapPaymentMethod } from "@forms/PaymentMethodForm/mappers";
import { mapSystemValidations } from "@forms/SystemValidationsForm/mappers";
import { ISystemValidationsEntry } from "@forms/SystemValidationsForm/types";
import { mapTermsAndConditions } from "@forms/TermsAndConditionsForm/mappers";
import { ITermsAndConditionsEntry } from "@forms/TermsAndConditionsForm/types";
import { useAuth } from "@inube/auth";
import { useFlag } from "@inubekit/inubekit";
import { FormikProps } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useBlocker, useNavigate } from "react-router-dom";
import { AppContext } from "src/context/app";
import { getDestinationsForUser } from "src/services/iclient/credits/getDestinations";
import { removeDocument } from "src/services/iclient/documents/removeDocument";
import { ICommentsEntry } from "src/shared/forms/CommentsForm/types";
import { mapContactChannels } from "src/shared/forms/ContactChannelsForm/mappers";
import { IContactChannelsEntry } from "src/shared/forms/ContactChannelsForm/types";
import { IDisbursementEntry } from "../../../../shared/forms/DisbursementForm/types";
import { IDocumentaryRequirementsEntry } from "../../../../shared/forms/DocumentaryRequirementsForm/types";
import { IPaymentMethodEntry } from "../../../../shared/forms/PaymentMethodForm/types";
import { creditDestinationRequestSteps } from "./config/assisted";
import { initalValuesCreditDestination } from "./config/initialValues";
import { mapDestination } from "./config/mappers";
import { ICreditConditionsEntry } from "./forms/CreditConditionsForm/types";
import { IDestinationEntry } from "./forms/DestinationForm/types";
import { CreditDestinationRequestUI } from "./interface";
import {
  IFormsCreditDestinationRequest,
  IFormsCreditDestinationRequestRefs,
} from "./types";
import { creditDestinationStepsRules, sendCreditRequest } from "./utils";

function CreditDestinationRequest() {
  const { accessToken } = useAuth();
  const { user, serviceDomains, loadServiceDomains } = useContext(AppContext);
  const [loadingSend, setLoadingSend] = useState(false);

  const [currentStep, setCurrentStep] = useState(
    creditDestinationRequestSteps.destination.number,
  );
  const [redirectModal, setRedirectModal] = useState(false);
  const steps = Object.values(creditDestinationRequestSteps);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);
  const { getFlag } = useContext(AppContext);
  const navigate = useNavigate();
  const { addFlag } = useFlag();

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
        values: mapPaymentMethod(),
      },
      disbursement: {
        isValid: false,
        values: mapDisbursement(),
      },
      systemValidations: {
        isValid: false,
        values: mapSystemValidations(),
      },
      documentaryRequirements: {
        isValid: true,
        values: mapDocumentaryRequirements(),
      },
      comments: {
        isValid: true,
        values: mapComments(),
      },
      termsAndConditions: {
        isValid: false,
        values: mapTermsAndConditions(),
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
        creditDestinationRequest.destination.values.product) ||
      !user.identification
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

  const validateEnums = async () => {
    if (!accessToken) return;

    if (
      serviceDomains.integratedbanks.length > 0 &&
      serviceDomains.identificationtype.length > 0
    )
      return;

    loadServiceDomains(["integratedbanks", "identificationtype"], accessToken);
  };

  useEffect(() => {
    validateEnums();
  }, [accessToken]);

  const handleStepChange = (stepId: number) => {
    const newCreditDestinationRequest = creditDestinationStepsRules(
      currentStep,
      creditDestinationRequest,
      formReferences,
      isCurrentFormValid,
    );

    setCreditDestinationRequest(newCreditDestinationRequest);

    const changeStepKey = Object.entries(creditDestinationRequestSteps).find(
      ([, config]) => config.number === stepId,
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

    sendCreditRequest(user, creditDestinationRequest, accessToken)
      .then(() => {
        setLoadingSend(false);
        setRedirectModal(true);
      })
      .catch(() => {
        addFlag({
          title: "La solicitud no pudo ser procesada",
          description:
            "Ya fuimos notificados y estamos revisando. Intenta de nuevo más tarde.",
          appearance: "danger",
          duration: 5000,
        });

        setLoadingSend(false);
      });
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      handleStepChange(currentStep + 1);
      return;
    }
    handleFinishAssisted();
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      handleStepChange(currentStep - 1);
    }
  };

  const handleLeaveRequest = async () => {
    for (const file of creditDestinationRequest.documentaryRequirements.values
      .selectedDocuments) {
      if (!accessToken || !file.documentType || !file.sequence) return;

      await removeDocument(
        {
          documentType: file.documentType,
          sequence: file.sequence,
        },
        accessToken,
      );
    }

    blocker.state === "blocked" && blocker.proceed();
  };

  const handleRedirectToHome = () => {
    navigate("/?success_request=true");
  };

  const handleRedirectToRequests = () => {
    navigate("/my-requests?success_request=true");
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
      blocker={blocker}
      redirectModal={redirectModal}
      onFinishAssisted={handleFinishAssisted}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      onStepChange={handleStepChange}
      setIsCurrentFormValid={setIsCurrentFormValid}
      onLeaveRequest={handleLeaveRequest}
      onRedirectToHome={handleRedirectToHome}
      onRedirectToRequests={handleRedirectToRequests}
    />
  );
}

export { CreditDestinationRequest };
