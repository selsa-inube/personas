import { IMessage } from "@ptypes/messages.types";
import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle, useState } from "react";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { initialMessageState } from "src/utils/messages";
import { DocumentaryRequirementsFormUI } from "./interface";
import { IDocumentaryRequirementsEntry } from "./types";

const MAX_SIZE_PER_FILE = 2.5;

interface DocumentaryRequirementsFormProps {
  initialValues: IDocumentaryRequirementsEntry;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentaryRequirementsForm = forwardRef(
  function DocumentaryRequirementsForm(
    props: DocumentaryRequirementsFormProps,
    ref: React.Ref<FormikProps<IDocumentaryRequirementsEntry>>,
  ) {
    const { initialValues } = props;

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [message, setMessage] = useState<IMessage>(initialMessageState);
    const [attachModal, setAttachModal] = useState({
      show: false,
      id: "",
    });

    const formik = useFormik({
      initialValues,
      validateOnBlur: false,
      onSubmit: async () => true,
    });

    useImperativeHandle(ref, () => formik);

    const handleSelectDocument = (file: File, id: string) => {
      if (file.size > MAX_SIZE_PER_FILE * 1024 * 1024) {
        setMessage({
          show: true,
          title: "Peso máximo excedido",
          description: `No se ha podido cargar el documento porque excede el límite de ${MAX_SIZE_PER_FILE}MB por archivo.`,
          icon: <MdOutlineSentimentNeutral />,
          appearance: "danger",
        });

        return;
      }
      formik.setFieldValue("selectedDocuments", [
        ...formik.values.selectedDocuments,
        {
          file,
          id,
        },
      ]);

      setAttachModal({
        show: false,
        id: "",
      });
    };

    const handleRemoveDocument = (id: string) => {
      formik.setFieldValue(
        "selectedDocuments",
        formik.values.selectedDocuments.filter(
          (document) => document.id !== id,
        ),
      );
    };

    const handleToggleInfoModal = () => {
      setShowInfoModal(!showInfoModal);
    };

    const handleOpenAttachModal = (id: string) => {
      setAttachModal({
        show: true,
        id,
      });
    };

    const handleCloseAttachModal = () => {
      setAttachModal({
        show: false,
        id: "",
      });
    };

    const handleCloseMessage = () => {
      setMessage(initialMessageState);
    };

    return (
      <DocumentaryRequirementsFormUI
        formik={formik}
        showInfoModal={showInfoModal}
        maxFileSize={MAX_SIZE_PER_FILE}
        message={message}
        attachModal={attachModal}
        onSelectDocument={handleSelectDocument}
        onRemoveDocument={handleRemoveDocument}
        onToggleInfoModal={handleToggleInfoModal}
        onCloseMessage={handleCloseMessage}
        onOpenAttachModal={handleOpenAttachModal}
        onCloseAttachModal={handleCloseAttachModal}
      />
    );
  },
);

export { DocumentaryRequirementsForm };
export type { DocumentaryRequirementsFormProps };
