import { Icon } from "@design/data/Icon";
import { IEntry } from "@design/data/Table/types";
import { Text } from "@design/data/Text";
import { Blanket } from "@design/layout/Blanket";
import { Divider } from "@design/layout/Divider";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { StyledBody, StyledBodyHead, StyledModal } from "./styles";

const renderTransactionSpecification = (label: string, value?: number) => (
  <Stack gap="s100" alignItems="center">
    <Stack justifyContent="space-between" width="100%">
      <Text type="label" size="medium" appearance="dark">
        {label}
      </Text>

      <Text type="body" size="small" appearance="gray">
        {value}
      </Text>
    </Stack>
  </Stack>
);

interface CreditMovementModalProps {
  portalId: string;
  onCloseModal: () => void;
  movement: IEntry;
}

function CreditMovementModal(props: CreditMovementModalProps) {
  const { portalId, onCloseModal, movement } = props;

  const isMobile = useMediaQuery("(max-width: 580px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={isMobile}>
        <Stack direction="column" width="100%">
          <Stack justifyContent="space-between" alignItems="center">
            <Text type="title" size="large" appearance="dark">
              Movimiento
            </Text>

            <Icon
              appearance="dark"
              icon={<MdOutlineClose />}
              onClick={onCloseModal}
              cursorHover={true}
              size="20px"
              spacing="none"
            />
          </Stack>
          <Text type="body" size="medium" appearance="gray">
            Detalles de la transacción
          </Text>
        </Stack>

        <Divider dashed />

        <StyledBodyHead>
          <Text type="title" size="medium" appearance="dark">
            {movement.reference} - {movement.date}
          </Text>

          <Stack gap="s100" alignItems="center">
            <Text type="label" size="medium" appearance="dark">
              Descripción:
            </Text>

            <Text type="body" size="small" appearance="gray">
              {movement.description}
            </Text>
          </Stack>
        </StyledBodyHead>

        <StyledBody>
          <Text type="title" size="medium" appearance="dark">
            Especificación de la transacción
          </Text>

          <Stack direction="column" gap="s200">
            {movement.capitalPayment &&
              renderTransactionSpecification(
                "Abono capital:",
                movement.capitalPayment,
              )}
            {movement.interest &&
              renderTransactionSpecification(
                "Interés corriente:",
                movement.interest,
              )}
            {movement.lifeInsurance &&
              renderTransactionSpecification(
                "Seguro de vida:",
                movement.lifeInsurance,
              )}
            {movement.patrimonialInsurance &&
              renderTransactionSpecification(
                "Seguro patrimonial:",
                movement.patrimonialInsurance,
              )}
            {movement.capitalization &&
              renderTransactionSpecification(
                "Capitalización:",
                movement.capitalization,
              )}
            {movement.commission &&
              renderTransactionSpecification("Comisión:", movement.commission)}
          </Stack>

          <Stack direction="column" gap="s150">
            <Divider />

            <Stack justifyContent="space-between" alignItems="center">
              <Text type="title" size="medium" appearance="gray">
                Pago total:
              </Text>

              <Text type="title" size="medium" appearance="dark">
                {movement.totalValue}
              </Text>
            </Stack>
          </Stack>
        </StyledBody>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { CreditMovementModal };
