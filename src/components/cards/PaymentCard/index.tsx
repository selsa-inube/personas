import {
  CustomValueModal,
  IApplyPayOption,
} from "@components/modals/payments/CustomValueModal";
import { Icon } from "@design/data/Icon";
import { Tag, TagProps } from "@design/data/Tag";
import { Text } from "@design/data/Text";
import { Button } from "@design/input/Button";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { EPaymentOptionType } from "@pages/admin/payments/Pay/types";
import { useState } from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { IPaymentOption } from "src/model/entity/payment";
import { currencyFormat } from "src/utils/currency";
import {
  StyledCardContainer,
  StyledInputContainer,
  StyledInputRadio,
} from "./styles";

const renderOptions = (
  options: IPaymentOption[],
  isMobile: boolean,
  onChangeOption: (option: IPaymentOption) => void,
  selectedOption?: IPaymentOption,
) => {
  return options.map((option, index) => {
    if (option.hidden) return null;

    const valueIsZero = option.value === 0;

    return (
      <StyledInputContainer
        key={index}
        onClick={() => !valueIsZero && onChangeOption(option)}
        disabled={valueIsZero}
      >
        <Stack gap="s150">
          <StyledInputRadio
            id={option.id}
            type="radio"
            checked={
              (selectedOption && option.id === selectedOption.id) || false
            }
            readOnly
            value={option.id}
            disabled={valueIsZero}
          />
          <Stack direction="column" gap="s0">
            <Text type="label" size="medium" disabled={valueIsZero}>
              {option.label}:
            </Text>
            {option.description && (
              <Text
                type="body"
                size="small"
                appearance="gray"
                disabled={valueIsZero}
              >
                {option.description}
              </Text>
            )}
          </Stack>
        </Stack>

        <Text type="body" size="small" appearance="gray" disabled={valueIsZero}>
          {currencyFormat(option.value)}
        </Text>
      </StyledInputContainer>
    );
  });
};

interface PaymentCardProps {
  id: string;
  title: string;
  options: IPaymentOption[];
  tags: TagProps[];
  allowCustomValue?: boolean;
  selectedOption?: IPaymentOption;
  onApplyPayOption: (
    payId: string,
    option: IPaymentOption,
    applyPayOption?: IApplyPayOption,
  ) => void;
  onChangePaymentValue: (payId: string, option: IPaymentOption) => void;
  onRemovePayment: (paymentId: string) => void;
}

function PaymentCard(props: PaymentCardProps) {
  const {
    id,
    title,
    options,
    tags,
    allowCustomValue,
    selectedOption,
    onChangePaymentValue,
    onApplyPayOption,
    onRemovePayment,
  } = props;

  const [showModal, setShowModal] = useState(false);

  const isTablet = useMediaQuery("(max-width: 1100px)");
  const isMobile = useMediaQuery("(max-width: 750px)");

  const handleChangeOption = (option: IPaymentOption) => {
    onChangePaymentValue(id, option);

    if (tags.find((tag) => tag.id === "payOption")) {
      const indexPayOption = tags.findIndex((tag) => tag.id === "payOption");
      tags.splice(indexPayOption, 1);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const resetValues = () => {
    onRemovePayment(id);

    if (tags.find((tag) => tag.id === "payOption")) {
      const indexPayOption = tags.findIndex((tag) => tag.id === "payOption");
      tags.splice(indexPayOption, 1);
    }
  };

  const handleApplyPayOption = (
    applyPayOption: IApplyPayOption,
    value: number,
  ) => {
    const customOption = {
      id: EPaymentOptionType.OTHERVALUE,
      label: `Otro valor / ${applyPayOption.label}`,
      value,
    };

    onApplyPayOption(id, customOption, applyPayOption);

    if (tags.find((tag) => tag.id === "payOption")) {
      const indexPayOption = tags.findIndex((tag) => tag.id === "payOption");
      tags.splice(indexPayOption, 1);
    }

    tags.push({
      id: "payOption",
      label: applyPayOption.label,
      appearance: "dark",
      modifier: "clear",
      textAppearance: "dark",
    });
  };

  const hastOtherValue = options.find(
    (option) => option.id === EPaymentOptionType.OTHERVALUE,
  );

  return (
    <>
      <StyledCardContainer isMobile={isMobile} isTablet={isTablet}>
        <Stack direction="column" gap="s100">
          <Stack justifyContent="space-between">
            <Stack width="60%">
              <Text type="label" size="large" ellipsis>
                {title}
              </Text>
            </Stack>

            <Text type="body" size="medium" appearance="gray">
              {id}
            </Text>
          </Stack>
          <Stack gap="s100" wrap="wrap">
            {tags.length > 0 &&
              tags.map((tag) => <Tag {...tag} key={tag.label} />)}
          </Stack>
        </Stack>

        <Stack direction="column" gap="s100">
          {renderOptions(options, isMobile, handleChangeOption, selectedOption)}
        </Stack>

        <Stack width="100%" alignItems="center" justifyContent="space-between">
          <Button
            onClick={resetValues}
            variant="outlined"
            disabled={(selectedOption?.value || 0) === 0}
            appearance="error"
            spacing="compact"
            iconBefore={<MdOutlineDelete />}
          >
            Eliminar
          </Button>

          <Stack gap="s100" alignItems="center">
            {allowCustomValue && hastOtherValue && (
              <Icon
                icon={<MdOutlineEdit />}
                appearance="primary"
                size="16px"
                onClick={handleToggleModal}
                cursorHover
              />
            )}

            <Text type="title" size="medium">
              {currencyFormat(selectedOption?.value || 0)}
            </Text>
          </Stack>
        </Stack>
      </StyledCardContainer>

      {showModal && (
        <CustomValueModal
          portalId="modals"
          value={selectedOption?.value || 0}
          nextPaymentValue={
            options.find((option) => option.id === EPaymentOptionType.NEXTVALUE)
              ?.value || 0
          }
          totalPaymentValue={
            options.find(
              (option) => option.id === EPaymentOptionType.TOTALVALUE,
            )?.value || 0
          }
          onCloseModal={handleToggleModal}
          onApplyPayOption={handleApplyPayOption}
          onChangeOtherValue={handleChangeOption}
        />
      )}
    </>
  );
}

export { PaymentCard };
export type { PaymentCardProps };
