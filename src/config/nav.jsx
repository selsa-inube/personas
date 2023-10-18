import {
  MdOutlineAccountBalance,
  MdOutlineAccountBalanceWallet,
  MdOutlineAirplaneTicket,
  MdOutlineAssignment,
  MdOutlineAttachMoney,
  MdOutlineBalance,
  MdOutlineCreditCard,
  MdOutlineHouse,
  MdOutlineSavings,
  MdOutlineSportsCricket,
} from "react-icons/md";

const nav = {
  sections: [
    {
      title: "Administrar",
      links: [
        {
          label: "Resumen",
          path: "/",
          icon: <MdOutlineHouse />,
        },
        {
          label: "Mis ahorros",
          path: "/my-savings",
          icon: <MdOutlineSavings />,
        },
        {
          label: "Mis inversiones",
          path: "/my-investments",
          icon: <MdOutlineBalance />,
        },
        {
          label: "Mis créditos",
          path: "/my-credits",
          icon: <MdOutlineAccountBalance />,
        },
        {
          label: "Mis tarjetas",
          path: "/products",
          icon: <MdOutlineCreditCard />,
        },

        {
          label: "Mis solicitudes",
          path: "/products",
          icon: <MdOutlineAssignment />,
        },
      ],
    },
    {
      title: "Solicitar",
      links: [
        {
          label: "Ahorros",
          path: "/savings",
          icon: <MdOutlineAccountBalanceWallet />,
        },
        {
          label: "Créditos",
          path: "/credit",
          icon: <MdOutlineAttachMoney />,
        },
        {
          label: "Eventos",
          path: "/events",
          icon: <MdOutlineSportsCricket />,
        },
        {
          label: "Vacaciones",
          path: "/holidays",
          icon: <MdOutlineAirplaneTicket />,
        },
      ],
    },
  ],
};

export { nav };
