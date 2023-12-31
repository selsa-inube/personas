import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { validationRules } from "src/validations/validationRules";
import * as Yup from "yup";
import { PersonalResidenceFormUI } from "./interface";
import { IPersonalResidenceEntry } from "./types";

const validationSchema = Yup.object({
  bankEntity: validationRules.name,
  dueDate: validationRules.date,
  tenant: validationRules.name,
  tenantCellPhone: validationRules.phone,
  ownerName: validationRules.name,
  ownerCellPhone: validationRules.phone,
});

interface PersonalResidenceFormProps {
  initialValues: IPersonalResidenceEntry;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IPersonalResidenceEntry) => void;
  loading?: boolean;
}

const PersonalResidenceForm = forwardRef(function BankTransfersForm(
  props: PersonalResidenceFormProps,
  ref: React.Ref<FormikProps<IPersonalResidenceEntry>>
) {
  const { initialValues, onFormValid, onSubmit, loading } = props;

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: onSubmit || (() => {}),
  });

  useImperativeHandle(ref, () => formik);

  const customHandleBlur = (event: React.FocusEvent<HTMLElement, Element>) => {
    formik.handleBlur(event);

    if (onSubmit) return;

    formik.validateForm().then((errors) => {
      onFormValid(Object.keys(errors).length === 0);
    });
  };

  return (
    <PersonalResidenceFormUI
      loading={loading}
      formik={formik}
      customHandleBlur={customHandleBlur}
    />
  );
});

export { PersonalResidenceForm };
export type { PersonalResidenceFormProps };
