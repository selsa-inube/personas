import { Icon } from "@design/data/Icon";
import { Text } from "@design/data/Text";
import { StyledContainer, StyledIcon } from "./styles";

interface ButtonAttributeProps {
  onClick?: () => void;
  icon?: React.JSX.Element;
  value?: string | number;
}

function ButtonAttribute(props: ButtonAttributeProps) {
  const { onClick, icon, value } = props;
  return (
    <StyledContainer onClick={onClick}>
      {icon && (
        <StyledIcon>
          <Icon icon={icon} appearance="primary" size="16px" spacing="none" />
        </StyledIcon>
      )}

      <Text type="body" size="small" appearance="dark">
        {value}
      </Text>
    </StyledContainer>
  );
}

export { ButtonAttribute };
