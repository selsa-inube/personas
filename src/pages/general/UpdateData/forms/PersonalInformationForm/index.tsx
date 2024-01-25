import { FormikProps, useFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { validationMessages } from "src/validations/validationMessages";
import { validationRules } from "src/validations/validationRules";
import * as Yup from "yup";
import { PersonalInformationFormUI } from "./interface";
import { IPersonalInformationEntry } from "./types";

const validationSchema = Yup.object({
  expeditionDate: validationRules.date.required(validationMessages.required),
  birthDate: validationRules.date.required(validationMessages.required),
});

interface PersonalInformationFormProps {
  initialValues: IPersonalInformationEntry;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IPersonalInformationEntry) => void;
  loading?: boolean;
}

const PersonalInformationForm = forwardRef(function PersonalInformationForm(
  props: PersonalInformationFormProps,
  ref: React.Ref<FormikProps<IPersonalInformationEntry>>,
) {
  const { initialValues, onFormValid, onSubmit, loading } = props;

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit || (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    formik.validateForm().then((errors) => {
      onFormValid(Object.keys(errors).length === 0);
    });
  }, [formik.values]);

  return <PersonalInformationFormUI loading={loading} formik={formik} />;
});

export { PersonalInformationForm };
export type { PersonalInformationFormProps };
