import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { TextField } from "@design/input/TextField";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Stack } from "@inubekit/stack";
import { Grid } from "@inubekit/grid";
import { inube } from "@design/tokens";
import { FormikValues } from "formik";
import { MdOutlineAttachMoney } from "react-icons/md";
import { currencyFormat, validateCurrencyField } from "src/utils/currency";
import { getFieldState } from "src/utils/forms/forms";

interface ExpensesFormUIProps {
  formik: FormikValues;
  loading?: boolean;
  withSubmit?: boolean;
  customHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ExpensesFormUI(props: ExpensesFormUIProps) {
  const { formik, loading, withSubmit, customHandleChange } = props;

  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTablet = useMediaQuery("(max-width: 1100px)");

  return (
    <form>
      <Stack direction="column" gap={inube.spacing.s300}>
        <Grid
          templateColumns={`repeat(${isMobile ? 1 : isTablet ? 2 : 3}, 1fr)`}
          autoRows="auto"
          gap={
            isMobile
              ? inube.spacing.s150
              : isTablet
                ? inube.spacing.s200
                : inube.spacing.s300
          }
        >
          <TextField
            label="Gastos personales"
            placeholder="Digita el valor de los gastos personales"
            name="personalExpenses"
            id="personalExpenses"
            value={validateCurrencyField("personalExpenses", formik)}
            iconAfter={<MdOutlineAttachMoney size={18} />}
            errorMessage={formik.errors.personalExpenses}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "personalExpenses")}
            onBlur={formik.handleBlur}
            onChange={customHandleChange}
            validMessage="El valor de los gastos personales es válido"
          />
          <TextField
            label="Gastos familiares"
            placeholder="Digita el valor de los gastos familiares"
            name="familyExpenses"
            id="familyExpenses"
            value={validateCurrencyField("familyExpenses", formik)}
            iconAfter={<MdOutlineAttachMoney size={18} />}
            errorMessage={formik.errors.familyExpenses}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "familyExpenses")}
            onBlur={formik.handleBlur}
            onChange={customHandleChange}
            validMessage="El valor de los gastos familiares es válido"
          />
          <TextField
            label="Créditos"
            placeholder="Digita el valor de los créditos"
            name="credits"
            id="credits"
            value={validateCurrencyField("credits", formik)}
            iconAfter={<MdOutlineAttachMoney size={18} />}
            errorMessage={formik.errors.credits}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "credits")}
            onBlur={formik.handleBlur}
            onChange={customHandleChange}
            validMessage="El valor de los créditos es válido"
          />
          <TextField
            label="Tarjetas de crédito"
            placeholder="Digita el valor de las tarjetas de crédito"
            name="creditCards"
            id="creditCards"
            value={validateCurrencyField("creditCards", formik)}
            iconAfter={<MdOutlineAttachMoney size={18} />}
            errorMessage={formik.errors.creditCards}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "creditCards")}
            onBlur={formik.handleBlur}
            onChange={customHandleChange}
            validMessage="El valor de las tarjetas de crédito es válido"
          />
          <TextField
            label="Otros gastos"
            placeholder="Digita el valor de otros gastos"
            name="others"
            id="others"
            value={validateCurrencyField("others", formik)}
            iconAfter={<MdOutlineAttachMoney size={18} />}
            errorMessage={formik.errors.others}
            isDisabled={loading}
            size="compact"
            isFullWidth
            state={getFieldState(formik, "others")}
            onBlur={formik.handleBlur}
            onChange={customHandleChange}
            validMessage="El valor de otros gastos es válido"
          />
        </Grid>
        <Stack
          justifyContent="flex-end"
          alignItems="center"
          gap={inube.spacing.s150}
        >
          <Text type="body" size="medium">
            Total gastos reportados:
          </Text>
          <Text type="title" size="medium">
            {currencyFormat(formik.values.totalExpenses || 0)}
          </Text>
        </Stack>
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

export { ExpensesFormUI };
