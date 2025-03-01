import { Textarea } from "@design/input/Textarea";
import { TextField } from "@design/input/TextField";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Grid, Stack } from "@inubekit/inubekit";
import { FormikProps } from "formik";
import { MdAttachMoney, MdOutlineTag } from "react-icons/md";
import {
  handleChangeWithCurrency,
  validateCurrencyField,
} from "src/utils/currency";
import { IDetailsSituationEntry } from "./types";
import { getFieldState } from "src/utils/forms/forms";

interface DetailsSituationFormUIProps {
  formik: FormikProps<IDetailsSituationEntry>;
  withAmount: boolean;
  withDays: boolean;
}

function DetailsSituationFormUI(props: DetailsSituationFormUIProps) {
  const { formik, withAmount, withDays } = props;

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <form>
      <Stack direction="column" gap={inube.spacing.s300}>
        {withAmount && (
          <Grid
            templateColumns={`repeat(${isMobile ? 1 : 2}, 1fr)`}
            autoRows="auto"
            gap={inube.spacing.s300}
          >
            <TextField
              label="Cupo disponible"
              name="quotaAvailable"
              id="quotaAvailable"
              placeholder="Ingresa el valor del auxilio"
              value={validateCurrencyField("quotaAvailable", formik) || ""}
              type="text"
              size="compact"
              fullwidth
              readonly
              iconAfter={<MdAttachMoney size={18} />}
            />

            <TextField
              label="Valor de la solicitud"
              name="applicationValue"
              id="applicationValue"
              placeholder="Ingresa el valor del auxilio"
              value={validateCurrencyField("applicationValue", formik, false)}
              type="text"
              message={formik.errors.applicationValue}
              size="compact"
              fullwidth
              state={getFieldState(formik, "applicationValue")}
              onBlur={formik.handleBlur}
              onChange={(e) => handleChangeWithCurrency(formik, e)}
              required
              iconAfter={<MdAttachMoney size={18} />}
            />
          </Grid>
        )}

        {withDays && (
          <Grid
            templateColumns={`repeat(${isMobile ? 1 : 2}, 1fr)`}
            autoRows="auto"
            gap={inube.spacing.s300}
          >
            <TextField
              label="Días de incapacidad"
              name="applicationDays"
              id="applicationDays"
              placeholder="Digita el numero de días"
              value={formik.values.applicationDays || ""}
              type="number"
              message={formik.errors.applicationDays}
              size="compact"
              fullwidth
              state={getFieldState(formik, "applicationDays")}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
              iconAfter={<MdOutlineTag size={18} />}
            />
          </Grid>
        )}

        <Textarea
          id="message"
          name="message"
          label="Detalles adicionales"
          placeholder="Escribe los detalles que debemos tener en cuenta"
          maxLength={120}
          value={formik.values.message}
          message={formik.errors.message}
          state={getFieldState(formik, "message")}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          withCounter
          fullwidth
        />
      </Stack>
    </form>
  );
}

export { DetailsSituationFormUI };
