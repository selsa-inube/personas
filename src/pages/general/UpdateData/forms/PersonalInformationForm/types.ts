import { IDomainType } from "@ptypes/domain.types";

interface IPersonalInformationEntry {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  identificationType: IDomainType;
  identification: number;
  expeditionCountry: string;
  expeditionDepartment: string;
  expeditionCity: string;
  expeditionDate: string;
  city: string;
  birthDate: string;
  country: string;
  gender: string;
  maritalStatus: string;
  bloodType: string;
}

export type { IPersonalInformationEntry };
