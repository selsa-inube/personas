import { Select } from "@design/input/Select";
import { TextField } from "@design/input/TextField";
import { Grid } from "@design/layout/Grid";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FormikValues } from "formik";
import { MdOutlineModeEdit } from "react-icons/md";
import { bloodTypeDM } from "src/model/domains/personalInformation/bloodtypedm";
import { cityDM } from "src/model/domains/personalInformation/citydm";
import { genderDM } from "src/model/domains/personalInformation/genderdm";
import { identificationTypeDM } from "src/model/domains/personalInformation/identificationtypedm";
import { maritalStatusDM } from "src/model/domains/personalInformation/maritalstatusdm";
import { getFieldState } from "src/utils/forms/forms";

interface PersonalInformationFormUIProps {
  formik: FormikValues;
  loading?: boolean;
  customHandleBlur: (event: React.FocusEvent<HTMLElement, Element>) => void;
}

function PersonalInformationFormUI(props: PersonalInformationFormUIProps) {
  const { formik, loading, customHandleBlur } = props;

  const isMobile = useMediaQuery("(max-width: 610px)");

  return (
    <form>
      <Grid
        templateColumns={isMobile ? "1fr" : "1fr 1fr"}
        gap={isMobile ? "s150" : "s300"}
      >
        <TextField
          label="Primer nombre"
          placeholder="Primer nombre"
          name="firstName"
          id="firstName"
          value={formik.values.firstName}
          size="compact"
          isFullWidth
          readOnly
        />

        <TextField
          label="Segundo nombre"
          placeholder="Segundo nombre"
          name="secondName"
          id="secondName"
          value={formik.values.secondName}
          size="compact"
          isFullWidth
          readOnly
        />

        <TextField
          label="Primer apellido"
          placeholder="Primer apellido"
          name="firstLastName"
          id="firstLastName"
          value={formik.values.firstLastName}
          size="compact"
          isFullWidth
          readOnly
        />

        <TextField
          label="Segundo apellido"
          placeholder="Segundo apellido"
          name="secondLastName"
          id="secondLastName"
          value={formik.values.secondLastName}
          size="compact"
          isFullWidth
          readOnly
        />

        <Select
          label="Tipo de identificación"
          name="identificationType"
          id="identificationType"
          value={formik.values.identificationType}
          size="compact"
          isFullWidth
          readOnly
          options={identificationTypeDM.options}
        />

        <TextField
          label="Numero de identificación"
          placeholder="Numero de identificación"
          name="identification"
          id="identification"
          value={formik.values.identification}
          type="number"
          size="compact"
          isFullWidth
          readOnly
        />

        <Select
          label="Lugar de expedición"
          name="expeditionPlace"
          id="expeditionPlace"
          value={formik.values.expeditionPlace}
          size="compact"
          isFullWidth
          options={cityDM.options}
          onBlur={customHandleBlur}
          errorMessage={formik.errors.expeditionPlace}
          isDisabled={loading}
          state={getFieldState(formik, "expeditionPlace")}
          onChange={formik.handleChange}
        />

        <TextField
          label="Fecha de expedición"
          placeholder="Ejemplo: 01/Ene/1990"
          name="expeditionDate"
          id="expeditionDate"
          value={formik.values.expeditionDate}
          type="text"
          iconAfter={<MdOutlineModeEdit size={18} />}
          errorMessage={formik.errors.expeditionDate}
          isDisabled={loading}
          size="compact"
          isFullWidth
          state={getFieldState(formik, "expeditionDate")}
          onBlur={customHandleBlur}
          onChange={formik.handleChange}
          validMessage="La fecha de expedición es válida"
          isRequired
        />

        <TextField
          label="Fecha de nacimiento"
          placeholder="Ejemplo: 01/Ene/1990"
          name="birthDate"
          id="birthDate"
          value={formik.values.birthDate}
          type="text"
          iconAfter={<MdOutlineModeEdit size={18} />}
          errorMessage={formik.errors.birthDate}
          isDisabled={loading}
          size="compact"
          isFullWidth
          state={getFieldState(formik, "birthDate")}
          onBlur={customHandleBlur}
          onChange={formik.handleChange}
          validMessage="La fecha de nacimiento es válida"
          isRequired
        />

        <Select
          label="Ciudad de nacimiento"
          name="city"
          id="city"
          value={formik.values.city}
          size="compact"
          isFullWidth
          options={cityDM.options}
          onBlur={customHandleBlur}
          errorMessage={formik.errors.city}
          isDisabled={loading}
          state={getFieldState(formik, "city")}
          onChange={formik.handleChange}
        />

        <Select
          label="Género"
          name="gender"
          id="gender"
          value={formik.values.gender}
          size="compact"
          isFullWidth
          options={genderDM.options}
          onBlur={customHandleBlur}
          errorMessage={formik.errors.gender}
          isDisabled={loading}
          state={getFieldState(formik, "gender")}
          onChange={formik.handleChange}
        />

        <Select
          label="Estado civil"
          name="maritalStatus"
          id="maritalStatus"
          value={formik.values.maritalStatus}
          size="compact"
          isFullWidth
          options={maritalStatusDM.options}
          onBlur={customHandleBlur}
          errorMessage={formik.errors.maritalStatus}
          isDisabled={loading}
          state={getFieldState(formik, "maritalStatus")}
          onChange={formik.handleChange}
        />

        <Select
          label="Factor RH"
          name="bloodType"
          id="bloodType"
          value={formik.values.bloodType}
          size="compact"
          isFullWidth
          options={bloodTypeDM.options}
          onBlur={customHandleBlur}
          errorMessage={formik.errors.bloodType}
          isDisabled={loading}
          state={getFieldState(formik, "bloodType")}
          onChange={formik.handleChange}
        />
      </Grid>
    </form>
  );
}

export { PersonalInformationFormUI };
