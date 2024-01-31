const movementsTableTitles = [
  {
    id: "date",
    titleName: "Fecha",
    priority: 0,
  },
  {
    id: "reference",
    titleName: "Referencia",
    priority: 2,
  },
  {
    id: "description",
    titleName: "Descripción",
    priority: 1,
  },
];
const amortizationTableTitles = [
  {
    id: "paymentNumber",
    titleName: "N°",
    priority: 0,
  },
  {
    id: "date",
    titleName: "Fecha",
    priority: 1,
  },
  {
    id: "type",
    titleName: "Tipo",
    priority: 2,
  },
  {
    id: "capitalPayment",
    titleName: "Abono",
    priority: 3,
  },
  {
    id: "interest",
    titleName: "Interés",
    priority: 4,
  },
  {
    id: "others",
    titleName: "Otros",
    priority: 5,
  },
];

const amortizationTableBreakpoints = [
  { breakpoint: "(min-width: 1200px)", totalColumns: 6 },
  { breakpoint: "(max-width: 1130px)", totalColumns: 5 },
  { breakpoint: "(max-width: 970px)", totalColumns: 4 },
  { breakpoint: "(max-width: 900px)", totalColumns: 6 },
  { breakpoint: "(max-width: 850px)", totalColumns: 5 },
  { breakpoint: "(max-width: 750px)", totalColumns: 4 },
  { breakpoint: "(max-width: 650px)", totalColumns: 3 },
  { breakpoint: "(max-width: 430px)", totalColumns: 2 },
];

const movementsTableBreakpoints = [
  { breakpoint: "(min-width: 1229px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1070px)", totalColumns: 2 },
  { breakpoint: "(max-width: 920px)", totalColumns: 1 },
  { breakpoint: "(max-width: 895px)", totalColumns: 3 },
  { breakpoint: "(max-width: 820px)", totalColumns: 2 },
  { breakpoint: "(max-width: 670px)", totalColumns: 1 },
];

export {
  amortizationTableBreakpoints,
  amortizationTableTitles,
  movementsTableBreakpoints,
  movementsTableTitles,
};
