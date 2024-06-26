import { FormikProps, useFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { DocumentaryRequirementsFormUI } from "./interface";
import { IDocumentaryRequirementsEntry } from "./types";

interface DocumentaryRequirementsFormProps {
  initialValues: IDocumentaryRequirementsEntry;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentaryRequirementsForm = forwardRef(
  function DocumentaryRequirementsForm(
    props: DocumentaryRequirementsFormProps,
    ref: React.Ref<FormikProps<IDocumentaryRequirementsEntry>>,
  ) {
    const { initialValues, onFormValid } = props;

    const [showInfoModal, setShowInfoModal] = useState(false);

    const formik = useFormik({
      initialValues,
      validateOnBlur: false,
      onSubmit: async () => true,
    });

    useImperativeHandle(ref, () => formik);

    useEffect(() => {
      if (onFormValid) {
        onFormValid(formik.values.selectedDocuments.length > 0);
      }
    }, [formik.values.selectedDocuments]);

    const handleSelectDocuments = (files: FileList) => {
      formik.setFieldValue("selectedDocuments", [
        ...formik.values.selectedDocuments,
        ...Array.from(files),
      ]);
    };

    const handleRemoveDocument = (id: string) => {
      formik.setFieldValue(
        "selectedDocuments",
        formik.values.selectedDocuments.filter(
          (document) => document.name !== id,
        ),
      );
    };

    const handleToggleInfoModal = () => {
      setShowInfoModal(!showInfoModal);
    }

    return (
      <DocumentaryRequirementsFormUI
        formik={formik}
        showInfoModal={showInfoModal}
        onSelectDocuments={handleSelectDocuments}
        onRemoveDocument={handleRemoveDocument}
        onToggleInfoModal={handleToggleInfoModal}
      />
    );
  },
);

export { DocumentaryRequirementsForm };
export type { DocumentaryRequirementsFormProps };
