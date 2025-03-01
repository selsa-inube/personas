import { TextField } from "@design/input/TextField";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import {
  Blanket,
  Button,
  Divider,
  Icon,
  Select,
  Stack,
  Text,
} from "@inubekit/inubekit";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { IPersonalReferenceEntries } from "@pages/general/UpdateData/forms/PersonalReferencesForm/types";
import { FormikProps } from "formik";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose, MdOutlineModeEdit } from "react-icons/md";
import { countryDM } from "src/model/domains/general/updateData/financialOperations/countrydm";
import { cityDM } from "src/model/domains/general/updateData/personalInformation/citydm";
import { departmentDM } from "src/model/domains/general/updateData/personalInformation/departamentdm";
import {
  formikHandleChange,
  getFieldState,
  isInvalid,
} from "src/utils/forms/forms";
import { StyledModal } from "./styles";

const referenceTypeDM = getDomainById("referenceType");

interface ReferenceModalProps {
  title: string;
  description: string;
  confirmButtonText: string;
  portalId: string;
  formik: FormikProps<IPersonalReferenceEntries>;
  withCustomDirty?: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;
}

function ReferenceModal(props: ReferenceModalProps) {
  const {
    portalId,
    formik,
    title,
    description,
    confirmButtonText,
    withCustomDirty,
    onCloseModal,
    onConfirm,
  } = props;

  const [customDirty] = useState(formik.values);

  const isMobile = useMediaQuery("(max-width: 550px)");

  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack
          direction="column"
          width="100%"
          gap={isMobile ? inube.spacing.s050 : inube.spacing.s100}
        >
          <Stack justifyContent="space-between" alignItems="center">
            <Text
              type="title"
              size={isMobile ? "small" : "medium"}
              appearance="dark"
            >
              {title}
            </Text>

            <Icon
              appearance="dark"
              icon={<MdOutlineClose />}
              onClick={onCloseModal}
              cursorHover={true}
              size="20px"
              spacing="narrow"
            />
          </Stack>
          <Text
            type="body"
            size={isMobile ? "small" : "medium"}
            appearance="gray"
          >
            {description}
          </Text>
        </Stack>

        <Divider dashed />
        <Stack direction="column" gap={inube.spacing.s150} width="100%">
          <Select
            label="Tipo de referencia"
            name="referenceType"
            id="referenceType"
            size="compact"
            options={referenceTypeDM}
            onBlur={formik.handleBlur}
            message={formik.errors.referenceType}
            invalid={isInvalid(formik, "referenceType")}
            onChange={(name, value) => formikHandleChange(name, value, formik)}
            value={formik.values.referenceType || ""}
            fullwidth
            required
          />
          <TextField
            label="Nombre"
            name="name"
            id="name"
            placeholder="Digite el nombre de la referencia"
            type="text"
            size="compact"
            value={formik.values.name || ""}
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.name}
            state={getFieldState(formik, "name")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="El nombre de la referencia es válido"
            fullwidth
            required
          />
          <TextField
            label="Dirección"
            name="address"
            id="address"
            placeholder="Digite la dirección de residencia"
            type="text"
            size="compact"
            value={formik.values.address || ""}
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.address}
            state={getFieldState(formik, "address")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="La dirección es válida"
            fullwidth
            required
          />
          <TextField
            label="Correo electrónico"
            name="email"
            id="email"
            placeholder="Digite el correo electrónico"
            type="text"
            size="compact"
            value={formik.values.email || ""}
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.email}
            state={getFieldState(formik, "email")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="El correo electrónico es válido"
            fullwidth
            required
          />
          <TextField
            label="Celular"
            name="phone"
            id="phone"
            placeholder="Digite el número de celular"
            type="text"
            size="compact"
            value={formik.values.phone || ""}
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.phone}
            state={getFieldState(formik, "phone")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="El número de celular es válido"
            fullwidth
            required
          />
          <TextField
            label="País"
            name="country"
            id="country"
            placeholder="País"
            type="text"
            size="compact"
            value={
              countryDM.valueOf(formik.values.country || "")?.value ||
              formik.values.country
            }
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.country}
            state={getFieldState(formik, "country")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="El país es válido"
            suggestions={countryDM.options}
            autocompleteChars={2}
            autocomplete
            fullwidth
            required
          />
          <TextField
            label="Estado / Departamento"
            name="stateOrDepartment"
            id="stateOrDepartment"
            placeholder="Estado o Departamento"
            type="text"
            size="compact"
            value={
              departmentDM.valueOf(formik.values.stateOrDepartment || "")
                ?.value || formik.values.stateOrDepartment
            }
            disabled={
              !formik.values.country ||
              !Object.keys(countryDM).includes(formik.values.country)
            }
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.stateOrDepartment}
            state={getFieldState(formik, "stateOrDepartment")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="El estado / departamento es válido"
            suggestions={departmentDM.options}
            autocompleteChars={2}
            autocomplete
            fullwidth
            required
          />
          <TextField
            label="Ciudad"
            name="city"
            id="city"
            placeholder="Ciudad"
            type="text"
            size="compact"
            value={
              cityDM.valueOf(formik.values.city || "")?.value ||
              formik.values.city
            }
            disabled={
              !formik.values.stateOrDepartment ||
              !Object.values(departmentDM.options).some(
                (option) => option.id === formik.values.stateOrDepartment,
              )
            }
            iconAfter={<MdOutlineModeEdit size={18} />}
            message={formik.errors.city}
            state={getFieldState(formik, "city")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            validMessage="La ciudad es válida"
            suggestions={cityDM.options}
            autocompleteChars={2}
            autocomplete
            fullwidth
            required
          />
        </Stack>

        <Stack gap={inube.spacing.s100} justifyContent="flex-end">
          <Button
            spacing="compact"
            variant="outlined"
            appearance="gray"
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
          <Button
            spacing="compact"
            onClick={onConfirm}
            disabled={
              withCustomDirty
                ? JSON.stringify(customDirty) === JSON.stringify(formik.values)
                : !formik.dirty || !formik.isValid
            }
            appearance="primary"
          >
            {confirmButtonText}
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { ReferenceModal };
