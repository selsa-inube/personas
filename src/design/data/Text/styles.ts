import styled from "styled-components";
import { inube } from "../../tokens";
import { TextAppearanceType } from "../../../types/color.types";
import { TextAlignType } from "../../../types/design.types";
import { SpacingTokensType } from "../../../types/spacing.types";
import {
  TypographyType,
  TypographySizeType,
} from "../../../types/typography.types";

interface IStyledText {
  margin?: SpacingTokensType | string;
  padding: SpacingTokensType | string;
  appearance: TextAppearanceType;
  type: TypographyType;
  size: TypographySizeType;
  textAlign: TextAlignType;
  cursorHover: boolean;
  parentHover: boolean;
  disabled: boolean;
  ellipsis: boolean;
}

const StyledText = styled.p<IStyledText>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};

  color: ${({ appearance, theme, parentHover, disabled }) => {
    if (disabled) {
      return (
        theme.color?.text?.[appearance]?.disabled ||
        inube.color.text[appearance].disabled
      );
    }

    if (!parentHover) {
      return (
        theme.color?.text?.[appearance]?.regular ||
        inube.color.text[appearance].regular
      );
    }
    return (
      theme.color?.text?.[appearance]?.hover ||
      inube.color.text[appearance].hover
    );
  }};

  font-family: ${({ type, size, theme }) =>
    theme.typography?.[type]?.[size]?.font ||
    inube.typography[type][size].font};

  font-size: ${({ type, size, theme }) =>
    theme.typography?.[type]?.[size]?.size ||
    inube.typography[type][size].size};

  font-weight: ${({ type, size, theme }) =>
    theme.typography?.[type]?.[size]?.weight ||
    inube.typography[type][size].weight};

  letter-spacing: ${({ type, size, theme }) =>
    theme.typography?.[type]?.[size]?.tracking ||
    inube.typography[type][size].tracking};

  line-height: ${({ type, size, theme }) =>
    theme.typography?.[type]?.[size]?.lineHeight ||
    inube.typography[type][size].lineHeight};

  overflow: ${({ ellipsis }) => ellipsis && "hidden"};
  white-space: ${({ ellipsis }) => ellipsis && "nowrap"};
  text-overflow: ${({ ellipsis }) => ellipsis && "ellipsis"};

  &:hover {
    cursor: ${({ cursorHover, disabled }) => {
      if (!disabled) {
        if (cursorHover) {
          return "pointer";
        }
        return "normal";
      }
    }};

    color: ${({ theme, appearance, cursorHover, disabled }) => {
      if (!disabled) {
        if (cursorHover) {
          return (
            theme.color?.text?.[appearance]?.hover ||
            inube.color.text[appearance].hover
          );
        }
      }
    }};
  }
`;

export { StyledText };
