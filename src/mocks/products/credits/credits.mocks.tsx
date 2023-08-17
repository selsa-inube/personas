import { IProduct } from "src/types/pages/product.types";

const creditsMock: IProduct[] = [
  {
    id: "C2786238-55",
    title: "Educativo",
    attributes: [
      { id: "next_payment_value", label: "Próximo pago", value: 500000 },
      { id: "next_payment_date", label: "Próxima fecha", value: "02/ABR/2023" },
      { id: "net_value", label: "Saldo total", value: 1225000 },
      { id: "interest_rate", label: "Tasa de interes", value: "15.70 % NAMV" },
      { id: "terms", label: "Plazo", value: "24 Meses" },
    ],
    movements: [
      {
        date: "2023-08-15",
        reference: "DN1001210",
        description: "Pago crédito educativo",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-09-15",
        reference: "DN1001211",
        description: "Abono extraordinario",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-10-15",
        reference: "DN1001212",
        description: "Pago crédito educativo",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-11-15",
        reference: "DN1001213",
        description: "Abono extraordinario",
        capitalPayment: 289386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-12-15",
        reference: "DN1001214",
        description: "Pago crédito educativo",
        capitalPayment: 294386,
        interest: 189875,
        lifeInsurance: 5885,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-01-15",
        reference: "DN1001215",
        description: "Abono extraordinario",
        capitalPayment: 302386,
        interest: 181875,
        lifeInsurance: 5624,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-02-15",
        reference: "DN1001216",
        description: "Pago crédito educativo",
        capitalPayment: 310386,
        interest: 173875,
        lifeInsurance: 5364,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-03-15",
        reference: "DN1001217",
        description: "Abono extraordinario",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5105,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-04-15",
        reference: "DN1001218",
        description: "Pago crédito educativo",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4847,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-05-15",
        reference: "DN1001219",
        description: "Abono extraordinario",
        capitalPayment: 334386,
        interest: 149875,
        lifeInsurance: 4590,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-06-15",
        reference: "DN1001220",
        description: "Pago crédito educativo",
        capitalPayment: 342386,
        interest: 141875,
        lifeInsurance: 4334,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-07-15",
        reference: "DN1001221",
        description: "Abono extraordinario",
        capitalPayment: 350386,
        interest: 133875,
        lifeInsurance: 4079,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-08-15",
        reference: "DN1001222",
        description: "Pago crédito educativo",
        capitalPayment: 358386,
        interest: 125875,
        lifeInsurance: 3825,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-09-15",
        reference: "DN1001223",
        description: "Abono extraordinario",
        capitalPayment: 366386,
        interest: 117875,
        lifeInsurance: 3572,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-10-15",
        reference: "DN1001224",
        description: "Pago crédito educativo",
        capitalPayment: 374386,
        interest: 109875,
        lifeInsurance: 3320,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-11-15",
        reference: "DN1001225",
        description: "Abono extraordinario",
        capitalPayment: 382386,
        interest: 101875,
        lifeInsurance: 3069,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-12-15",
        reference: "DN1001226",
        description: "Pago crédito educativo",
        capitalPayment: 390386,
        interest: 93875,
        lifeInsurance: 2820,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-01-15",
        reference: "DN1001227",
        description: "Abono extraordinario",
        capitalPayment: 398386,
        interest: 85875,
        lifeInsurance: 2571,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-02-15",
        reference: "DN1001228",
        description: "Pago crédito educativo",
        capitalPayment: 406386,
        interest: 77875,
        lifeInsurance: 2324,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-03-15",
        reference: "DN1001229",
        description: "Abono extraordinario",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 2078,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-04-15",
        reference: "DN1001230",
        description: "Pago crédito educativo",
        capitalPayment: 422386,
        interest: 61875,
        lifeInsurance: 1833,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-05-15",
        reference: "DN1001231",
        description: "Abono extraordinario",
        capitalPayment: 430386,
        interest: 53875,
        lifeInsurance: 1589,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-06-15",
        reference: "DN1001232",
        description: "Pago crédito educativo",
        capitalPayment: 438386,
        interest: 45875,
        lifeInsurance: 1346,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-07-15",
        reference: "DN1001233",
        description: "Abono extraordinario",
        capitalPayment: 446386,
        interest: 37875,
        lifeInsurance: 1104,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-08-15",
        reference: "DN1001234",
        description: "Pago crédito educativo",
        capitalPayment: 454386,
        interest: 29875,
        lifeInsurance: 863,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-09-15",
        reference: "DN1001235",
        description: "Abono extraordinario",
        capitalPayment: 462386,
        interest: 21875,
        lifeInsurance: 623,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-10-15",
        reference: "DN1001236",
        description: "Pago crédito educativo",
        capitalPayment: 470386,
        interest: 13875,
        lifeInsurance: 384,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-11-15",
        reference: "DN1001237",
        description: "Abono extraordinario",
        capitalPayment: 478386,
        interest: 5875,
        lifeInsurance: 146,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-12-15",
        reference: "DN1001238",
        description: "Pago crédito educativo",
        capitalPayment: 486386,
        interest: 1875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2026-01-15",
        reference: "DN1001239",
        description: "Abono extraordinario",
        capitalPayment: 494386,
        interest: 875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
    ],
    amortization: [
      {
        paymentNumber: 1,
        date: "2023-09-01",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 2,
        date: "2023-10-01",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 3,
        date: "2023-11-01",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 4,
        date: "2023-12-01",
        capitalPayment: 288386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 5,
        date: "2024-01-01",
        capitalPayment: 296386,
        interest: 189875,
        lifeInsurance: 5886,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 6,
        date: "2024-02-01",
        capitalPayment: 303386,
        interest: 181875,
        lifeInsurance: 5627,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 7,
        date: "2024-03-01",
        capitalPayment: 311386,
        interest: 173875,
        lifeInsurance: 5370,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 8,
        date: "2024-04-01",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5114,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 9,
        date: "2024-05-01",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4860,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 10,
        date: "2024-06-01",
        capitalPayment: 333386,
        interest: 149875,
        lifeInsurance: 4607,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 11,
        date: "2024-07-01",
        capitalPayment: 341386,
        interest: 141875,
        lifeInsurance: 4356,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 12,
        date: "2024-08-01",
        capitalPayment: 348386,
        interest: 133875,
        lifeInsurance: 4107,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 13,
        date: "2024-09-01",
        capitalPayment: 356386,
        interest: 125875,
        lifeInsurance: 3860,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 14,
        date: "2024-10-01",
        capitalPayment: 363386,
        interest: 117875,
        lifeInsurance: 3614,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 15,
        date: "2024-11-01",
        capitalPayment: 371386,
        interest: 109875,
        lifeInsurance: 3369,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 16,
        date: "2024-12-01",
        capitalPayment: 378386,
        interest: 101875,
        lifeInsurance: 3126,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 17,
        date: "2025-01-01",
        capitalPayment: 386386,
        interest: 93875,
        lifeInsurance: 2885,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 18,
        date: "2025-02-01",
        capitalPayment: 393386,
        interest: 85875,
        lifeInsurance: 2646,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 19,
        date: "2025-03-01",
        capitalPayment: 401386,
        interest: 77875,
        lifeInsurance: 2409,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 20,
        date: "2025-04-01",
        capitalPayment: 408386,
        interest: 69875,
        lifeInsurance: 2174,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 21,
        date: "2025-05-01",
        capitalPayment: 416386,
        interest: 61875,
        lifeInsurance: 1941,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 22,
        date: "2025-06-01",
        capitalPayment: 423386,
        interest: 53875,
        lifeInsurance: 1710,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 23,
        date: "2025-07-01",
        capitalPayment: 431386,
        interest: 45875,
        lifeInsurance: 1481,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 24,
        date: "2025-08-01",
        capitalPayment: 438386,
        interest: 37875,
        lifeInsurance: 1254,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
    ],
    tags: [],
  },
  {
    id: "C9786288-14",
    title: "Libre inversión",
    attributes: [
      { id: "next_payment_value", label: "Próximo pago", value: 1100000 },
      { id: "next_payment_date", label: "Próxima fecha", value: "02/MAY/2023" },
      { id: "net_value", label: "Saldo total", value: 18100000 },
      { id: "interest_rate", label: "Tasa de interes", value: "15.70 % NAMV" },
      { id: "terms", label: "Plazo", value: "24 Meses" },
    ],
    movements: [
      {
        date: "2023-08-15",
        reference: "DN1001210",
        description: "Pago crédito educativo",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-09-15",
        reference: "DN1001211",
        description: "Abono extraordinario",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-10-15",
        reference: "DN1001212",
        description: "Pago crédito educativo",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-11-15",
        reference: "DN1001213",
        description: "Abono extraordinario",
        capitalPayment: 289386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2023-12-15",
        reference: "DN1001214",
        description: "Pago crédito educativo",
        capitalPayment: 294386,
        interest: 189875,
        lifeInsurance: 5885,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-01-15",
        reference: "DN1001215",
        description: "Abono extraordinario",
        capitalPayment: 302386,
        interest: 181875,
        lifeInsurance: 5624,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-02-15",
        reference: "DN1001216",
        description: "Pago crédito educativo",
        capitalPayment: 310386,
        interest: 173875,
        lifeInsurance: 5364,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-03-15",
        reference: "DN1001217",
        description: "Abono extraordinario",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5105,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-04-15",
        reference: "DN1001218",
        description: "Pago crédito educativo",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4847,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-05-15",
        reference: "DN1001219",
        description: "Abono extraordinario",
        capitalPayment: 334386,
        interest: 149875,
        lifeInsurance: 4590,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-06-15",
        reference: "DN1001220",
        description: "Pago crédito educativo",
        capitalPayment: 342386,
        interest: 141875,
        lifeInsurance: 4334,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-07-15",
        reference: "DN1001221",
        description: "Abono extraordinario",
        capitalPayment: 350386,
        interest: 133875,
        lifeInsurance: 4079,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-08-15",
        reference: "DN1001222",
        description: "Pago crédito educativo",
        capitalPayment: 358386,
        interest: 125875,
        lifeInsurance: 3825,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-09-15",
        reference: "DN1001223",
        description: "Abono extraordinario",
        capitalPayment: 366386,
        interest: 117875,
        lifeInsurance: 3572,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-10-15",
        reference: "DN1001224",
        description: "Pago crédito educativo",
        capitalPayment: 374386,
        interest: 109875,
        lifeInsurance: 3320,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-11-15",
        reference: "DN1001225",
        description: "Abono extraordinario",
        capitalPayment: 382386,
        interest: 101875,
        lifeInsurance: 3069,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2024-12-15",
        reference: "DN1001226",
        description: "Pago crédito educativo",
        capitalPayment: 390386,
        interest: 93875,
        lifeInsurance: 2820,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-01-15",
        reference: "DN1001227",
        description: "Abono extraordinario",
        capitalPayment: 398386,
        interest: 85875,
        lifeInsurance: 2571,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-02-15",
        reference: "DN1001228",
        description: "Pago crédito educativo",
        capitalPayment: 406386,
        interest: 77875,
        lifeInsurance: 2324,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-03-15",
        reference: "DN1001229",
        description: "Abono extraordinario",
        capitalPayment: 414386,
        interest: 69875,
        lifeInsurance: 2078,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-04-15",
        reference: "DN1001230",
        description: "Pago crédito educativo",
        capitalPayment: 422386,
        interest: 61875,
        lifeInsurance: 1833,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-05-15",
        reference: "DN1001231",
        description: "Abono extraordinario",
        capitalPayment: 430386,
        interest: 53875,
        lifeInsurance: 1589,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-06-15",
        reference: "DN1001232",
        description: "Pago crédito educativo",
        capitalPayment: 438386,
        interest: 45875,
        lifeInsurance: 1346,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-07-15",
        reference: "DN1001233",
        description: "Abono extraordinario",
        capitalPayment: 446386,
        interest: 37875,
        lifeInsurance: 1104,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-08-15",
        reference: "DN1001234",
        description: "Pago crédito educativo",
        capitalPayment: 454386,
        interest: 29875,
        lifeInsurance: 863,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-09-15",
        reference: "DN1001235",
        description: "Abono extraordinario",
        capitalPayment: 462386,
        interest: 21875,
        lifeInsurance: 623,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-10-15",
        reference: "DN1001236",
        description: "Pago crédito educativo",
        capitalPayment: 470386,
        interest: 13875,
        lifeInsurance: 384,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-11-15",
        reference: "DN1001237",
        description: "Abono extraordinario",
        capitalPayment: 478386,
        interest: 5875,
        lifeInsurance: 146,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2025-12-15",
        reference: "DN1001238",
        description: "Pago crédito educativo",
        capitalPayment: 486386,
        interest: 1875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
      {
        date: "2026-01-15",
        reference: "DN1001239",
        description: "Abono extraordinario",
        capitalPayment: 494386,
        interest: 875,
        lifeInsurance: 0,
        patrimonialInsurance: 0,
        capitalization: 0,
        commission: 0,
        others: 0,
      },
    ],
    amortization: [
      {
        paymentNumber: 1,
        date: "2023-09-01",
        capitalPayment: 270386,
        interest: 221875,
        lifeInsurance: 6931,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 2,
        date: "2023-10-01",
        capitalPayment: 278386,
        interest: 213875,
        lifeInsurance: 6674,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 3,
        date: "2023-11-01",
        capitalPayment: 281386,
        interest: 205875,
        lifeInsurance: 6410,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 4,
        date: "2023-12-01",
        capitalPayment: 288386,
        interest: 197875,
        lifeInsurance: 6147,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 5,
        date: "2024-01-01",
        capitalPayment: 296386,
        interest: 189875,
        lifeInsurance: 5886,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 6,
        date: "2024-02-01",
        capitalPayment: 303386,
        interest: 181875,
        lifeInsurance: 5627,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 7,
        date: "2024-03-01",
        capitalPayment: 311386,
        interest: 173875,
        lifeInsurance: 5370,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 8,
        date: "2024-04-01",
        capitalPayment: 318386,
        interest: 165875,
        lifeInsurance: 5114,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 9,
        date: "2024-05-01",
        capitalPayment: 326386,
        interest: 157875,
        lifeInsurance: 4860,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 10,
        date: "2024-06-01",
        capitalPayment: 333386,
        interest: 149875,
        lifeInsurance: 4607,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 11,
        date: "2024-07-01",
        capitalPayment: 341386,
        interest: 141875,
        lifeInsurance: 4356,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 12,
        date: "2024-08-01",
        capitalPayment: 348386,
        interest: 133875,
        lifeInsurance: 4107,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 13,
        date: "2024-09-01",
        capitalPayment: 356386,
        interest: 125875,
        lifeInsurance: 3860,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 14,
        date: "2024-10-01",
        capitalPayment: 363386,
        interest: 117875,
        lifeInsurance: 3614,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 15,
        date: "2024-11-01",
        capitalPayment: 371386,
        interest: 109875,
        lifeInsurance: 3369,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 16,
        date: "2024-12-01",
        capitalPayment: 378386,
        interest: 101875,
        lifeInsurance: 3126,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 17,
        date: "2025-01-01",
        capitalPayment: 386386,
        interest: 93875,
        lifeInsurance: 2885,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 18,
        date: "2025-02-01",
        capitalPayment: 393386,
        interest: 85875,
        lifeInsurance: 2646,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 19,
        date: "2025-03-01",
        capitalPayment: 401386,
        interest: 77875,
        lifeInsurance: 2409,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 20,
        date: "2025-04-01",
        capitalPayment: 408386,
        interest: 69875,
        lifeInsurance: 2174,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 21,
        date: "2025-05-01",
        capitalPayment: 416386,
        interest: 61875,
        lifeInsurance: 1941,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 22,
        date: "2025-06-01",
        capitalPayment: 423386,
        interest: 53875,
        lifeInsurance: 1710,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 23,
        date: "2025-07-01",
        capitalPayment: 431386,
        interest: 45875,
        lifeInsurance: 1481,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
      },
      {
        paymentNumber: 24,
        date: "2025-08-01",
        capitalPayment: 438386,
        interest: 37875,
        lifeInsurance: 1254,
        patrimonialInsurance: 0,
        capitalization: 0,
        others: 0,
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

export default creditsMock;

export { creditsMock };
