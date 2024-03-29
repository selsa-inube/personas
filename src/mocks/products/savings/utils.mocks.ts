const estateTypeValuesMock: Record<string, string> = {
  Active: "Activo",
  Inactive: "Inactivo",
  Cancelled: "Cancelado",
};

const gmfTypeValuesMock: Record<string, string> = {
  AllTransactionsAreTaxed: "Todas las transacciones",
  TotallyExcempt: "Totalmente exento",
  ExcemptUntilMaximum: "Exento hasta el máximo",
  ExcemptUntilMaximumOnPensionAllowance: "Exento hasta el máximo de pensión",
};

export { estateTypeValuesMock, gmfTypeValuesMock };
