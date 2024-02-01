import { savingsMock } from "@mocks/products/savings/savings.mocks";
import { usersMock } from "@mocks/users/users.mocks";
import { savingAccountCode } from "@pages/admin/savings/MySavings/config/products";
import { FormikProps, useFormik } from "formik";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import * as Yup from "yup";
import { RefundFormUI } from "./interface";
import { IRefundEntry } from "./types";

const validationSchema = Yup.object({
  refundMethod: Yup.string(),
  account: Yup.string(),
});

interface RefundFormProps {
  initialValues: IRefundEntry;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IRefundEntry) => void;
  loading?: boolean;
}

const RefundForm = forwardRef(function RefundForm(
  props: RefundFormProps,
  ref: React.Ref<FormikProps<IRefundEntry>>,
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

  const customHandleRefundMethod = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    formik.handleChange(event);
    if (event.target.value === "creditToInternalAccount") {
      const internalAccounts = savingsMock.filter(
        (saving) => saving.type === savingAccountCode,
      );
      formik.setFieldValue("account", internalAccounts[0].id);
      formik.setFieldValue(
        "accountDescription",
        internalAccounts[0].description,
      );
    } else if (event.target.value === "transferToExternalAccount") {
      formik.setFieldValue(
        "account",
        String(usersMock[0].bankTransfersAccount.accountNumber),
      );
      formik.setFieldValue(
        "accountDescription",
        usersMock[0].bankTransfersAccount.description,
      );
    }
  };

  const customHandleAccount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(event);
    const internalAccounts = savingsMock.filter(
      (saving) => saving.id === event.target.value,
    );
    formik.setFieldValue("accountDescription", internalAccounts[0].description);
  };

  const savingOptions = savingsMock
    .filter((saving) => saving.type === savingAccountCode)
    .map((saving) => ({ id: saving.id, value: saving.description }));

  const accountOptions =
    formik.values.refundMethod === "creditToInternalAccount"
      ? savingOptions
      : usersMock
          .filter((user) => user.bankTransfersAccount)
          .map((user) => ({
            id: String(user.bankTransfersAccount.accountNumber),
            value: user.bankTransfersAccount.description,
          }));

  useEffect(() => {
    if (
      savingOptions.length < 1 &&
      formik.values.refundMethod !== "transferToExternalAccount"
    ) {
      formik.setFieldValue("refundMethod", "transferToExternalAccount");
      formik.setFieldValue(
        "account",
        String(usersMock[0].bankTransfersAccount.accountNumber),
      );
      formik.setFieldValue(
        "accountDescription",
        usersMock[0].bankTransfersAccount.description,
      );
    }
  }, []);

  return (
    <RefundFormUI
      loading={loading}
      formik={formik}
      accountOptions={accountOptions}
      savingOptions={savingOptions}
      onFormValid={onFormValid}
      customHandleRefundMethod={customHandleRefundMethod}
      customHandleAccount={customHandleAccount}
    />
  );
});

export { RefundForm };
export type { RefundFormProps };
