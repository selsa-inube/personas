import { Text } from "@design/data/Text";
import { Icon } from "@design/data/Icon";
import { MdOpenInNew } from "react-icons/md";
import { currencyFormat } from "src/utils/currency";
import { StyledTotalPayment, StyledTagValue } from "./styles";

interface TotalizerProps {
  isMobile: boolean;
  isExpandable?: boolean;
  isDisabled?: boolean;
  value: number;
  onClick?: () => void;
}

function Totalizer(props: TotalizerProps) {
  const {
    isMobile,
    isExpandable = false,
    isDisabled = false,
    value,
    onClick,
  } = props;

  return (
    <StyledTotalPayment isMobile={isMobile}>
      <Text type="title" size="medium">
        Total a pagar hoy:
      </Text>
      <StyledTagValue isExpandable={isExpandable}>
        {isExpandable && (
          <Icon
            icon={<MdOpenInNew />}
            appearance="primary"
            size="16px"
            spacing="none"
            cursorHover
            disabled={isDisabled}
            onClick={onClick}
          />
        )}
        <Text type="title" size="medium" appearance="gray">
          {currencyFormat(value)}
        </Text>
      </StyledTagValue>
    </StyledTotalPayment>
  );
}

export { Totalizer };
