import { AssetModal } from "@components/modals/general/updateData/AssetModal";
import { Table } from "@design/data/Table";
import { IAction } from "@design/data/Table/types";
import { inube } from "@design/tokens";
import { Button, Stack } from "@inubekit/inubekit";
import { FormikProps } from "formik";
import { MdOutlineAddHome } from "react-icons/md";
import { mapPersonalAssets } from "../../config/mappers";
import {
  personalAssetsTableBreakpoints,
  personalAssetsTableTitles,
} from "./config/table";
import { IPersonalAssetEntries } from "./types";

interface PersonalAssetsFormUIProps {
  formik: FormikProps<IPersonalAssetEntries>;
  showAddAssetModal: boolean;
  personalAssetsTableActions: IAction[];
  loading?: boolean;
  withSubmit?: boolean;
  onToggleModal: () => void;
  onAddAsset: () => void;
}

function PersonalAssetsFormUI(props: PersonalAssetsFormUIProps) {
  const {
    formik,
    showAddAssetModal,
    personalAssetsTableActions,
    loading,
    withSubmit,
    onToggleModal,
    onAddAsset,
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
          iconBefore={<MdOutlineAddHome />}
          variant="none"
          onClick={onToggleModal}
        >
          Adicionar bien
        </Button>
        <Table
          portalId="modals"
          titles={personalAssetsTableTitles}
          breakpoints={personalAssetsTableBreakpoints}
          actions={personalAssetsTableActions}
          entries={mapPersonalAssets(formik.values.entries)}
          pageLength={formik.values.entries.length}
          hideMobileResume
          colsSameWidth
        />
        {withSubmit && (
          <Stack gap={inube.spacing.s150} justifyContent="flex-end">
            <Button
              onClick={() => formik.handleReset()}
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
        {showAddAssetModal && (
          <AssetModal
            title="Adicionar bien"
            description="Agrega un bien a la actualización."
            confirmButtonText="Adicionar"
            portalId="modals"
            formik={formik}
            onCloseModal={onToggleModal}
            onConfirm={onAddAsset}
          />
        )}
      </Stack>
    </>
  );
}

export { PersonalAssetsFormUI };
