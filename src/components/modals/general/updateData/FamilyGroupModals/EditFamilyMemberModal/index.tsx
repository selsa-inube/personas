import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { Select } from "@design/input/Select";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FormikValues } from "formik";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { activeDM } from "src/model/domains/general/activedm";
import { relationshipDM } from "src/model/domains/general/updateData/personalResidence/relationshipDM";
import { getFieldState } from "src/utils/forms/forms";
import { StyledModal } from "./styles";
import { Divider } from "@inubekit/divider";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { inube } from "@design/tokens";

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
            <Text type="title" size={isMobile ? "small" : "medium"}>
              Editar familiar
            </Text>
            <Icon
              appearance="dark"
              icon={<MdOutlineClose />}
              size="20px"
              spacing="narrow"
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
        <Stack direction="column" gap={inube.spacing.s150} width="100%">
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
              value={formik.values.relationship}
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
              value={formik.values.isDependent}
              state={getFieldState(formik, "isDependent")}
              isRequired={isRequired("isDependent")}
              isFullWidth
            />
          </>
        </Stack>

        <Stack gap={inube.spacing.s100}>
          <Button
            spacing="compact"
            appearance="gray"
            variant="outlined"
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
          <Button
            spacing="compact"
            onClick={onConfirm}
            disabled={
              !withCustomDirty
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
    node,
  );
}

export { EditFamilyMemberModal };
