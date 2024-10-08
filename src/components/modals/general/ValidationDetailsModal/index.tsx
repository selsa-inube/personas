import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { createPortal } from "react-dom";
import { StyledModal } from "./styles";
import { Button } from "@inubekit/button";

interface ValidationDetailsModalProps {
  label: string;
  description?: string;
  portalId: string;
  onCloseModal: () => void;
}

function ValidationDetailsModal(props: ValidationDetailsModalProps) {
  const { label, description, portalId, onCloseModal } = props;

  const isMobile = useMediaQuery("(max-width: 580px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $isMobile={isMobile}>
        <Text type="title" size="medium">
          {label}
        </Text>

        {description && (
          <Text type="body" size="large" appearance="gray">
            {description}
          </Text>
        )}

        <Stack gap={inube.spacing.s200} justifyContent="flex-end" width="100%">
          <Button spacing="compact" onClick={onCloseModal} appearance="danger">
            Cerrar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { ValidationDetailsModal };
export type { ValidationDetailsModalProps };
