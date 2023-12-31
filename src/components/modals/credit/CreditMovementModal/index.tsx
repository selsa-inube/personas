import { Icon } from "@design/data/Icon";
import { Text } from "@design/data/Text";
import { Blanket } from "@design/layout/Blanket";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { createPortal } from "react-dom";
import { MdAdd, MdOutlineClose } from "react-icons/md";
import { IMovement } from "src/model/entity/product";
import {
  StyledBody,
  StyledBodyHead,
  StyledDivider,
  StyledModal,
} from "./styles";

const renderTransactionSpecification = (label: string, value?: number) => (
  <Stack gap="s100" alignItems="center">
    <Icon
      appearance="dark"
      icon={<MdAdd />}
      cursorHover={true}
      size="16px"
      spacing="none"
    />
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
  movement: IMovement;
}

function CreditMovementModal(props: CreditMovementModalProps) {
  const { portalId, onCloseModal, movement } = props;

  const isMobile = useMediaQuery("(max-width: 580px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
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

        <StyledDivider dashed />

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
            {renderTransactionSpecification(
              "Abono capital:",
              movement.capitalPayment
            )}
            {renderTransactionSpecification(
              "Interés de mora:",
              movement.interest
            )}
            {renderTransactionSpecification(
              "Seguro de vida:",
              movement.lifeInsurance
            )}
            {renderTransactionSpecification(
              "Seguro patrimonial:",
              movement.patrimonialInsurance
            )}
            {renderTransactionSpecification(
              "Capitalización:",
              movement.capitalization
            )}
            {renderTransactionSpecification("Comisión:", movement.commission)}
          </Stack>

          <Stack direction="column" gap="s150">
            <StyledDivider />

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
    node
  );
}

export { CreditMovementModal };
