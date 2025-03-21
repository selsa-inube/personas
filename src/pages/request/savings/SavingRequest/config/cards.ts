const savingRequestCards = [
  {
    id: "savingsAccount",
    type: "account",
    title: "Cuenta de ahorros",
    descriptions: [
      "Solicita tu cuenta de ahorros para administrar tu dinero de manera fácil y segura.",
    ],
    navigateTo: "/",
  },
  {
    id: "CDAT",
    type: "cdat",
    title: "CDAT",
    descriptions: [
      "Deposita tus ahorros y recibe el capital e intereses en el plazo que tú decidas.",
    ],
    navigateTo: "cdat",
  },
  {
    id: "programmedSavings",
    type: "programmedSaving",
    title: "Ahorro programado a término fijo",
    descriptions: [
      "Deposita dinero periódicamente y recibe tu ahorro más intereses al finalizar el tiempo de ahorro acordado.",
    ],
    navigateTo: "programmed-saving",
  },
];

export { savingRequestCards };
