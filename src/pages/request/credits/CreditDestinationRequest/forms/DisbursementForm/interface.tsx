import { Select } from "@design/input/Select";
import { Grid } from "@design/layout/Grid";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { IFormField } from "@ptypes/forms.types";
import { FormikValues } from "formik";
import { generateFormFields, getFieldState } from "src/utils/forms/forms";

interface DisbursementFormUIProps {
  formik: FormikValues;
  loading?: boolean;
  customHandleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  renderFields: IFormField[];
}

function DisbursementFormUI(props: DisbursementFormUIProps) {
  const { formik, loading, customHandleChange, renderFields } = props;

  const isTablet = useMediaQuery("(max-width: 900px)");

  const disbursementTypeDM = getDomainById("disbursementType");

  return (
    <form>
      <Stack direction="column" gap="s300">
        <Select
          name="disbursementType"
          id="disbursementType"
          label="Forma de desembolso"
          value={formik.values.disbursementType}
          size="compact"
          isDisabled={loading}
          options={disbursementTypeDM}
          onChange={customHandleChange}
          onBlur={formik.handleBlur}
          state={getFieldState(formik, "disbursementType")}
          errorMessage={formik.errors.disbursementType}
          isFullWidth
        />
        <Grid templateColumns="repeat(2, 1fr)" gap="s300">
          {generateFormFields(
            renderFields,
            formik,
            formik.handleBlur,
            customHandleChange,
            isTablet,
            loading,
          )}
        </Grid>
      </Stack>
    </form>
  );
}

export { DisbursementFormUI };
