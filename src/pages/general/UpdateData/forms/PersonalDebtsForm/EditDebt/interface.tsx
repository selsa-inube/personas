import { DebtModal } from "@components/modals/general/updateData/DebtModal";
import { Icon } from "@inubekit/inubekit";
import { FormikProps } from "formik";
import { MdOutlineModeEdit } from "react-icons/md";
import { IPersonalDebtEntries } from "../types";

interface EditDebtUIProps {
  showModal: boolean;
  formik: FormikProps<IPersonalDebtEntries>;
  handleEditModal: () => void;
  handleEditDebt: () => void;
  closeModal: () => void;
}

function EditDebtUI(props: EditDebtUIProps) {
  const { showModal, formik, handleEditModal, handleEditDebt, closeModal } =
    props;

  return (
    <>
      <Icon
        appearance="dark"
        icon={<MdOutlineModeEdit />}
        cursorHover={true}
        size="16px"
        spacing="narrow"
        onClick={handleEditModal}
      />

      {showModal && (
        <DebtModal
          title="Editar deuda"
          description="Edita la información de tus deudas."
          confirmButtonText="Guardar"
          portalId="modals"
          formik={formik}
          onCloseModal={closeModal}
          onConfirm={handleEditDebt}
          withCustomDirty
        />
      )}
    </>
  );
}

export { EditDebtUI };
