import { Select } from "@design/input/Select";
import { ISelectOption } from "@design/input/Select/types";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { StyledModal, StyledOptionsContainer } from "./styles";
import { Divider } from "@inubekit/divider";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { inube } from "@design/tokens";
import { Button } from "@inubekit/button";

interface IPaymentFilters {
  group: string;
  paymentMethod: string;
  status: string;
}

interface PaymentFilterModalProps {
  initialFilters: IPaymentFilters;
  allowedFilters: {
    group: ISelectOption[];
    paymentMethod: ISelectOption[];
    status: ISelectOption[];
  };
  onCloseModal: () => void;
  onApplyFilters: (selectedFilters: IPaymentFilters) => void;
}

function PaymentFilterModal(props: PaymentFilterModalProps) {
  const { initialFilters, allowedFilters, onCloseModal, onApplyFilters } =
    props;
  const [selectedFilters, setSelectedFilters] =
    useState<IPaymentFilters>(initialFilters);

  const isMobile = useMediaQuery("(max-width: 580px)");
  const node = document.getElementById("modals");

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
    onCloseModal();
  };

  const disabledApply =
    JSON.stringify(selectedFilters) === JSON.stringify(initialFilters);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" width="100%" gap={inube.spacing.s100}>
          <Stack justifyContent="space-between" alignItems="center">
            <Text type="title" size="medium">
              Filtros aplicados
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
          <Text type="body" size="medium" appearance="gray">
            Organiza tus obligaciones mediante filtros.
          </Text>
        </Stack>

        <Divider dashed />

        <StyledOptionsContainer>
          <Select
            label="Grupo"
            name="group"
            id="group"
            size="compact"
            isFullWidth
            options={allowedFilters.group}
            onChange={handleChangeFilter}
            value={selectedFilters.group}
          />

          <Select
            label="Medio de pago"
            name="paymentMethod"
            id="paymentMethod"
            size="compact"
            isFullWidth
            options={allowedFilters.paymentMethod}
            onChange={handleChangeFilter}
            value={selectedFilters.paymentMethod}
          />

          <Select
            label="Estado"
            name="status"
            id="status"
            size="compact"
            isFullWidth
            options={allowedFilters.status}
            onChange={handleChangeFilter}
            value={selectedFilters.status}
          />
        </StyledOptionsContainer>

        <Stack width="100%" justifyContent="flex-end" gap={inube.spacing.s100}>
          <Button
            appearance="gray"
            variant="outlined"
            spacing="compact"
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
          <Button
            spacing="compact"
            onClick={handleApplyFilters}
            disabled={disabledApply}
          >
            Aceptar
          </Button>
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { PaymentFilterModal };
export type { IPaymentFilters };
