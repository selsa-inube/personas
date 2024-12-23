import { savingAccountTypeDM } from "src/model/domains/savings/savingAccountTypeDM";
import { savingGmfTypeDM } from "src/model/domains/savings/savingGmfTypeDM";
import { savingInterestDM } from "src/model/domains/savings/savingInterestDM";
import { savingStatusDM } from "src/model/domains/savings/savingStatusDM";
import { EProductType, IAttribute } from "src/model/entity/product";
import { formatPrimaryDate } from "src/utils/dates";
import { capitalizeEachWord } from "src/utils/texts";

const getProductDetails = (
  productTypeCode: EProductType,
  productDescription: string,
  productNumber: string,
) => {
  const details: Record<string, { title: string; description: string }> = {
    [EProductType.PERMANENTSAVINGS]: {
      title: productDescription,
      description: `${productDescription} - ${productNumber}`,
    },
    [EProductType.CONTRIBUTIONS]: {
      title: productDescription,
      description: `${productDescription} - ${productNumber}`,
    },
    [EProductType.CDAT]: {
      title: productDescription.replace(/\bCdat\b/g, "CDAT"),
      description: `CDAT - ${productNumber}`,
    },
    [EProductType.VIEWSAVINGS]: {
      title: productDescription,
      description: `${productDescription} - ${productNumber}`,
    },
    [EProductType.PROGRAMMEDSAVINGS]: {
      title: productDescription,
      description: `${productDescription} - ${productNumber}`,
    },
  };
  return details[productTypeCode] || {};
};

const getProductAttributes = (
  productTypeCode: EProductType,
  saving: Record<string, string | number | object>,
): IAttribute[] => {
  const beneficiaries = Array.isArray(saving.clientBeneficiaryContributions)
    ? saving.clientBeneficiaryContributions.map((beneficiary) => ({
        id: beneficiary.beneficiaryPublicCode,
        label: capitalizeEachWord(beneficiary.beneficiaryName),
        value: beneficiary.assignedSavingsContributionPercentage + " %",
      }))
    : [];

  const creditMovementPesos =
    Array.isArray(saving.accumulatedSavingProducts) &&
    saving.accumulatedSavingProducts.length > 0
      ? Object(saving.accumulatedSavingProducts[0]).creditMovementPesos
      : 0;

  const dateWithoutZone = String(saving.creationDate).replace("Z", "");

  const attributes: Record<string, IAttribute[]> = {
    [EProductType.PERMANENTSAVINGS]: [
      {
        id: "net_value",
        label: "Saldo total",
        value: Number(saving.balanceSavings),
      },
      {
        id: "beneficiaries",
        label: "Beneficiarios",
        value: beneficiaries,
      },
    ],
    [EProductType.CONTRIBUTIONS]: [
      {
        id: "net_value",
        label: "Saldo total",
        value: Number(saving.balanceSavings),
      },
      {
        id: "beneficiaries",
        label: "Beneficiarios",
        value: beneficiaries,
      },
    ],

    [EProductType.CDAT]: [
      {
        id: "title",
        label: "Titulo",
        value: String(saving.productNumber),
      },
      {
        id: "net_value",
        label: "Valor",
        value: Number(saving.balanceSavings),
      },
      {
        id: "expiration_date",
        label: "Fecha de vencimiento",
        value: formatPrimaryDate(new Date(String(saving.expirationDate))),
      },

      {
        id: "interest_rate",
        label: "Tasa de interés",
        value: `${saving.annualEffectiveRate} % EA`,
      },
      {
        id: "deadline",
        label: "Plazo",
        value: `${saving.savingsTerm} Meses`,
      },
      {
        id: "payment_interest",
        label: "Pago de intereses",
        value:
          savingInterestDM.valueOf(
            Object(saving.performancePaymentOpportunity).code,
          )?.value || "",
      },
      {
        id: "request_date",
        label: "Fecha de apertura",
        value: formatPrimaryDate(new Date(dateWithoutZone)),
      },
    ],
    [EProductType.VIEWSAVINGS]: [
      {
        id: "net_value",
        label: "Saldo total",
        value: Number(saving.balanceSavings || 0),
      },
      {
        id: "min_value",
        label: "Saldo mínimo",
        value: Number(saving.minimumSavingsBalanceView || 0),
      },
      {
        id: "account_state",
        label: "Estado",
        value:
          savingStatusDM.valueOf(Object(saving.savingsStatus).code)?.value ||
          "",
      },
      {
        id: "request_date",
        label: "Fecha de apertura",
        value: formatPrimaryDate(new Date(String(saving.creationDate))),
      },
      ...(saving.engravedWithGmf
        ? [
            {
              id: "account_gmf",
              label: "GMF",
              value:
                savingGmfTypeDM.valueOf(Object(saving.engravedWithGmf).code)
                  ?.value || "",
            },
          ]
        : []),
    ],
    [EProductType.PROGRAMMEDSAVINGS]: [
      {
        id: "net_value",
        label: "Saldo total",
        value: Number(creditMovementPesos),
      },
      ...(saving.annualEffectiveRate
        ? [
            {
              id: "interest_rate",
              label: "Tasa de interés",
              value: `${saving.annualEffectiveRate} % EA`,
            },
          ]
        : []),
      ...(saving.expirationDate
        ? [
            {
              id: "expiration_date",
              label: "Fecha de vencimiento",
              value: formatPrimaryDate(new Date(String(saving.expirationDate))),
            },
          ]
        : []),
      {
        id: "request_date",
        label: "Fecha de apertura",
        value: formatPrimaryDate(new Date(String(saving.creationDate))),
      },
      ...(saving.reimbursementEntity
        ? [
            {
              id: "bank_entity",
              label: "Cuenta",
              value: String(saving.reimbursementEntity),
            },
          ]
        : []),
      ...(saving.reimbursementAccountNumber
        ? [
            {
              id: "account_number",
              label: "Número de cuenta",
              value: Number(saving.reimbursementAccountNumber),
            },
          ]
        : []),
      ...(saving.typeOfReimbursementAccount &&
      Object.keys(saving.typeOfReimbursementAccount).length !== 0
        ? [
            {
              id: "account_type",
              label: "Tipo de cuenta",
              value:
                savingAccountTypeDM.valueOf(
                  Object(saving.typeOfReimbursementAccount).code,
                )?.value || "",
            },
          ]
        : []),
    ],
  };

  return attributes[productTypeCode] || {};
};

export { getProductAttributes, getProductDetails };
