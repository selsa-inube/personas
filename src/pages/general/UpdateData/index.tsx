import { usersMock } from "@mocks/users/users.mocks";
import { FormikProps } from "formik";
import { useRef, useState } from "react";
import { updateDataSteps } from "./config/assisted";
import {
  mapFinancialOperations,
  mapPersonalInformation,
  mapBankTransfers,
} from "./config/mappers";
import { IFinancialOperationsEntry } from "./forms/FinancialOperationsForm/types";
import { IBankTransfersEntry } from "./forms/BankTransfersForm/types";
import { IPersonalAssetEntries } from "./forms/PersonalAssetsForm/types";
import { IPersonalDebtEntries } from "./forms/PersonalDebtsForm/types";
import { IPersonalInformationEntry } from "./forms/PersonalInformationForm/types";
import { IPersonalReferenceEntries } from "./forms/PersonalReferencesForm/types";
import { UpdateDataUI } from "./interface";
import { IFormsUpdateData, IFormsUpdateDataRefs } from "./types";

function UpdateData() {
  const [currentStep, setCurrentStep] = useState(
    updateDataSteps.personalInformation.id
  );
  const steps = Object.values(updateDataSteps);
  const [updateData, setUpdateData] = useState<IFormsUpdateData>({
    personalInformation: mapPersonalInformation(usersMock[0]),
    bankTransfers: mapBankTransfers(usersMock[0].bankTransfersAccount),
    personalAssets: { entries: [] },
    personalDebts: { entries: [] },
    personalReferences: { entries: [] },
    financialOperations: mapFinancialOperations(),
  });
  const personalInfoRef = useRef<FormikProps<IPersonalInformationEntry>>(null);
  const bankTransfersRef = useRef<FormikProps<IBankTransfersEntry>>(null);
  const personalAssetsRef = useRef<FormikProps<IPersonalAssetEntries>>(null);
  const personalDebtsRef = useRef<FormikProps<IPersonalDebtEntries>>(null);
  const personalReferencesRef =
    useRef<FormikProps<IPersonalReferenceEntries>>(null);
  const financialOperationsRef =
    useRef<FormikProps<IFinancialOperationsEntry>>(null);

  const formReferences: IFormsUpdateDataRefs = {
    personalInformation: personalInfoRef,
    bankTransfers: bankTransfersRef,
    personalAssets: personalAssetsRef,
    personalDebts: personalDebtsRef,
    personalReferences: personalReferencesRef,
    financialOperations: financialOperationsRef,
  };

  const handleStepChange = (stepId: number) => {
    const stepKey = Object.entries(updateDataSteps).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      const values =
        formReferences[stepKey as keyof IFormsUpdateDataRefs]?.current?.values;

      setUpdateData((prevInvitationData) => ({
        ...prevInvitationData,
        [stepKey]: values,
      }));
    }

    setCurrentStep(stepId);
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
    <UpdateDataUI
      currentStep={currentStep}
      handleFinishAssisted={handleFinishAssisted}
      handleStepChange={handleStepChange}
      formReferences={formReferences}
      updateData={updateData}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      steps={steps}
    />
  );
}

export { UpdateData };
