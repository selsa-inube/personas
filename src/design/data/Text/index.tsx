import { StyledText } from "./styles";
import { TextAppearanceType } from "../../../types/color.types";
import { AsTagsType, TextAlignType } from "../../../types/design.types";
import {
  TypographyType,
  TypographySizeType,
} from "../../../types/typography.types";

interface TextProps {
  children: React.ReactNode;
  as?: AsTagsType;
  margin?: string;
  padding?: string;
  appearance?: TextAppearanceType;
  type?: TypographyType;
  size?: TypographySizeType;
  textAlign?: TextAlignType;
  cursorHover?: boolean;
  parentHover?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
}

function Text(props: TextProps) {
  const {
    children,
    as = "p",
    margin = "0px",
    padding = "0px",
    appearance = "dark",
    type = "body",
    size = "large",
    textAlign = "start",
    cursorHover = false,
    parentHover = false,
    disabled = false,
    ellipsis = false,
  } = props;
  return (
    <StyledText
      as={as}
      margin={margin}
      padding={padding}
      appearance={appearance}
      type={type}
      size={size}
      textAlign={textAlign}
      cursorHover={cursorHover}
      parentHover={parentHover}
      disabled={disabled}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
}

export type { TextProps };
export { Text };
