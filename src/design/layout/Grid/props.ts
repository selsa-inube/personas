import {
  gridJustifyItems,
  gridAlignItems,
  gridJustifyContent,
  gridAlignContent,
  gridAutoFlow,
} from "./types";

const props = {
  children: {
    description: "Contains the items of the grid.",
  },
  templateColumns: {
    description: "Controls the grid-template-columns CSS property",
  },
  templateRows: {
    description: "Controls the grid-template-rows CSS property.",
  },
  gap: {
    description: "Controls both the column and row gap of the grid.",
  },
  justifyItems: {
    control: "select",
    options: gridJustifyItems,
    description: "Controls the justify-items CSS property",
  },
  alignItems: {
    control: "select",
    options: gridAlignItems,
    description: "Controls the align-items CSS property",
  },
  justifyContent: {
    control: "select",
    options: gridJustifyContent,
    description: "Controls the justify-content CSS property",
  },
  alignContent: {
    control: "select",
    options: gridAlignContent,
    description: "Controls the align-content CSS property",
  },
  autoColumns: {
    description: "Controls the grid-auto-columns CSS property",
  },
  autoRows: {
    description: "Controls the grid-auto-rows CSS property",
  },
  autoFlow: {
    control: "select",
    options: gridAutoFlow,
    description: "Controls the grid-auto-flow CSS property",
  },
  margin: {
    description: "Controls the margin of the grid",
  },
  padding: {
    description: "Controls the padding of the grid",
  },
  height: {
    description: "Controls the height of the grid",
  },
  width: {
    description: "Controls the width of the grid",
  },
};

export { props };
