import { FormikProps, useFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { validationMessages } from "src/validations/validationMessages";
import { validationRules } from "src/validations/validationRules";
import * as Yup from "yup";
import { RelationshipWithDirectorsRequiredFields } from "./config/formConfig";
import { RelationshipWithDirectorsFormUI } from "./interface";
import { IRelationshipWithDirectorsEntry } from "./types";
import { IDirector } from "src/model/entity/user";

const validationSchema = Yup.object().shape({
  hasRelationshipWithDirectors:
    RelationshipWithDirectorsRequiredFields.hasRelationshipWithDirectors
      ? Yup.string().required(validationMessages.required)
      : Yup.string(),
  directorName: RelationshipWithDirectorsRequiredFields.directorName
    ? validationRules.name.required(validationMessages.required)
    : validationRules.name,
  directorRelationship:
    RelationshipWithDirectorsRequiredFields.directorRelationship
      ? Yup.string().required(validationMessages.required)
      : Yup.string(),
});

interface RelationshipWithDirectorsFormProps {
  initialValues: IRelationshipWithDirectorsEntry;
  loading?: boolean;
  withSubmit?: boolean;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IRelationshipWithDirectorsEntry) => void;
}

const RelationshipWithDirectorsForm = forwardRef(
  function RelationshipWithDirectorsForm(
    props: RelationshipWithDirectorsFormProps,
    ref: React.Ref<FormikProps<IRelationshipWithDirectorsEntry>>,
  ) {
    const { initialValues, loading, withSubmit, onFormValid, onSubmit } = props;

    const [dynamicSchema] = useState(validationSchema);
    const [showDirectorsModal, setShowDirectorsModal] = useState(false);

    const formik = useFormik({
      initialValues,
      validationSchema: dynamicSchema,
      validateOnBlur: false,
      onSubmit: onSubmit || (() => true),
    });

    useImperativeHandle(ref, () => formik);

    useEffect(() => {
      if (formik.dirty && onFormValid) {
        formik.validateForm().then((errors) => {
          onFormValid(Object.keys(errors).length === 0);
        });
      }
    }, [formik.values]);

    const handleToggleModal = () => {
      setShowDirectorsModal(!showDirectorsModal);
    };

    const handleModalSelect = (field: string, selectedItem: IDirector) => {
      formik.setFieldValue(field, selectedItem.name);
      handleToggleModal();
    };

    const isRequired = (fieldName: string): boolean => {
      const fieldDescription = dynamicSchema.describe().fields[fieldName];
      if (!("nullable" in fieldDescription)) return false;
      return !fieldDescription.nullable && !fieldDescription.optional;
    };

    return (
      <RelationshipWithDirectorsFormUI
        loading={loading}
        formik={formik}
        withSubmit={withSubmit}
        showDirectorsModal={showDirectorsModal}
        isRequired={isRequired}
        handleToggleModal={handleToggleModal}
        handleModalSelect={handleModalSelect}
      />
    );
  },
);

export { RelationshipWithDirectorsForm };
export type { RelationshipWithDirectorsFormProps };
