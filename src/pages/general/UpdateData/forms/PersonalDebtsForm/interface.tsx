import { DebtModal } from "@components/modals/forms/update-data/DebtModal";
import { Table } from "@design/data/Table";
import { IAction } from "@design/data/Table/types";
import { SectionMessage } from "@design/feedback/SectionMessage";
import { Button } from "@design/input/Button";
import { Stack } from "@design/layout/Stack";
import { IMessage } from "@ptypes/messages.types";
import { FormikValues } from "formik";
import { MdOutlineAccountBalance } from "react-icons/md";
import { mapPersonalDebts } from "../../config/mappers";
import {
  personalDebtsTableBreakpoints,
  personalDebtsTableTitles,
} from "./config/table";

interface PersonalDebtsFormUIProps {
  formik: FormikValues;
  showAddDebtModal: boolean;
  personalDebtsTableActions: IAction[];
  message: IMessage;
  onAddDebt: () => void;
  onToggleModal: () => void;
  onCloseMessage: () => void;
}

function PersonalDebtsFormUI(props: PersonalDebtsFormUIProps) {
  const {
    formik,
    showAddDebtModal,
    personalDebtsTableActions,
    message,
    onCloseMessage,
    onToggleModal,
    onAddDebt,
  } = props;

  return (
    <>
      <Stack direction="column" gap="s300" alignItems="flex-end" width="100%">
        <Button
          iconBefore={<MdOutlineAccountBalance />}
          variant="none"
          onClick={onToggleModal}
        >
          Adicionar deuda
        </Button>
        <Table
          id="modals"
          titles={personalDebtsTableTitles}
          breakpoints={personalDebtsTableBreakpoints}
          actions={personalDebtsTableActions}
          entries={mapPersonalDebts(formik.values.entries)}
          pageLength={formik.values.entries.length}
          hideMobileResume
        />
        {showAddDebtModal && (
          <DebtModal
            title="Adicionar deuda"
            description="Agrega una deuda a la actualización"
            confirmButtonText="Adicionar"
            portalId="modals"
            formik={formik}
            onCloseModal={onToggleModal}
            onConfirm={onAddDebt}
          />
        )}
      </Stack>
      {message.show && (
        <SectionMessage
          title={message.title}
          description={message.description}
          icon={message.icon}
          appearance={message.appearance}
          duration={3000}
          onClose={onCloseMessage}
        />
      )}
    </>
  );
}

export { PersonalDebtsFormUI };
