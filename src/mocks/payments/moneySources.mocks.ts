import { IMoneySource } from "@pages/admin/payments/Pay/forms/PaymentMethodForm/types";

const moneySourcesMock: IMoneySource = {
  "013001157292": {
    id: "013001157292",
    label: "Cuenta familiar - 013001157292",
    value: 0,
    balance: 50000,
    type: "savingAccount",
  },
  "013001162025": {
    id: "013001162025",
    label: "Cuenta de ahorros  - 013001162025",
    value: 0,
    balance: 900000,
    type: "savingAccount",
  },
};
export { moneySourcesMock };
