import { DateField } from "@design/input/DateField";
import { Select } from "@design/input/Select";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { FormikProps } from "formik";
import { activeDM } from "src/model/domains/general/activedm";
import { genderDM } from "src/model/domains/general/updateData/personalInformation/genderdm";
import { relationshipDM } from "src/model/domains/general/updateData/personalResidence/relationshipDM";
import { educationLevelTypeDM } from "src/model/domains/general/updateData/socioeconomicInformation/educationLeveldm";
import { getFieldState, isRequired } from "src/utils/forms/forms";
import * as Yup from "yup";
import { IInformationDataEntry } from "./types";

interface InformationDataFormUIProps {
  formik: FormikProps<IInformationDataEntry>;
  loading?: boolean;
  readonly?: boolean;
  validationSchema: Yup.ObjectSchema<Yup.AnyObject>;
}

function InformationDataFormUI(props: InformationDataFormUIProps) {
  const { formik, readonly, validationSchema } = props;

  return (
    <>
      {!readonly && (
        <>
          <Select
            label="Parentesco"
            placeholder="Parentesco"
            name="relationship"
            id="relationship"
            size="compact"
            options={relationshipDM.options}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.relationship}
            onChange={formik.handleChange}
            value={formik.values.relationship || ""}
            state={getFieldState(formik, "relationship")}
            isRequired={isRequired(validationSchema, "relationship")}
            isFullWidth
          />
          <Select
            label="Depende económicamente"
            placeholder="Depende económicamente"
            name="isDependent"
            id="isDependent"
            size="compact"
            options={activeDM.options}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.isDependent}
            onChange={formik.handleChange}
            value={formik.values.isDependent || ""}
            state={getFieldState(formik, "isDependent")}
            isRequired={isRequired(validationSchema, "isDependent")}
            isFullWidth
          />
        </>
      )}
      <Select
        label="Nivel de escolaridad"
        placeholder="Nivel de escolaridad"
        name="educationLevel"
        id="educationLevel"
        size="compact"
        options={educationLevelTypeDM.options}
        onBlur={formik.handleBlur}
        errorMessage={formik.errors.educationLevel}
        onChange={formik.handleChange}
        value={formik.values.educationLevel || ""}
        state={getFieldState(formik, "educationLevel")}
        isRequired={isRequired(validationSchema, "educationLevel")}
        readOnly={readonly}
        isFullWidth
      />
      <Select
        label="Profesión"
        placeholder="Profesión"
        name="profession"
        id="profession"
        size="compact"
        options={getDomainById("profession")}
        onBlur={formik.handleBlur}
        errorMessage={formik.errors.profession}
        onChange={formik.handleChange}
        value={formik.values.profession || ""}
        state={getFieldState(formik, "profession")}
        isRequired={isRequired(validationSchema, "profession")}
        readOnly={readonly}
        isFullWidth
      />
      <Select
        label="Genero"
        placeholder="Genero"
        name="gender"
        id="gender"
        size="compact"
        options={genderDM.options}
        onBlur={formik.handleBlur}
        errorMessage={formik.errors.gender}
        onChange={formik.handleChange}
        value={formik.values.gender || ""}
        state={getFieldState(formik, "gender")}
        isRequired={isRequired(validationSchema, "gender")}
        readOnly={readonly}
        isFullWidth
      />
      <DateField
        label="Fecha de nacimiento"
        name="birthDate"
        id="birthDate"
        value={formik.values.birthDate}
        errorMessage={formik.errors.birthDate}
        state={getFieldState(formik, "birthDate")}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        isRequired={isRequired(validationSchema, "birthDate")}
        readOnly={readonly}
        isFullWidth
      />
      <Select
        label="Actividad económica"
        placeholder="Actividad económica"
        name="businessActivity"
        id="businessActivity"
        size="compact"
        options={getDomainById("economicSector")}
        onBlur={formik.handleBlur}
        errorMessage={formik.errors.businessActivity}
        onChange={formik.handleChange}
        value={formik.values.businessActivity || ""}
        state={getFieldState(formik, "businessActivity")}
        isRequired={isRequired(validationSchema, "businessActivity")}
        readOnly={readonly}
        isFullWidth
      />
    </>
  );
}

export { InformationDataFormUI };
