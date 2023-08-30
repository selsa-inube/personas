import { IProduct } from "src/types/pages/product.types";

const creditsMock: IProduct[] = [
  {
    id: "CE995433",
    title: "Crédito educativo",
    attributes: [
      { id: "next_payment_value", label: "Próximo pago", value: 500000 },
      { id: "next_payment_date", label: "Próxima fecha", value: "02/Abr/2023" },
      { id: "net_value", label: "Saldo total", value: 7025550 },
      { id: "interest_rate", label: "Tasa de interés", value: "15.70 % NAMV" },
      { id: "terms", label: "Plazo:", value: "24 Meses" },
      { id: "loan_date", label: "Fecha de préstamo", value: "15/Nov/2022" },
      { id: "loan_value", label: "Valor del préstamo", value: 10300000 },
      {
        id: "next_due_date",
        label: "Próximo vencimiento",
        value: "15/May/2023",
      },
      { id: "quote", label: "Cuota", value: "6 de 12" },
      { id: "peridiocity", label: "Periodicidad", value: "Mensual" },
      {
        id: "payment_means",
        label: "Medio de pago",
        value: "Grúas de occidente",
      },
    ],
    movements: [
      {
        id: "movement-1",
        date: "15/Ago/2023",
        reference: "DN1001210",
        description: "Pago crédito educativo",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499192,
      },
      {
        id: "movement-2",
        date: "15/Sep/2023",
        reference: "DN1001211",
        description: "Abono extraordinario",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-3",
        date: "15/Oct/2023",
        reference: "DN1001212",
        description: "Pago crédito educativo",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-4",
        date: "15/Nov/2023",
        reference: "DN1001213",
        description: "Abono extraordinario",
        capitalPayment: 289386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-5",
        date: "15/Dic/2023",
        reference: "DN1001214",
        description: "Pago crédito educativo",
        capitalPayment: 294386,
        interest: 189875,
        lifeInsurance: 5885,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-6",
        date: "15/Ene/2024",
        reference: "DN1001215",
        description: "Abono extraordinario",
        capitalPayment: 302386,
        interest: 181875,
        lifeInsurance: 5624,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-7",
        date: "15/Feb/2024",
        reference: "DN1001216",
        description: "Pago crédito educativo",
        capitalPayment: 310386,
        interest: 173875,
        lifeInsurance: 5364,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-8",
        date: "15/Mar/2024",
        reference: "DN1001217",
        description: "Abono extraordinario",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5105,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-9",
        date: "15/Abr/2024",
        reference: "DN1001218",
        description: "Pago crédito educativo",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4847,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-10",
        date: "15/May/2024",
        reference: "DN1001219",
        description: "Abono extraordinario",
        capitalPayment: 334386,
        interest: 149875,
        lifeInsurance: 4590,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-11",
        date: "15/Jun/2024",
        reference: "DN1001220",
        description: "Pago crédito educativo",
        capitalPayment: 342386,
        interest: 141875,
        lifeInsurance: 4334,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499192,
      },
      {
        id: "movement-12",
        date: "15/Jul/2024",
        reference: "DN1001221",
        description: "Abono extraordinario",
        capitalPayment: 350386,
        interest: 133875,
        lifeInsurance: 4079,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-13",
        date: "15/Ago/2024",
        reference: "DN1001222",
        description: "Pago crédito educativo",
        capitalPayment: 358386,
        interest: 125875,
        lifeInsurance: 3825,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-14",
        date: "15/Sep/2024",
        reference: "DN1001223",
        description: "Abono extraordinario",
        capitalPayment: 366386,
        interest: 117875,
        lifeInsurance: 3572,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-15",
        date: "15/Oct/2024",
        reference: "DN1001224",
        description: "Pago crédito educativo",
        capitalPayment: 374386,
        interest: 109875,
        lifeInsurance: 3320,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-16",
        date: "15/Nov/2024",
        reference: "DN1001225",
        description: "Abono extraordinario",
        capitalPayment: 382386,
        interest: 101875,
        lifeInsurance: 3069,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-17",
        date: "15/Dic/2024",
        reference: "DN1001226",
        description: "Pago crédito educativo",
        capitalPayment: 390386,
        interest: 93875,
        lifeInsurance: 2820,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-18",
        date: "15/Ene/2025",
        reference: "DN1001227",
        description: "Abono extraordinario",
        capitalPayment: 398386,
        interest: 85875,
        lifeInsurance: 2571,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-19",
        date: "15/Feb/2025",
        reference: "DN1001228",
        description: "Pago crédito educativo",
        capitalPayment: 406386,
        interest: 77875,
        lifeInsurance: 2324,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-20",
        date: "15/Mar/2025",
        reference: "DN1001229",
        description: "Abono extraordinario",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 2078,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499192,
      },
      {
        id: "movement-21",
        date: "15/Abr/2025",
        reference: "DN1001230",
        description: "Pago crédito educativo",
        capitalPayment: 422386,
        interest: 61875,
        lifeInsurance: 1833,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-22",
        date: "15/May/2025",
        reference: "DN1001231",
        description: "Abono extraordinario",
        capitalPayment: 430386,
        interest: 53875,
        lifeInsurance: 1589,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-23",
        date: "15/Jun/2025",
        reference: "DN1001232",
        description: "Pago crédito educativo",
        capitalPayment: 438386,
        interest: 45875,
        lifeInsurance: 1346,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-24",
        date: "15/Jul/2025",
        reference: "DN1001233",
        description: "Abono extraordinario",
        capitalPayment: 446386,
        interest: 37875,
        lifeInsurance: 1104,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-25",
        date: "15/Ago/2025",
        reference: "DN1001234",
        description: "Pago crédito educativo",
        capitalPayment: 454386,
        interest: 29875,
        lifeInsurance: 863,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-26",
        date: "15/Sep/2025",
        reference: "DN1001235",
        description: "Abono extraordinario",
        capitalPayment: 462386,
        interest: 21875,
        lifeInsurance: 623,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-27",
        date: "15/Oct/2025",
        reference: "DN1001236",
        description: "Pago crédito educativo",
        capitalPayment: 470386,
        interest: 13875,
        lifeInsurance: 384,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-28",
        date: "15/Nov/2025",
        reference: "DN1001237",
        description: "Abono extraordinario",
        capitalPayment: 478386,
        interest: 5875,
        lifeInsurance: 146,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-29",
        date: "15/Dic/2025",
        reference: "DN1001238",
        description: "Pago crédito educativo",
        capitalPayment: 486386,
        interest: 1875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499111,
      },
      {
        id: "movement-30",
        date: "15/Ene/2026",
        reference: "DN1001239",
        description: "Abono extraordinario",
        capitalPayment: 494386,
        interest: 875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499112,
      },
    ],
    amortization: [
      {
        id: "1",
        paymentNumber: 1,
        date: "15/Ene/2023",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6931,
        totalMonthlyValue: 499112,
        projectedBalance: 7025551,
      },
      {
        id: "2",
        paymentNumber: 2,
        date: "15/Feb/2023",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6674,
        totalMonthlyValue: 499113,
        projectedBalance: 7025552,
      },
      {
        id: "3",
        paymentNumber: 3,
        date: "15/Mar/2023",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6410,
        totalMonthlyValue: 499114,
        projectedBalance: 7025553,
      },
      {
        id: "4",
        paymentNumber: 4,
        date: "15/Apr/2023",
        capitalPayment: 284386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6147,
        totalMonthlyValue: 499115,
        projectedBalance: 7025554,
      },
      {
        id: "5",
        paymentNumber: 5,
        date: "15/May/2023",
        capitalPayment: 289386,
        interest: 189875,
        lifeInsurance: 5890,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5890,
        totalMonthlyValue: 499116,
        projectedBalance: 7025555,
      },
      {
        id: "6",
        paymentNumber: 6,
        date: "15/Jun/2023",
        capitalPayment: 293386,
        interest: 181875,
        lifeInsurance: 5626,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5626,
        totalMonthlyValue: 499117,
        projectedBalance: 7025556,
      },
      {
        id: "7",
        paymentNumber: 7,
        date: "15/Jul/2023",
        capitalPayment: 298386,
        interest: 173875,
        lifeInsurance: 5363,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5363,
        totalMonthlyValue: 499118,
        projectedBalance: 7025557,
      },
      {
        id: "8",
        paymentNumber: 8,
        date: "15/Aug/2023",
        capitalPayment: 304386,
        interest: 165875,
        lifeInsurance: 5099,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5099,
        totalMonthlyValue: 499119,
        projectedBalance: 7025558,
      },
      {
        id: "9",
        paymentNumber: 9,
        date: "15/Sep/2023",
        capitalPayment: 310386,
        interest: 157875,
        lifeInsurance: 4836,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4836,
        totalMonthlyValue: 499120,
        projectedBalance: 7025559,
      },
      {
        id: "10",
        paymentNumber: 10,
        date: "15/Oct/2023",
        capitalPayment: 317386,
        interest: 149875,
        lifeInsurance: 4579,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4579,
        totalMonthlyValue: 499121,
        projectedBalance: 7025560,
      },
      {
        id: "11",
        paymentNumber: 11,
        date: "15/Nov/2023",
        capitalPayment: 324386,
        interest: 141875,
        lifeInsurance: 4315,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4315,
        totalMonthlyValue: 499122,
        projectedBalance: 7025561,
      },
      {
        id: "12",
        paymentNumber: 12,
        date: "15/Dec/2023",
        capitalPayment: 332386,
        interest: 133875,
        lifeInsurance: 4052,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4052,
        totalMonthlyValue: 499123,
        projectedBalance: 7025562,
      },
      {
        id: "13",
        paymentNumber: 13,
        date: "15/Jan/2024",
        capitalPayment: 340386,
        interest: 125875,
        lifeInsurance: 3788,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3788,
        totalMonthlyValue: 499124,
        projectedBalance: 7025563,
      },
      {
        id: "14",
        paymentNumber: 14,
        date: "15/Feb/2024",
        capitalPayment: 349386,
        interest: 117875,
        lifeInsurance: 3525,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3525,
        totalMonthlyValue: 499125,
        projectedBalance: 7025564,
      },
      {
        id: "15",
        paymentNumber: 15,
        date: "15/Mar/2024",
        capitalPayment: 358386,
        interest: 109875,
        lifeInsurance: 3261,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3261,
        totalMonthlyValue: 499126,
        projectedBalance: 7025565,
      },
      {
        id: "16",
        paymentNumber: 16,
        date: "15/Apr/2024",
        capitalPayment: 368386,
        interest: 101875,
        lifeInsurance: 2998,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2998,
        totalMonthlyValue: 499127,
        projectedBalance: 7025566,
      },
      {
        id: "17",
        paymentNumber: 17,
        date: "15/May/2024",
        capitalPayment: 378386,
        interest: 93875,
        lifeInsurance: 2734,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2734,
        totalMonthlyValue: 499128,
        projectedBalance: 7025567,
      },
      {
        id: "18",
        paymentNumber: 18,
        date: "15/Jun/2024",
        capitalPayment: 389386,
        interest: 85875,
        lifeInsurance: 2471,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2471,
        totalMonthlyValue: 499129,
        projectedBalance: 7025568,
      },
      {
        id: "19",
        paymentNumber: 19,
        date: "15/Jul/2024",
        capitalPayment: 401386,
        interest: 77875,
        lifeInsurance: 2207,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2207,
        totalMonthlyValue: 499130,
        projectedBalance: 7025569,
      },
      {
        id: "20",
        paymentNumber: 20,
        date: "15/Aug/2024",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 1944,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1944,
        totalMonthlyValue: 499131,
        projectedBalance: 7025570,
      },
      {
        id: "21",
        paymentNumber: 21,
        date: "15/Sep/2024",
        capitalPayment: 428386,
        interest: 61875,
        lifeInsurance: 1680,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1680,
        totalMonthlyValue: 499132,
        projectedBalance: 7025571,
      },
      {
        id: "22",
        paymentNumber: 22,
        date: "15/Oct/2024",
        capitalPayment: 443386,
        interest: 53875,
        lifeInsurance: 1417,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1417,
        totalMonthlyValue: 499133,
        projectedBalance: 7025572,
      },
      {
        id: "23",
        paymentNumber: 23,
        date: "15/Nov/2024",
        capitalPayment: 459386,
        interest: 45875,
        lifeInsurance: 1153,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1153,
        totalMonthlyValue: 499134,
        projectedBalance: 7025573,
      },
      {
        id: "24",
        paymentNumber: 24,
        date: "15/Dec/2024",
        capitalPayment: 476386,
        interest: 37875,
        lifeInsurance: 889,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 889,
        totalMonthlyValue: 499135,
        projectedBalance: 7025574,
      },
    ],
    tags: [],
  },
  {
    id: "CL000807",
    title: "Crédito libre inversión",
    attributes: [
      { id: "next_payment_value", label: "Próximo pago", value: 500000 },
      { id: "next_payment_date", label: "Próxima fecha", value: "02/Mar/2023" },
      { id: "net_value", label: "Saldo total", value: 1500000 },
      { id: "interest_rate", label: "Tasa de interés", value: "3,04 % NAMV" },
      { id: "loan_date", label: "Fecha de préstamo", value: "15/Ene/2023" },
      { id: "loan_value", label: "Valor del préstamo", value: 8300000 },
      {
        id: "next_due_date",
        label: "Próximo vencimiento",
        value: "15/Abr/2023",
      },
      { id: "quote", label: "Cuota", value: "5 de 12" },
      { id: "peridiocity", label: "Periodicidad", value: "Mensual" },
      {
        id: "payment_means",
        label: "Medio de pago",
        value: "Grúas de occidente",
      },
    ],
    movements: [
      {
        id: "movement-1",
        date: "15/Sep/2023",
        reference: "DN1001211",
        description: "Abono extraordinario",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-2",
        date: "15/Oct/2023",
        reference: "DN1001212",
        description: "Pago crédito educativo",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-3",
        date: "15/Nov/2023",
        reference: "DN1001213",
        description: "Abono extraordinario",
        capitalPayment: 289386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-4",
        date: "15/Dic/2023",
        reference: "DN1001214",
        description: "Pago crédito educativo",
        capitalPayment: 294386,
        interest: 189875,
        lifeInsurance: 5885,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-5",
        date: "15/Ene/2024",
        reference: "DN1001215",
        description: "Abono extraordinario",
        capitalPayment: 302386,
        interest: 181875,
        lifeInsurance: 5624,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-6",
        date: "15/Feb/2024",
        reference: "DN1001216",
        description: "Pago crédito educativo",
        capitalPayment: 310386,
        interest: 173875,
        lifeInsurance: 5364,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-7",
        date: "15/Mar/2024",
        reference: "DN1001217",
        description: "Abono extraordinario",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5105,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-8",
        date: "15/Abr/2024",
        reference: "DN1001218",
        description: "Pago crédito educativo",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4847,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-9",
        date: "15/May/2024",
        reference: "DN1001219",
        description: "Abono extraordinario",
        capitalPayment: 334386,
        interest: 149875,
        lifeInsurance: 4590,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-10",
        date: "15/Jun/2024",
        reference: "DN1001220",
        description: "Pago crédito educativo",
        capitalPayment: 342386,
        interest: 141875,
        lifeInsurance: 4334,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499192,
      },
      {
        id: "movement-11",
        date: "15/Jul/2024",
        reference: "DN1001221",
        description: "Abono extraordinario",
        capitalPayment: 350386,
        interest: 133875,
        lifeInsurance: 4079,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-12",
        date: "15/Ago/2024",
        reference: "DN1001222",
        description: "Pago crédito educativo",
        capitalPayment: 358386,
        interest: 125875,
        lifeInsurance: 3825,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-13",
        date: "15/Sep/2024",
        reference: "DN1001223",
        description: "Abono extraordinario",
        capitalPayment: 366386,
        interest: 117875,
        lifeInsurance: 3572,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-14",
        date: "15/Oct/2024",
        reference: "DN1001224",
        description: "Pago crédito educativo",
        capitalPayment: 374386,
        interest: 109875,
        lifeInsurance: 3320,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-15",
        date: "15/Nov/2024",
        reference: "DN1001225",
        description: "Abono extraordinario",
        capitalPayment: 382386,
        interest: 101875,
        lifeInsurance: 3069,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-16",
        date: "15/Dic/2024",
        reference: "DN1001226",
        description: "Pago crédito educativo",
        capitalPayment: 390386,
        interest: 93875,
        lifeInsurance: 2820,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-17",
        date: "15/Ene/2025",
        reference: "DN1001227",
        description: "Abono extraordinario",
        capitalPayment: 398386,
        interest: 85875,
        lifeInsurance: 2571,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-18",
        date: "15/Feb/2025",
        reference: "DN1001228",
        description: "Pago crédito educativo",
        capitalPayment: 406386,
        interest: 77875,
        lifeInsurance: 2324,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-19",
        date: "15/Mar/2025",
        reference: "DN1001229",
        description: "Abono extraordinario",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 2078,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499192,
      },
      {
        id: "movement-20",
        date: "15/Abr/2025",
        reference: "DN1001230",
        description: "Pago crédito educativo",
        capitalPayment: 422386,
        interest: 61875,
        lifeInsurance: 1833,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499193,
      },
      {
        id: "movement-21",
        date: "15/May/2025",
        reference: "DN1001231",
        description: "Abono extraordinario",
        capitalPayment: 430386,
        interest: 53875,
        lifeInsurance: 1589,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499194,
      },
      {
        id: "movement-22",
        date: "15/Jun/2025",
        reference: "DN1001232",
        description: "Pago crédito educativo",
        capitalPayment: 438386,
        interest: 45875,
        lifeInsurance: 1346,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499195,
      },
      {
        id: "movement-23",
        date: "15/Jul/2025",
        reference: "DN1001233",
        description: "Abono extraordinario",
        capitalPayment: 446386,
        interest: 37875,
        lifeInsurance: 1104,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499196,
      },
      {
        id: "movement-24",
        date: "15/Ago/2025",
        reference: "DN1001234",
        description: "Pago crédito educativo",
        capitalPayment: 454386,
        interest: 29875,
        lifeInsurance: 863,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499197,
      },
      {
        id: "movement-25",
        date: "15/Sep/2025",
        reference: "DN1001235",
        description: "Abono extraordinario",
        capitalPayment: 462386,
        interest: 21875,
        lifeInsurance: 623,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499198,
      },
      {
        id: "movement-26",
        date: "15/Oct/2025",
        reference: "DN1001236",
        description: "Pago crédito educativo",
        capitalPayment: 470386,
        interest: 13875,
        lifeInsurance: 384,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499199,
      },
      {
        id: "movement-27",
        date: "15/Nov/2025",
        reference: "DN1001237",
        description: "Abono extraordinario",
        capitalPayment: 478386,
        interest: 5875,
        lifeInsurance: 146,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499191,
      },
      {
        id: "movement-28",
        date: "15/Dic/2025",
        reference: "DN1001238",
        description: "Pago crédito educativo",
        capitalPayment: 486386,
        interest: 1875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499111,
      },
      {
        id: "movement-29",
        date: "15/Ene/2026",
        reference: "DN1001239",
        description: "Abono extraordinario",
        capitalPayment: 494386,
        interest: 875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499112,
      },
      {
        id: "movement-30",
        date: "15/Feb/2026",
        reference: "DN1001240",
        description: "Abono extraordinario",
        capitalPayment: 502386,
        interest: 775,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        totalValue: 499113,
      },
    ],
    amortization: [
      {
        id: "1",
        paymentNumber: 1,
        date: "15/Ene/2023",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6931,
        totalMonthlyValue: 499112,
        projectedBalance: 7025551,
      },
      {
        id: "2",
        paymentNumber: 2,
        date: "15/Feb/2023",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6674,
        totalMonthlyValue: 499113,
        projectedBalance: 7025552,
      },
      {
        id: "3",
        paymentNumber: 3,
        date: "15/Mar/2023",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6410,
        totalMonthlyValue: 499114,
        projectedBalance: 7025553,
      },
      {
        id: "4",
        paymentNumber: 4,
        date: "15/Apr/2023",
        capitalPayment: 284386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 6147,
        totalMonthlyValue: 499115,
        projectedBalance: 7025554,
      },
      {
        id: "5",
        paymentNumber: 5,
        date: "15/May/2023",
        capitalPayment: 289386,
        interest: 189875,
        lifeInsurance: 5890,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5890,
        totalMonthlyValue: 499116,
        projectedBalance: 7025555,
      },
      {
        id: "6",
        paymentNumber: 6,
        date: "15/Jun/2023",
        capitalPayment: 293386,
        interest: 181875,
        lifeInsurance: 5626,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5626,
        totalMonthlyValue: 499117,
        projectedBalance: 7025556,
      },
      {
        id: "7",
        paymentNumber: 7,
        date: "15/Jul/2023",
        capitalPayment: 298386,
        interest: 173875,
        lifeInsurance: 5363,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5363,
        totalMonthlyValue: 499118,
        projectedBalance: 7025557,
      },
      {
        id: "8",
        paymentNumber: 8,
        date: "15/Aug/2023",
        capitalPayment: 304386,
        interest: 165875,
        lifeInsurance: 5099,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 5099,
        totalMonthlyValue: 499119,
        projectedBalance: 7025558,
      },
      {
        id: "9",
        paymentNumber: 9,
        date: "15/Sep/2023",
        capitalPayment: 310386,
        interest: 157875,
        lifeInsurance: 4836,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4836,
        totalMonthlyValue: 499120,
        projectedBalance: 7025559,
      },
      {
        id: "10",
        paymentNumber: 10,
        date: "15/Oct/2023",
        capitalPayment: 317386,
        interest: 149875,
        lifeInsurance: 4579,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4579,
        totalMonthlyValue: 499121,
        projectedBalance: 7025560,
      },
      {
        id: "11",
        paymentNumber: 11,
        date: "15/Nov/2023",
        capitalPayment: 324386,
        interest: 141875,
        lifeInsurance: 4315,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4315,
        totalMonthlyValue: 499122,
        projectedBalance: 7025561,
      },
      {
        id: "12",
        paymentNumber: 12,
        date: "15/Dec/2023",
        capitalPayment: 332386,
        interest: 133875,
        lifeInsurance: 4052,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 4052,
        totalMonthlyValue: 499123,
        projectedBalance: 7025562,
      },
      {
        id: "13",
        paymentNumber: 13,
        date: "15/Jan/2024",
        capitalPayment: 340386,
        interest: 125875,
        lifeInsurance: 3788,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3788,
        totalMonthlyValue: 499124,
        projectedBalance: 7025563,
      },
      {
        id: "14",
        paymentNumber: 14,
        date: "15/Feb/2024",
        capitalPayment: 349386,
        interest: 117875,
        lifeInsurance: 3525,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3525,
        totalMonthlyValue: 499125,
        projectedBalance: 7025564,
      },
      {
        id: "15",
        paymentNumber: 15,
        date: "15/Mar/2024",
        capitalPayment: 358386,
        interest: 109875,
        lifeInsurance: 3261,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 3261,
        totalMonthlyValue: 499126,
        projectedBalance: 7025565,
      },
      {
        id: "16",
        paymentNumber: 16,
        date: "15/Apr/2024",
        capitalPayment: 368386,
        interest: 101875,
        lifeInsurance: 2998,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2998,
        totalMonthlyValue: 499127,
        projectedBalance: 7025566,
      },
      {
        id: "17",
        paymentNumber: 17,
        date: "15/May/2024",
        capitalPayment: 378386,
        interest: 93875,
        lifeInsurance: 2734,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2734,
        totalMonthlyValue: 499128,
        projectedBalance: 7025567,
      },
      {
        id: "18",
        paymentNumber: 18,
        date: "15/Jun/2024",
        capitalPayment: 389386,
        interest: 85875,
        lifeInsurance: 2471,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2471,
        totalMonthlyValue: 499129,
        projectedBalance: 7025568,
      },
      {
        id: "19",
        paymentNumber: 19,
        date: "15/Jul/2024",
        capitalPayment: 401386,
        interest: 77875,
        lifeInsurance: 2207,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 2207,
        totalMonthlyValue: 499130,
        projectedBalance: 7025569,
      },
      {
        id: "20",
        paymentNumber: 20,
        date: "15/Aug/2024",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 1944,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1944,
        totalMonthlyValue: 499131,
        projectedBalance: 7025570,
      },
      {
        id: "21",
        paymentNumber: 21,
        date: "15/Sep/2024",
        capitalPayment: 428386,
        interest: 61875,
        lifeInsurance: 1680,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1680,
        totalMonthlyValue: 499132,
        projectedBalance: 7025571,
      },
      {
        id: "22",
        paymentNumber: 22,
        date: "15/Oct/2024",
        capitalPayment: 443386,
        interest: 53875,
        lifeInsurance: 1417,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1417,
        totalMonthlyValue: 499133,
        projectedBalance: 7025572,
      },
      {
        id: "23",
        paymentNumber: 23,
        date: "15/Nov/2024",
        capitalPayment: 459386,
        interest: 45875,
        lifeInsurance: 1153,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 1153,
        totalMonthlyValue: 499134,
        projectedBalance: 7025573,
      },
      {
        id: "24",
        paymentNumber: 24,
        date: "15/Dec/2024",
        capitalPayment: 476386,
        interest: 37875,
        lifeInsurance: 889,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 889,
        totalMonthlyValue: 499135,
        projectedBalance: 7025574,
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

export { creditsMock };
