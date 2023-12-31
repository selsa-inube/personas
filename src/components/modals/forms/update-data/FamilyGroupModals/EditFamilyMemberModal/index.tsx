import { Icon } from "@design/data/Icon";
import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { Select } from "@design/input/Select";
import { TextField } from "@design/input/TextField";
import { Blanket } from "@design/layout/Blanket";
import { Divider } from "@design/layout/Divider";
import { Stack } from "@design/layout/Stack";
import { Tabs } from "@design/navigation/Tabs";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { FormikValues } from "formik";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose, MdOutlineModeEdit } from "react-icons/md";
import { activeDM } from "src/model/domains/general/activedm";
import { genderDM } from "src/model/domains/personalInformation/genderdm";
import { identificationTypeDM } from "src/model/domains/personalInformation/identificationtypedm";
import { relationshipDM } from "src/model/domains/personalResidence/relationshipdm";
import { educationLevelTypeDM } from "src/model/domains/socioeconomicInformation/educationLeveldm";
import { getFieldState } from "src/utils/forms/forms";
import { editFamilyMemberModalTabs } from "./config/tabs";
import { StyledModal } from "./styles";

interface EditFamilyMemberModalProps {
  portalId: string;
  formik: FormikValues;
  withCustomDirty?: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;
  isRequired: (fieldName: string) => boolean;
}

