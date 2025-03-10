import { inube } from "@design/tokens";
import { Icon, Stack, Text } from "@inubekit/inubekit";
import { StyledCardContainer, StyledInputRadio } from "./styles";
import { RadioCardAppearanceType, RadioCardSizeType } from "./types";

interface RadioCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  secondDescription?: string;
  size?: RadioCardSizeType;
  appearance?: RadioCardAppearanceType;
  checked: boolean;
  icon?: React.JSX.Element;
  onClick: () => void;
}

function RadioCard(props: RadioCardProps) {
  const {
    id,
    name,
    title,
    description,
    secondDescription,
    size = "wide",
    appearance = "light",
    checked,
    icon,
    onClick,
  } = props;

  return (
    <StyledCardContainer
      $size={size}
      $appearance={appearance}
      onClick={onClick}
    >
      <StyledInputRadio
        id={id}
        name={name}
        type="radio"
        value={id}
        checked={checked}
        readOnly
      />
      <Stack
        direction="column"
        gap={size === "compact" ? inube.spacing.s0 : inube.spacing.s075}
        width="100%"
      >
        <Stack alignItems="center" justifyContent="space-between">
          <Text type="label" size={size === "compact" ? "small" : "medium"}>
            {title}
          </Text>
          {icon && (
            <Icon
              icon={icon}
              appearance="primary"
              spacing="narrow"
              size="16px"
            />
          )}
        </Stack>
        <Text type="body" size="small" appearance="gray">
          {description}
        </Text>
        {secondDescription && (
          <Text type="body" size="small" appearance="gray">
            {secondDescription}
          </Text>
        )}
      </Stack>
    </StyledCardContainer>
  );
}

export { RadioCard };
export type { RadioCardProps };
