import { IDomainType } from "@ptypes/domain.types";

type ValidationValueType = "fail" | "success" | "pending";

interface IValidation {
  id: string;
  label: string;
  failDetails?: string;
  value?: ValidationValueType;
  required?: boolean;
  pending?: boolean;
  documentType?: string;
  profile?: string;
  evaluationDescription?: string;
  responseCode?: string;
}

interface ISelectedDocument {
  file: File;
  requirementId: string;
  id: string;
  sequence?: number;
  documentType?: string;
}

interface IAid {
  id: string;
  title: string;
  type?: IDomainType;
}

export type { IAid, ISelectedDocument, IValidation, ValidationValueType };
