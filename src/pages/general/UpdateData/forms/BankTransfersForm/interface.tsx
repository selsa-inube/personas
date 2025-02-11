import { Select } from "@design/input/Select";
import { TextField } from "@design/input/TextField";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { MdOutlineModeEdit } from "react-icons/md";
import { getFieldState } from "src/utils/forms/forms";
import { IBankTransfersEntry } from "./types";
import { FormikProps } from "formik";

interface BankTransfersFormUIProps {
  formik: FormikProps<IBankTransfersEntry>;
  loading?: boolean;
  withSubmit?: boolean;
}

function BankTransfersFormUI(props: BankTransfersFormUIProps) {
  const { formik, loading, withSubmit } = props;

  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTablet = useMediaQuery("(max-width: 1100px)");

  return (
    <form>
      <Stack direction="column" alignItems="flex-end" gap={inube.spacing.s300}>
        <Grid
          templateColumns={`repeat(${isTablet ? 1 : 3}, 1fr)`}
          autoRows="auto"
          gap={isMobile ? inube.spacing.s150 : inube.spacing.s300}
          width="100%"
        >
          <Select
            label="Entidad bancaria"
            name="bankEntity"
            id="bankEntity"
            value={formik.values.bankEntityName}
            size="compact"
            isFullWidth
            options={getDomainById("bank")}
            onBlur={formik.handleBlur}
            isDisabled={loading}
            state={getFieldState(formik, "bankEntity")}
            onChange={formik.handleChange}
          />
          <Select
            label="Tipo de cuenta"
            name="accountType"
            id="accountType"
            value={formik.values.accountType}
            size="compact"
            isFullWidth
            options={getDomainById("accountType")}
            onBlur={formik.handleBlur}
            isDisabled={loading}
            state={getFieldState(formik, "accountType")}
            onChange={formik.handleChange}
          />

          <TextField
            label="Numero de cuenta"
            placeholder="Numero de cuenta"
            name="accountNumber"
            id="accountNumber"
            type="number"
            value={formik.values.accountNumber}
            iconAfter={<MdOutlineModeEdit size={18} />}
            errorMessage={formik.errors.accountNumber}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "accountNumber")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </Grid>

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
              disabled={loading || !formik.dirty || !formik.isValid}
            >
              Guardar
            </Button>
          </Stack>
        )}
      </Stack>
    </form>
  );
}

export { BankTransfersFormUI };
