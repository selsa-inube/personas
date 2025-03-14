import { FormikProps, useFormik } from "formik";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { periodicityDM } from "src/model/domains/general/periodicityDM";
import { interestPaymentDM } from "src/model/domains/savings/interestPaymentDM";
import { validationMessages } from "src/validations/validationMessages";
import * as Yup from "yup";
import { InterestPaymentFormUI } from "./interface";
import { IInterestPaymentEntry } from "./types";

const validationSchema = Yup.object({
  interestPayment: Yup.string().required(validationMessages.required),
  interestPaymentName: Yup.string().required(validationMessages.required),
});

interface InterestPaymentFormProps {
  initialValues: IInterestPaymentEntry;
  loading?: boolean;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IInterestPaymentEntry) => void;
}

const InterestPaymentForm = forwardRef(function InterestPaymentForm(
  props: InterestPaymentFormProps,
  ref: React.Ref<FormikProps<IInterestPaymentEntry>>,
) {
  const { initialValues, loading, onFormValid, onSubmit } = props;

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

  const setInterestPayments = async () => {
    const interestPayments = interestPaymentDM.options;

    formik.setFieldValue("interestPayments", interestPayments);

    formik.setFieldValue("interestPayment", interestPayments[0].id);
    formik.setFieldValue("interestPaymentName", interestPayments[0].label);
  };

  useEffect(() => {
    setInterestPayments();
  }, []);

  const customHandleChange = (name: string, value: string) => {
    formik.setFieldValue("interestPayment", value);

    formik.setFieldValue(
      "interestPaymentName",
      periodicityDM.valueOf(value)?.value,
    );
  };

  return (
    <InterestPaymentFormUI
      loading={loading}
      formik={formik}
      customHandleChange={customHandleChange}
    />
  );
});

export { InterestPaymentForm };
export type { InterestPaymentFormProps };
