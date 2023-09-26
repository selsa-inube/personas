import {
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdOutlineAirplaneTicket,
  MdOutlineAssignment,
  MdOutlineAttachMoney,
  MdOutlineBadge,
  MdOutlineBalance,
  MdOutlineCreditCard,
  MdOutlineHouse,
  MdOutlineSavings,
  MdOutlineSportsCricket,
} from "react-icons/md";

const header = {
  logoURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrWOwST-34PyX9rqlHzqEjqunO1PcMzpHJVUIV-7lL4HJ7tcEeNHaj6Redj1lFAOr4Q&usqp=CAU",
  username: "Leonardo Garzón",
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data",
    },
  ],
  portalId: "portal",
  logoutPath: "/",
  logoutTitle: "Logout",
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        name: "ADMINISTRAR",
        links: {
          resumen: {
            id: "resumen",
            label: "Resumen",
            path: "/",
            icon: <MdOutlineHouse />,
          },
          misCuentas: {
            id: "misCuentas",
            label: "Mis cuentas",
            path: "/my-savings",
            icon: <MdOutlineSavings />,
          },
          misInversiones: {
            id: "misInversiones",
            label: "Mis inversiones",
            path: "/my-investments",
            icon: <MdOutlineBalance />,
          },
          misCreditos: {
            id: "misCreditos",
            label: "Mis créditos",
            path: "/my-credits",
            icon: <MdOutlineAccountBalance />,
          },
          misTarjetas: {
            id: "misTarjetas",
            label: "Mis tarjetas",
            path: "/products",
            icon: <MdOutlineCreditCard />,
          },
          misSolicitudes: {
            id: "misSolicitudes",
            label: "Mis solicitudes",
            path: "/products",
            icon: <MdOutlineAssignment />,
          },
        },
      },
      solicitar: {
        name: "SOLICITAR",
        links: {
          ahorros: {
            id: "ahorros",
            label: "Ahorros",
            path: "/credit",
            icon: <MdOutlineAccountBalanceWallet />,
          },
          creditos: {
            id: "creditos",
            label: "Créditos",
            path: "/savings",
            icon: <MdOutlineAttachMoney />,
          },
          eventos: {
            id: "eventos",
            label: "Eventos",
            path: "/holidays",
            icon: <MdOutlineSportsCricket />,
          },
          vacaciones: {
            id: "vacaciones",
            label: "Vacaciones",
            path: "/holidays",
            icon: <MdOutlineAirplaneTicket />,
          },
        },
      },
      links: {
        name: "LINKS",
        links: {
          ahorros: {
            id: "datos",
            label: "Actualización de datos",
            path: "/update-data",
            icon: <MdOutlineBadge />,
          },
        },
      },
    },
  },
};

export { header };
