import { creditDestinationRequestSteps } from "./config/assisted";
import { initalValuesCreditDestination } from "./config/initialValues";
import { loadingValidations } from "./forms/SystemValidationsForm/utils";
import {
  IFormsCreditDestinationRequest,
  IFormsCreditDestinationRequestRefs,
} from "./types";

const creditDestinationStepsRules = (
  currentStep: number,
  currentCreditDestinationRequest: IFormsCreditDestinationRequest,
  formReferences: IFormsCreditDestinationRequestRefs,
  isCurrentFormValid: boolean,
) => {
  let newCreditDestinationRequest = { ...currentCreditDestinationRequest };

  switch (currentStep) {
    case creditDestinationRequestSteps.destination.id: {
      const values = formReferences.destination.current?.values;

      if (!values) return currentCreditDestinationRequest;

      newCreditDestinationRequest.destination = {
        isValid: isCurrentFormValid,
        values,
      };

      if (
        JSON.stringify(values) !==
          JSON.stringify(currentCreditDestinationRequest.destination.values) &&
        values.selectedProduct
      ) {
        newCreditDestinationRequest.creditConditions = {
          isValid: false,
          values: {
            ...initalValuesCreditDestination.creditConditions,
            creditDestination: values.creditDestination,
            product: values.selectedProduct,
          },
        };
      }

      return newCreditDestinationRequest;
    }
    case creditDestinationRequestSteps.creditConditions.id: {
      const values = formReferences.creditConditions.current?.values;

      if (!values) return currentCreditDestinationRequest;

      newCreditDestinationRequest.creditConditions = {
        isValid: isCurrentFormValid,
        values,
      };

      if (
        JSON.stringify(values) !==
        JSON.stringify(currentCreditDestinationRequest.creditConditions.values)
      ) {
        newCreditDestinationRequest.systemValidations = {
          isValid: false,
          values: {
            ...initalValuesCreditDestination.systemValidations,
            validations: loadingValidations,
            destinationId: values.creditDestination?.id || "",
            destinationName: values.creditDestination?.value || "",
            productId: values.product.id,
            productName: values.product.title,
            paymentMethodCode: "30",
            paymentMethodName: "FONDECOM MENSUAL",
            requestAmount: values.amount,
            creditAmount: values.netValue,
            capitalPaymentPeriod: "100000",
            numQuotas: parseInt(values.deadline),
            nominalRate: values.interestRate,
            amortizationType: "AT",
            interestPaymentPeriod: values.cycleInterest.toString(),
            periodicity: values.periodicity.code,
            quotaValue: values.quota,
            amountToTurn: values.netValue,
          },
        };
      }

      return newCreditDestinationRequest;
    }
    case creditDestinationRequestSteps.systemValidations.id: {
      const values = formReferences.systemValidations.current?.values;

      if (!values) return currentCreditDestinationRequest;

      newCreditDestinationRequest.systemValidations = {
        isValid: isCurrentFormValid,
        values,
      };

      newCreditDestinationRequest.documentaryRequirements = {
        isValid: true,
        values: {
          ...initalValuesCreditDestination.documentaryRequirements,
          requiredDocuments: values.documents,
        },
      };

      return newCreditDestinationRequest;
    }
  }

  const stepKey = Object.entries(creditDestinationRequestSteps).find(
    ([, config]) => config.id === currentStep,
  )?.[0];

  if (!stepKey) return currentCreditDestinationRequest;

  const values =
    formReferences[stepKey as keyof IFormsCreditDestinationRequest]?.current
      ?.values;

  return (newCreditDestinationRequest = {
    ...newCreditDestinationRequest,
    [stepKey]: { isValid: isCurrentFormValid, values },
  });
};

export { creditDestinationStepsRules };
