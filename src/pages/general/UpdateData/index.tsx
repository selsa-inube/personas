import { usersMock } from "@mocks/users/users.mocks";
import { FormikProps } from "formik";
import { useRef, useState } from "react";
import { updateDataSteps } from "./config/assisted";
import {
  mapBankTransfers,
  mapContactData,
  mapEconomicActivity,
  mapExpenses,
  mapFamilyGroups,
  mapFinancialOperations,
  mapIncomes,
  mapPersonalInformation,
  mapPersonalResidence,
  mapRelationshipWithDirectors,
  mapSocioeconomicInformation,
} from "./config/mappers";
import { IBankTransfersEntry } from "./forms/BankTransfersForm/types";
import { IContactDataEntry } from "./forms/ContactDataForm/types";
import { IEconomicActivityEntry } from "./forms/EconomicActivityForm/types";
import { IExpensesEntry } from "./forms/ExpensesForm/types";
import { IFamilyGroupEntries } from "./forms/FamilyGroupForm/types";
import { IFinancialOperationsEntry } from "./forms/FinancialOperationsForm/types";
import { IIncomesEntry } from "./forms/IncomesForm/types";
import { IPersonalAssetEntries } from "./forms/PersonalAssetsForm/types";
import { IPersonalDebtEntries } from "./forms/PersonalDebtsForm/types";
import { IPersonalInformationEntry } from "./forms/PersonalInformationForm/types";
import { IPersonalReferenceEntries } from "./forms/PersonalReferencesForm/types";
import { IPersonalResidenceEntry } from "./forms/PersonalResidenceForm/types";
import { IRelationshipWithDirectorsEntry } from "./forms/RelationshipWithDirectorsForm/types";
import { ISocioeconomicInformationEntry } from "./forms/SocioeconomicInformationForm/types";
import { UpdateDataUI } from "./interface";
import { IFormsUpdateData, IFormsUpdateDataRefs } from "./types";

function UpdateData() {
  const [currentStep, setCurrentStep] = useState(
    updateDataSteps.personalInformation.id,
  );
  const steps = Object.values(updateDataSteps);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(true);

  const [updateData, setUpdateData] = useState<IFormsUpdateData>({
    personalInformation: {
      isValid: true,
      values: mapPersonalInformation(usersMock[0]),
    },
    contactData: {
      isValid: true,
      values: mapContactData(usersMock[0].contact[0]),
    },
    familyGroup: {
      isValid: true,
      values: { entries: mapFamilyGroups(usersMock[0].familyGroup || []) },
    },
    bankTransfers: {
      isValid: true,
      values: mapBankTransfers(usersMock[0].bankTransfersAccount),
    },
    personalAssets: { isValid: true, values: { entries: [] } },
    personalDebts: { isValid: true, values: { entries: [] } },
    personalReferences: { isValid: true, values: { entries: [] } },
    financialOperations: {
      isValid: true,
      values: mapFinancialOperations(usersMock[0].financialOperations),
    },
    personalResidence: {
      isValid: true,
      values: mapPersonalResidence(usersMock[0].personalData.residence),
    },
    socioeconomicInformation: {
      isValid: true,
      values: mapSocioeconomicInformation(),
    },
    economicActivity: {
      isValid: true,
      values: mapEconomicActivity(usersMock[0].economicActivity),
    },
    income: {
      isValid: true,
      values: mapIncomes(),
    },
    expenses: { isValid: true, values: mapExpenses() },
    relationshipWithDirectors: {
      isValid: true,
      values: mapRelationshipWithDirectors(
        usersMock[0].relationshipWithDirectors,
      ),
    },
  });

  const personalInfoRef = useRef<FormikProps<IPersonalInformationEntry>>(null);
  const contactDataRef = useRef<FormikProps<IContactDataEntry>>(null);
  const familyGroupRef = useRef<FormikProps<IFamilyGroupEntries>>(null);
  const bankTransfersRef = useRef<FormikProps<IBankTransfersEntry>>(null);
  const personalAssetsRef = useRef<FormikProps<IPersonalAssetEntries>>(null);
  const personalDebtsRef = useRef<FormikProps<IPersonalDebtEntries>>(null);
  const personalReferencesRef =
    useRef<FormikProps<IPersonalReferenceEntries>>(null);
  const financialOperationsRef =
    useRef<FormikProps<IFinancialOperationsEntry>>(null);
  const personalResidenceRef =
    useRef<FormikProps<IPersonalResidenceEntry>>(null);
  const socioeconomicsRef =
    useRef<FormikProps<ISocioeconomicInformationEntry>>(null);
  const economicActivityRef = useRef<FormikProps<IEconomicActivityEntry>>(null);
  const incomeRef = useRef<FormikProps<IIncomesEntry>>(null);
  const expensesRef = useRef<FormikProps<IExpensesEntry>>(null);
  const relationshipWithDirectorsRef =
    useRef<FormikProps<IRelationshipWithDirectorsEntry>>(null);

  const formReferences: IFormsUpdateDataRefs = {
    personalInformation: personalInfoRef,
    contactData: contactDataRef,
    familyGroup: familyGroupRef,
    bankTransfers: bankTransfersRef,
    personalAssets: personalAssetsRef,
    personalDebts: personalDebtsRef,
    personalReferences: personalReferencesRef,
    financialOperations: financialOperationsRef,
    personalResidence: personalResidenceRef,
    socioeconomicInformation: socioeconomicsRef,
    economicActivity: economicActivityRef,
    income: incomeRef,
    expenses: expensesRef,
    relationshipWithDirectors: relationshipWithDirectorsRef,
  };

  const handleStepChange = (stepId: number) => {
    const stepKey = Object.entries(updateDataSteps).find(
      ([, config]) => config.id === currentStep,
    )?.[0];

    if (stepKey) {
      const values =
        formReferences[stepKey as keyof IFormsUpdateDataRefs]?.current?.values;

      setUpdateData((prevUpdateData) => ({
        ...prevUpdateData,
        [stepKey]: { isValid: isCurrentFormValid, values },
      }));
    }

    const changeStepKey = Object.entries(updateDataSteps).find(
      ([, config]) => config.id === stepId,
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;

    setIsCurrentFormValid(
      changeIsVerification ||
        updateData[changeStepKey as keyof IFormsUpdateData]?.isValid ||
        false,
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleFinishAssisted = () => {
    return true;
  };

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
      isCurrentFormValid={isCurrentFormValid}
      setIsCurrentFormValid={setIsCurrentFormValid}
    />
  );
}

export { UpdateData };
