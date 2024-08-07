import { DebtModal } from "@components/modals/general/updateData/DebtModal";
import { Table } from "@design/data/Table";
import { IAction } from "@design/data/Table/types";
import { SectionMessage } from "@design/feedback/SectionMessage";
import { Button } from "@design/input/Button";
import { IMessage } from "@ptypes/messages.types";
import { FormikValues } from "formik";
import { MdOutlineAccountBalance } from "react-icons/md";
import { mapPersonalDebts } from "../../config/mappers";
import {
  personalDebtsTableBreakpoints,
  personalDebtsTableTitles,
} from "./config/table";
import { Stack } from "@inubekit/stack";
import { inube } from "@design/tokens";

interface PersonalDebtsFormUIProps {
  formik: FormikValues;
  showAddDebtModal: boolean;
  personalDebtsTableActions: IAction[];
  loading?: boolean;
  withSubmit?: boolean;
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
    loading,
    withSubmit,
    message,
    onCloseMessage,
    onToggleModal,
    onAddDebt,
  } = props;

  return (
    <>
      <Stack
        direction="column"
        gap={inube.spacing.s300}
        alignItems="flex-end"
        width="100%"
      >
        <Button
          iconBefore={<MdOutlineAccountBalance />}
          variant="none"
          onClick={onToggleModal}
        >
          Adicionar deuda
        </Button>
        <Table
          portalId="modals"
          titles={personalDebtsTableTitles}
          breakpoints={personalDebtsTableBreakpoints}
          actions={personalDebtsTableActions}
          entries={mapPersonalDebts(formik.values.entries)}
          pageLength={formik.values.entries.length}
          hideMobileResume
        />
        {withSubmit && (
          <Stack gap={inube.spacing.s150} justifyContent="flex-end">
            <Button
              onClick={formik.handleReset}
              type="button"
              disabled={loading || !formik.dirty}
              spacing="compact"
              variant="outlined"
              appearance="gray"
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              spacing="compact"
              disabled={
                loading ||
                !formik.dirty ||
                !formik.isValid ||
                formik.values.entries.length ===
                  formik.initialValues.entries.length
              }
            >
              Guardar
            </Button>
          </Stack>
        )}
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
