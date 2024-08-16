import { TagProps } from "@design/data/Tag";
import { IValidation } from "./service";
interface IRequest {
  id: string;
  title: string;
  product: string;
  destination: string;
  trackingCode: string;
  requestDate: Date;
  description: string;
  status: string;
  value: number;
  quotaValue: number;
  periodicity: string;
  deadline: string;
  interestRate: number;
  netValue: number;
  tag: TagProps;
  validations: IValidation[];
  documentaryRequirements: IValidation[];
}

export type { IRequest };
