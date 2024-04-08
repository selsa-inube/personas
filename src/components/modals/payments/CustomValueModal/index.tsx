import { Icon } from "@design/data/Icon";
import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { StyledInputRadio } from "@design/input/RadioCard/styles";
import { TextField } from "@design/input/TextField";
import { Blanket } from "@design/layout/Blanket";
import { Divider } from "@design/layout/Divider";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useState } from "react";
import { createPortal } from "react-dom";
import {
  MdAttachMoney,
  MdOutlineCheckCircle,
  MdOutlineClose,
} from "react-icons/md";
import { currencyFormat } from "src/utils/currency";
import {
  StyledApplyPayContainer,
  StyledApplyPayOption,
  StyledApprovedValue,
  StyledModal,
} from "./styles";

interface IApplyPayOption {
  id: string;
  label: string;
}

const applyPayOptions: IApplyPayOption[] = [
  {
    id: "reduceTerm",
    label: "Reducir plazo",
  },
  {
    id: "reduceQuota",
    label: "Reducir cuota",
  },
  {
    id: "reduceFutureQuota",
    label: "Pagar cuotas futuras",
  },
];

interface CustomValueModalProps {
  portalId: string;
  value: number;
  balanceValue: number;
  onChangeCustomValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCloseModal: () => void;
  onApplyPayOption: (option: IApplyPayOption) => void;
}

function CustomValueModal(props: CustomValueModalProps) {
  const {
    portalId,
    value,
    balanceValue,
    onChangeCustomValue,
    onCloseModal,
    onApplyPayOption,
  } = props;
  const [showResponse, setShowResponse] = useState(false);
  const [inputValidation, setInputValidation] = useState({
    state: "pending",
    errorMessage: "",
  });
  const [selectedOption, setSelectedOption] = useState<IApplyPayOption>();

  const isMobile = useMediaQuery("(max-width: 580px)");
  const node = document.getElementById(portalId);

  const handleValidateValue = () => {
    if (value > balanceValue) {
      setInputValidation({
        state: "invalid",
        errorMessage: "(Valor superior al saldo)",
      });

      return;
    }

    setShowResponse(true);
  };

  const handleApplyPayOption = () => {
    if (!selectedOption) return;

    onApplyPayOption(selectedOption);
    onCloseModal();
  };

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={isMobile}>
        <Stack direction="column" width="100%" gap="s100">
          <Stack justifyContent="space-between" alignItems="center">
            <Text type="title" size="medium">
              Pagar otro valor
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
            Ingresar el valor que deseas pagar.
          </Text>
        </Stack>

        <Divider dashed />

        <Stack gap="s200" direction="column">
          <TextField
            id="customValue"
            name="customValue"
            label="Valor"
            iconBefore={
              <Icon icon={<MdAttachMoney />} appearance="dark" size="18px" />
            }
            placeholder=""
            value={currencyFormat(value || 0)}
            onChange={onChangeCustomValue}
            isFullWidth
            state={inputValidation.state}
            errorMessage={inputValidation.errorMessage}
          />
          <Stack width="100%" justifyContent="flex-end">
            <Button
              variant="outlined"
              spacing="compact"
              onClick={handleValidateValue}
              disabled={showResponse}
            >
              Continuar
            </Button>
          </Stack>
        </Stack>

        {showResponse && (
          <>
            <Divider dashed />

            <Stack gap="s200" direction="column">
              <StyledApprovedValue>
                <Icon appearance="success" icon={<MdOutlineCheckCircle />} />
                <Text type="label" size="large">
                  Valor aprobado
                </Text>
              </StyledApprovedValue>

              <Text type="body" size="medium" appearance="gray">
                Selecciona como quieres aplicar el pago.
              </Text>

              <StyledApplyPayContainer>
                {applyPayOptions.map((option) => (
                  <StyledApplyPayOption
                    key={option.id}
                    onClick={() => setSelectedOption(option)}
                  >
                    <StyledInputRadio
                      id={option.id}
                      type="radio"
                      checked={
                        selectedOption && selectedOption.id === option.id
                      }
                      readOnly
                    />
                    <Text type="label" size="large">
                      {option.label}
                    </Text>
                  </StyledApplyPayOption>
                ))}
              </StyledApplyPayContainer>

              <Stack width="100%" justifyContent="flex-end" gap="s100">
                <Button
                  appearance="gray"
                  variant="outlined"
                  spacing="compact"
                  onClick={onCloseModal}
                >
                  Cancelar
                </Button>
                <Button spacing="compact" onClick={handleApplyPayOption}>
                  Aceptar
                </Button>
              </Stack>
            </Stack>
          </>
        )}
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { CustomValueModal };
export type { IApplyPayOption };