import { Icon } from "@design/data/Icon";
import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { Select } from "@design/input/Select";
import { TextField } from "@design/input/TextField";
import { Blanket } from "@design/layout/Blanket";
import { Stack } from "@design/layout/Stack";
import { Fieldset } from "@design/input/Fieldset";
import { Grid } from "@design/layout/Grid";
import { Divider } from "@design/layout/Divider";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FormikValues } from "formik";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { StyledModal, StyledScrollbar } from "./styles";
import { identificationTypeDM } from "src/model/domains/personalInformation/identificationtypedm";
import { relationshipDM } from "src/model/domains/personalResidence/relationshipdm";
import { genderDM } from "src/model/domains/personalInformation/genderdm";
import { activeDM } from "src/model/domains/general/activedm";
import { educationLevelTypeDM } from "src/model/domains/socioeconomicInformation/educationLeveldm";
import { getDomainById } from "@mocks/domains/domainService.mocks";

interface FamilyMemberViewModalProps {
  portalId: string;
  formik: FormikValues;
  onCloseModal: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

function FamilyMemberViewModal(props: FamilyMemberViewModalProps) {
  const { portalId, formik, onCloseModal, onEdit, onDelete } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={isMobile}>
        <Stack direction="column" width="100%" gap="s100">
          <Stack justifyContent="space-between" alignItems="center">
            <Text type="title" size="medium" appearance="dark">
              Ver familiar
            </Text>
            <Icon
              appearance="dark"
              icon={<MdOutlineClose />}
              onClick={onCloseModal}
              size="20px"
              spacing="none"
              cursorHover
            />
          </Stack>
          <Text type="body" size="medium" appearance="gray">
            Detalles de la información
          </Text>
        </Stack>
        <StyledScrollbar smallScreen={isMobile}>
          <Divider dashed/>
          <Fieldset title="Identificación">
            <Grid gap="s200" templateColumns={isMobile ? "1fr" : "1fr 1fr"}>
              <Select
                label="Tipo de documento"
                placeholder=""
                name="type"
                id="type"
                options={identificationTypeDM.options}
                size="compact"
                isFullWidth
                value={formik.values.type}
                readOnly
              />
              <TextField
                label="Identificación"
                name="number"
                id="number"
                placeholder=""
                value={formik.values.number}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <TextField
                label="Primer nombre"
                name="firstName"
                id="firstName"
                placeholder=""
                value={formik.values.firstName}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <TextField
                label="Segundo nombre"
                name="secondName"
                id="secondName"
                placeholder=""
                value={formik.values.secondName || ""}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <TextField
                label="Primer apellido"
                name="firstLastName"
                id="firstLastName"
                placeholder=""
                value={formik.values.firstLastName}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <TextField
                label="Segundo apellido"
                name="secondLastName"
                id="secondLastName"
                placeholder=""
                value={formik.values.secondLastName || ""}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
            </Grid>
          </Fieldset>
          <Fieldset title="Contacto">
            <Grid gap="s200" templateColumns={isMobile ? "1fr" : "1fr 1fr"}>
              <TextField
                label="Celular"
                name="cellPhone"
                id="cellPhone"
                placeholder=""
                value={formik.values.cellPhone}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <TextField
                label="Correo eléctronico"
                name="email"
                id="email"
                placeholder=""
                value={formik.values.email}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
            </Grid>
          </Fieldset>
          <Fieldset title="Información">
            <Grid gap="s200" templateColumns={isMobile ? "1fr" : "1fr 1fr"}>
              <Select
                label="Parentesco"
                placeholder=""
                name="relationship"
                id="relationship"
                size="compact"
                options={relationshipDM.options}
                isFullWidth
                value={formik.values.relationship}
                readOnly
              />
              <Select
                label="Depende económicamente"
                placeholder=""
                name="isDependent"
                id="isDependent"
                size="compact"
                options={activeDM.options}
                isFullWidth
                value={
                  formik.values.isDependent
                    ? activeDM.Y.id
                    : activeDM.N.id
                }
                readOnly
              />
              <Select
                label="Nivel de escolaridad"
                placeholder=""
                name="educationLevel"
                id="educationLevel"
                options={educationLevelTypeDM.options}
                size="compact"
                isFullWidth
                value={formik.values.educationLevel}
                readOnly
              />
              <Select
                label="Profesión u oficio"
                placeholder=""
                name="profession"
                id="profession"
                size="compact"
                options={getDomainById("profession")}
                isFullWidth
                value={formik.values.profession || ""}
                readOnly
              />
              <Select
                label="Genero"
                placeholder=""
                name="gender"
                id="gender"
                size="compact"
                options={genderDM.options}
                isFullWidth
                value={formik.values.gender}
                readOnly
              />
              <TextField
                label="Fecha de nacimiento"
                name="birthDate"
                id="birthDate"
                placeholder=""
                value={formik.values.birthDate}
                type="text"
                size="compact"
                isFullWidth
                readOnly
              />
              <Select
                label="Actividad económica"
                placeholder=""
                name="businessActivity"
                id="businessActivity"
                options={getDomainById("economicSector")}
                size="compact"
                isFullWidth
                value={formik.values.businessActivity || ""}
                readOnly
              />
            </Grid>
          </Fieldset>
        </StyledScrollbar>
        <Stack gap="s150">
          <Button appearance="gray" onClick={onDelete}>
            Eliminar
          </Button>
          <Button appearance="primary" onClick={onEdit}>
            Editar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
}

export { FamilyMemberViewModal };
