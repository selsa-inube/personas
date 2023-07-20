import PropTypes from "prop-types";

import { StyledGrid } from "./styles";

import {
  alignContent,
  alignItems,
  autoFlow,
  justifyContent,
  justifyItems,
} from "./props";

function Grid(props) {
  const {
    children,
    templateColumns,
    templateRows,
    gap = "0px",
    justifyItems = "stretch",
    alignItems = "stretch",
    justifyContent = "start",
    alignContent = "start",
    autoColumns = "auto",
    autoRows,
    autoFlow = "row",
    margin = "0px",
    padding = "0px",
    height = "auto",
    width = "auto",
  } = props;

  return (
    <StyledGrid
      templateColumns={templateColumns}
      templateRows={templateRows}
      gap={gap}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      autoColumns={autoColumns}
      autoRows={autoRows}
      autoFlow={autoFlow}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
    >
      {children}
    </StyledGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  gap: PropTypes.string,
  justifyItems: PropTypes.oneOf(justifyItems),
  alignItems: PropTypes.oneOf(alignItems),
  justifyContent: PropTypes.oneOf(justifyContent),
  alignContent: PropTypes.oneOf(alignContent),
  autoColumns: PropTypes.string,
  autoRows: PropTypes.string,
  autoFlow: PropTypes.oneOf(autoFlow),
  margin: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export { Grid };
