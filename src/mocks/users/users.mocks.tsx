import { IThird } from "src/model/entity/user";

const usersMock: IThird[] = [
  {
    personalData: {
      identification: {
        firstName: "David",
        secondName: "Leonardo",
        firstLastName: "Garzón",
        secondLastName: "Páramo",
        type: "cc",
        number: "1013614213",
        city: "bogota",
        date: "05/Ago/2008",
      },
      birthDate: "02/Ago/1990",
      birthCity: "bogota",
      gender: "masculino",
      maritalStatus: "single",
      bloodType: "o_positive",
    },
    contact: [
      {
        id: "01",
        country: "Colombia",
        address: "CR 1 No 66 42 AP 202 BL 7",
        department: "Cundinamarca",
        city: "bogota",
        zipCode: "111511",
        landlinePhone: "37670777",
        cellPhone: "3205510052",
        email: "dgarzon@sistemasenlinea.com.co",
      },
      {
        id: "02",
        country: "Colombia",
        address: "CR 2 No 88 23 AP 009 BL 5",
        department: "Antioquia",
        city: "medellin",
        zipCode: "112375",
        landlinePhone: "35689034",
        cellPhone: "3124573839",
        email: "jgarcia@sistemasenlinea.com.co",
      },
    ],
    familyGroup: [
      {
        identification: {
          firstName: "Leidy",
          secondName: "Paola",
          firstLastName: "Ángel",
          secondLastName: "Marín",
          type: "cc",
          number: "13156778",
          city: "bogota",
        },
        contact: {
          id: "01",
          country: "Colombia",
          address: "CR 1 No 66 42 AP 202 BL 7",
          department: "Cundinamarca",
          city: "bogota",
          landlinePhone: "37670777",
          cellPhone: "3142881128",
          email: "leidy.angel@litigando.com.co",
        },
        information: {
          birthDate: "24/Oct/1989",
          gender: "female",
          relationship: "wife",
          isDependent: false,
          educationLevel: "university",
          businessActivity: "services",
          profession: "lawyer",
        },
      },
      {
        identification: {
          firstName: "Eunice",
          firstLastName: "Páramo",
          type: "cc",
          number: "41739900",
          city: "bogota",
        },
        contact: {
          id: "01",
          country: "Colombia",
          address: "CR 1 No 66 42 AP 501 BL 4",
          department: "Cundinamarca",
          city: "bogota",
          cellPhone: "3205510052",
          email: "eunice.paramo@outlook.com",
        },
        information: {
          birthDate: "10/10/1966",
          gender: "female",
          relationship: "mother",
        },
      },
    ],
    bankTransfersAccount: {
      bankEntity: "bancolombia",
      accountType: "savingsAccount",
      accountNumber: 76454473406,
    },
    financialOperations: {
      hasForeignCurrencyAccounts: "Y",
      hasForeignCurrencyTransactions: "N",
      descriptionOperations:
        "Importación de materia prima, importación auto partes, importación de repuestos, importación de equipos celulares, importación de equipos médicos, importación de piezas electrónicas.",
      country: "USA",
      bankEntity: "bankOfAmerica",
      currency: "dollars",
      accountNumber: 76454473409,
    },
  },
];

export { usersMock };