function EditFamilyMemberModal(props: EditFamilyMemberModalProps) {
  const {
    portalId,
    formik,
    withCustomDirty,
    onCloseModal,
    onConfirm,
    isRequired,
  } = props;

  const [customDirty] = useState(formik.values);
  const [selectedTab, setSelectedTab] = useState(
    editFamilyMemberModalTabs[0].id
  );

  const isMobile = useMediaQuery("(max-width: 550px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={isMobile}>
        <Stack direction="column" width="100%" gap={isMobile ? "s050" : "s100"}>
          <Stack justifyContent="space-between" alignItems="center">
            <Text type="title" size={isMobile ? "small" : "medium"}>
              Editar familiar
            </Text>
            <Icon
              appearance="dark"
              icon={<MdOutlineClose />}
              size="20px"
              spacing="none"
              cursorHover
              onClick={onCloseModal}
            />
          </Stack>
          <Text
            type="body"
            size={isMobile ? "small" : "medium"}
            appearance="gray"
          >
            Actualización de la información
          </Text>
        </Stack>

        <Divider dashed />

        <Tabs
          tabs={editFamilyMemberModalTabs}
          selectedTab={selectedTab}
          onChange={setSelectedTab}
        />
        <Stack direction="column" gap="s150" width="100%">
          {selectedTab === "identificationTab" && (
            <>
              <Select
                label="Tipo de documento"
                placeholder="Tipo de documento"
                name="type"
                id="type"
                size="compact"
                options={identificationTypeDM.options}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.type}
                onChange={formik.handleChange}
                value={formik.values.type || ""}
                state={getFieldState(formik, "type")}
                isRequired={isRequired("type")}
                isFullWidth
              />
              <TextField
                label="Documento"
                placeholder="Documento"
                name="number"
                id="number"
                type="number"
                size="compact"
                validMessage="El documento es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.number || ""}
                errorMessage={formik.errors.number}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "number")}
                isRequired={isRequired("number")}
                isFullWidth
              />
              <TextField
                label="Primer nombre"
                placeholder="Primer nombre"
                name="firstName"
                id="firstName"
                type="text"
                size="compact"
                validMessage="El primer nombre es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.firstName || ""}
                errorMessage={formik.errors.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "firstName")}
                isRequired={isRequired("firstName")}
                isFullWidth
              />
              <TextField
                label="Segundo nombre"
                placeholder="Segundo nombre"
                name="secondName"
                id="secondName"
                type="text"
                size="compact"
                validMessage="El segundo nombre es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.secondName || ""}
                errorMessage={formik.errors.secondName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "secondName")}
                isRequired={isRequired("secondName")}
                isFullWidth
              />
              <TextField
                label="Primer apellido"
                placeholder="Primer apellido"
                name="firstLastName"
                id="firstLastName"
                type="text"
                size="compact"
                validMessage="El primer apellido es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.firstLastName || ""}
                errorMessage={formik.errors.firstLastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "firstLastName")}
                isRequired={isRequired("firstLastName")}
                isFullWidth
              />
              <TextField
                label="Segundo apellido"
                placeholder="Segundo apellido"
                name="secondLastName"
                id="secondLastName"
                type="text"
                size="compact"
                validMessage="El segundo apellido es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.secondLastName || ""}
                errorMessage={formik.errors.secondLastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "secondLastName")}
                isRequired={isRequired("secondLastName")}
                isFullWidth
              />
            </>
          )}
          {selectedTab === "contactTab" && (
            <>
              <TextField
                label="Celular"
                placeholder="Celular"
                name="cellPhone"
                id="cellPhone"
                type="number"
                size="compact"
                validMessage="El numero de celular es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.cellPhone || ""}
                errorMessage={formik.errors.cellPhone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "cellPhone")}
                isRequired={isRequired("cellPhone")}
                isFullWidth
              />
              <TextField
                label="Correo electrónico"
                placeholder="Correo electrónico"
                name="email"
                id="email"
                type="text"
                size="compact"
                validMessage="El correo electrónico es válido"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.email || ""}
                errorMessage={formik.errors.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "email")}
                isRequired={isRequired("email")}
                isFullWidth
              />
            </>
          )}
          {selectedTab === "informationTab" && (
            <>
              <Select
                label="Parentesco"
                placeholder="Parentesco"
                name="relationship"
                id="relationship"
                size="compact"
                options={relationshipDM.options}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.relationship}
                onChange={formik.handleChange}
                value={formik.values.relationship || ""}
                state={getFieldState(formik, "relationship")}
                isRequired={isRequired("relationship")}
                isFullWidth
              />
              <Select
                label="Depende económicamente"
                placeholder="Depende económicamente"
                name="isDependent"
                id="isDependent"
                size="compact"
                options={activeDM.options}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.isDependent}
                onChange={formik.handleChange}
                value={
                  formik.values.isDependent ? activeDM.Y.id : activeDM.N.id
                }
                state={getFieldState(formik, "isDependent")}
                isRequired={isRequired("isDependent")}
                isFullWidth
              />
              <Select
                label="Nivel de escolaridad"
                placeholder="Nivel de escolaridad"
                name="educationLevel"
                id="educationLevel"
                size="compact"
                options={educationLevelTypeDM.options}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.educationLevel}
                onChange={formik.handleChange}
                value={formik.values.educationLevel || ""}
                state={getFieldState(formik, "educationLevel")}
                isRequired={isRequired("educationLevel")}
                isFullWidth
              />
              <Select
                label="Profesión u oficio"
                placeholder="Profesión u oficio"
                name="profession"
                id="profession"
                size="compact"
                options={getDomainById("profession")}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.profession}
                onChange={formik.handleChange}
                value={formik.values.profession || ""}
                state={getFieldState(formik, "profession")}
                isRequired={isRequired("profession")}
                isFullWidth
              />
              <Select
                label="Genero"
                placeholder="Genero"
                name="gender"
                id="gender"
                size="compact"
                options={genderDM.options}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.gender}
                onChange={formik.handleChange}
                value={formik.values.gender || ""}
                state={getFieldState(formik, "gender")}
                isRequired={isRequired("gender")}
                isFullWidth
              />
              <TextField
                label="Fecha de nacimiento"
                placeholder="Fecha de nacimiento"
                name="birthDate"
                id="birthDate"
                type="text"
                size="compact"
                validMessage="La fecha de nacimiento es válida"
                iconAfter={<MdOutlineModeEdit size={18} />}
                value={formik.values.birthDate || ""}
                errorMessage={formik.errors.birthDate}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                state={getFieldState(formik, "birthDate")}
                isRequired={isRequired("birthDate")}
                isFullWidth
              />
              <Select
                label="Actividad económica"
                placeholder="Actividad económica"
                name="businessActivity"
                id="businessActivity"
                size="compact"
                options={getDomainById("economicSector")}
                onBlur={formik.handleBlur}
                errorMessage={formik.errors.businessActivity}
                onChange={formik.handleChange}
                value={formik.values.businessActivity || ""}
                state={getFieldState(formik, "businessActivity")}
                isRequired={isRequired("businessActivity")}
                isFullWidth
              />
            </>
          )}
        </Stack>

        <Stack gap="s100">
          <Button spacing="compact" appearance="gray" onClick={onCloseModal}>
            Cancelar
          </Button>
          <Button
            spacing="compact"
            onClick={onConfirm}
            disabled={
              withCustomDirty
                ? JSON.stringify(customDirty) == JSON.stringify(formik.values)
                : !formik.dirty || !formik.isValid
            }
            appearance="primary"
          >
            Guardar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
}

export { EditFamilyMemberModal };
