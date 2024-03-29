import { FormikProps } from "formik";
import { ICommentsEntry } from "src/shared/forms/CommentsForm/types";
import { IBankTransfersEntry } from "./forms/BankTransfersForm/types";
import { IBeneficiariesEntry } from "./forms/BeneficiariesForm/types";
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

interface IFormsUpdateData {
  personalInformation: { isValid: boolean; values: IPersonalInformationEntry };
  contactData: { isValid: boolean; values: IContactDataEntry };
  familyGroup: { isValid: boolean; values: IFamilyGroupEntries };
  beneficiaries: { isValid: boolean; values: IBeneficiariesEntry };
  bankTransfers: { isValid: boolean; values: IBankTransfersEntry };
  personalAssets: { isValid: boolean; values: IPersonalAssetEntries };
  personalDebts: { isValid: boolean; values: IPersonalDebtEntries };
  personalReferences: { isValid: boolean; values: IPersonalReferenceEntries };
  financialOperations: { isValid: boolean; values: IFinancialOperationsEntry };
  personalResidence: { isValid: boolean; values: IPersonalResidenceEntry };
  socioeconomicInformation: {
    isValid: boolean;
    values: ISocioeconomicInformationEntry;
  };
  economicActivity: { isValid: boolean; values: IEconomicActivityEntry };
  income: { isValid: boolean; values: IIncomesEntry };
  expenses: { isValid: boolean; values: IExpensesEntry };
  relationshipWithDirectors: {
    isValid: boolean;
    values: IRelationshipWithDirectorsEntry;
  };
  comments: { isValid: boolean; values: ICommentsEntry };
}

interface IFormsUpdateDataRefs {
  personalInformation: React.RefObject<FormikProps<IPersonalInformationEntry>>;
  contactData: React.RefObject<FormikProps<IContactDataEntry>>;
  familyGroup: React.RefObject<FormikProps<IFamilyGroupEntries>>;
  beneficiaries: React.RefObject<FormikProps<IBeneficiariesEntry>>;
  bankTransfers: React.RefObject<FormikProps<IBankTransfersEntry>>;
  personalAssets: React.RefObject<FormikProps<IPersonalAssetEntries>>;
  personalDebts: React.RefObject<FormikProps<IPersonalDebtEntries>>;
  personalReferences: React.RefObject<FormikProps<IPersonalReferenceEntries>>;
  financialOperations: React.RefObject<FormikProps<IFinancialOperationsEntry>>;
  personalResidence: React.RefObject<FormikProps<IPersonalResidenceEntry>>;
  socioeconomicInformation: React.RefObject<
    FormikProps<ISocioeconomicInformationEntry>
  >;
  economicActivity: React.RefObject<FormikProps<IEconomicActivityEntry>>;
  income: React.RefObject<FormikProps<IIncomesEntry>>;
  expenses: React.RefObject<FormikProps<IExpensesEntry>>;
  relationshipWithDirectors: React.RefObject<
    FormikProps<IRelationshipWithDirectorsEntry>
  >;
  comments: React.RefObject<FormikProps<ICommentsEntry>>;
}

export type { IFormsUpdateData, IFormsUpdateDataRefs };
