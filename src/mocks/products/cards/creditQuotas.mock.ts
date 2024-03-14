import { ICreditQuota } from "src/model/entity/product";

const creditQuotasMock: ICreditQuota[] = [
  {
    id: "590030780132",
    title: "Crediexpress",
    description: "Crediexpress 590030780132",
    attributes: [
      {
        id: "available_space",
        label: "Cupo disponible",
        value: 5800000,
      },
      {
        id: "total_dedt",
        label: "Deuda total",
        value: 2750420,
      },
      {
        id: "next_payment_date",
        label: "Fecha próximo pago",
        value: "29/Feb/2024",
      },
      {
        id: "next_payment_value",
        label: "Valor próximo pago",
        value: 250000,
      },
      {
        id: "type",
        label: "tipo",
        value: "Crédito por consumo",
      },
      {
        id: "assigned_quota",
        label: "Cupo asignado",
        value: 8550420,
      },
    ],
    quotaDetails: [
      {
        id: "credit-quota-1",
        title: "Crediexpress",
        description: "Informe de movimientos",
        assignedQuota: 275000,
        fullPayment: 2775000,
        nextPaymentDate: new Date("15/Mar/2024"),
        quotaAvailable: 5800000,
        minPaymentDetails: {
          capitalPayment: 100000,
          currentInterest: 1500000,
          arrearsInterest: 25000,
          totalValue: 275000,
        },
        totalPaymentDetails: {
          capitalPayment: 240000,
          currentInterest: 1500000,
          arrearsInterest: 25000,
          totalValue: 2775000,
        },

        currentConsumption: [
          {
            id: "current-consumption-1",
            title: "Compra RESTAURANTE YANUBA",
            description: "Informe de consumos",
            consumptionDate: new Date("21/Feb/2024"),
            consumptionValue: 250000,
            duesPaid: 1,
            duesEarring: 23,
            balanceCapital: 52000,
            currenInterest: "% 2.51 MV",
            minPaymentQuotAvailable: 50000,
            totalPaymentQuotaAvailable: 50000,
            capitalPayment: "cuota 1/24",
            minCapitalPayment: 25000,
            totalCapitalPayment: 80000,
            arrearsInterest: 0,
            movements: [
              {
                id: "movementConsumption-1",
                date: new Date("15/Mar/2024"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
            ],
          },
          {
            id: "current-consumption-2",
            title: "Compra CLONES Y PERISFERICOS SAS",
            description: "Informe de consumos",
            consumptionDate: new Date("11/Feb/2024"),
            consumptionValue: 250000,
            duesPaid: 1,
            duesEarring: 23,
            balanceCapital: 52000,
            currenInterest: "% 2.51 MV",
            minPaymentQuotAvailable: 50000,
            totalPaymentQuotaAvailable: 50000,
            capitalPayment: "cuota 1/24",
            minCapitalPayment: 25000,
            totalCapitalPayment: 80000,
            arrearsInterest: 0,
            movements: [
              {
                id: "movementConsumption-1",
                date: new Date("15/Mar/2024"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
            ],
          },
          {
            id: "current-consumption-3",
            title: "Compra PEPE GANGA",
            description: "Informe de consumos",
            consumptionDate: new Date("24/Dic/2023"),
            consumptionValue: 250000,
            duesPaid: 9,
            duesEarring: 15,
            balanceCapital: 52000,
            currenInterest: "% 2.51 MV",
            minPaymentQuotAvailable: 50000,
            totalPaymentQuotaAvailable: 50000,
            capitalPayment: "cuota 9/24",
            minCapitalPayment: 50000,
            totalCapitalPayment: 80000,
            arrearsInterest: 0,
            movements: [
              {
                id: "movementConsumption-1",
                date: new Date("15/Ene/2024"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
              {
                id: "movementConsumption-2",
                date: new Date("15/Dic/2023"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
              {
                id: "movementConsumption-3",
                date: new Date("15/Nov/2023"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
              {
                id: "movementConsumption-4",
                date: new Date("15/Oct/2023"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
              {
                id: "movementConsumption-5",
                date: new Date("15/Sep/2023"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 22000,
              },
            ],
          },
        ],
      },
    ],
    movements: [
      {
        id: "movement-1",
        description: "compra GERÓNIMO MARTINS SAS",
        totalValue: 500000,
        date: new Date("10/May/2024 11:20 am"),
        quotas: "a 12 meses",
      },
      {
        id: "movement-2",
        description: "Pago mensual CREDIEXPRESS",
        totalValue: -856321,
        date: new Date("21/Feb/2024 08:15 am"),
        quotas: "",
      },
      {
        id: "movement-3",
        description: "Compra RESTAURANTE YANUBA",
        totalValue: 240000,
        date: new Date("19/Feb/2024 01:55 am"),
        quotas: "a 12 meses",
      },
      {
        id: "movement-4",
        description: "Reverso compra CLONES Y PERISFERICOS SAS",
        totalValue: -8500000,
        date: new Date("19/Feb/2024 01:55 am"),
        quotas: "a 12 meses",
      },
      {
        id: "movement-5",
        description: "Compra CLONES Y PERISFERICOS SAS",
        totalValue: 8500000,
        date: new Date("19/Feb/2024 01:55 am"),
        quotas: "a 12 meses",
      },
    ],
  },
  {
    id: "590030780133",
    title: "Crédito de vehiculo",
    description: "Crédito de vehiculo 590030780133",
    attributes: [
      {
        id: "available_space",
        label: "Cupo disponible",
        value: 0,
      },
      {
        id: "total_dedt",
        label: "Deuda total",
        value: 60000000,
      },
      {
        id: "next_payment_date",
        label: "Fecha próximo pago",
        value: "inmediato",
      },
      {
        id: "next_payment_value",
        label: "Valor próximo pago",
        value: 1909000,
      },
      {
        id: "type",
        label: "tipo",
        value: "Crédito por consumo",
      },
      {
        id: "assigned_quota",
        label: "Cupo asignado",
        value: 60000000,
      },
    ],
    quotaDetails: [
      {
        id: "credit-quota-2",
        title: "Crédito de vehiculo",
        description: "Informe de movimientos",
        assignedQuota: 1909000,
        fullPayment: 60000000,
        nextPaymentDate: "Inmediato",
        quotaAvailable: 0,
        minPaymentDetails: {
          capitalPayment: 752122,
          currentInterest: 1157380,
          arrearsInterest: 10103,
          totalValue: 1909000,
        },
        totalPaymentDetails: {
          capitalPayment: 766864,
          currentInterest: 1157380,
          arrearsInterest: 10103,
          totalValue: 60000000,
        },

        currentConsumption: [
          {
            id: "current-consumption-1",
            title:
              "compra DISTRIBUIDORA MAYORISTA DE AUTOMÓVILES MADIAUTOS SAS",
            description: "Informe de consumos",
            consumptionDate: new Date("20/Dic/2023"),
            consumptionValue: 60000000,
            duesPaid: 1,
            duesEarring: 47,
            balanceCapital: 752122,
            currenInterest: "% 1.96 MV",
            minPaymentQuotAvailable: 1157380,
            totalPaymentQuotaAvailable: 1157380,
            capitalPayment: "cuota 1/47",
            minCapitalPayment: 752122,
            totalCapitalPayment: 766864,
            arrearsInterest: 10103,
            movements: [
              {
                id: "movementConsumption-1",
                date: new Date("20/Ene/2024"),
                reference: "CT1001210",
                description: "Pago periódico",
                totalValue: 19009000,
              },
            ],
          },
        ],
      },
    ],
    movements: [
      {
        id: "movement-1",
        description: "Compra de vehiculo",
        totalValue: 6000000,
        date: new Date("20/Dic/2023"),
        quotas: "a 48 meses",
      },
    ],
    tags: [
      {
        label: "En mora",
        appearance: "error",
      },
    ],
  },
];

export { creditQuotasMock };
