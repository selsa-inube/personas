import { INav } from "@design/layout/Page/types";
import { ISection } from "@design/navigation/Menu/MenuSection/types";
import {
  MdLogout,
  MdOutlineBadge,
  MdOutlineContactSupport,
  MdOutlineManageAccounts,
} from "react-icons/md";

const getHeader = (
  updateDataAssistedFlag: boolean,
  withCreatePQRS: boolean,
  nav: INav,
  logoURL: string,
) => {
  const links = [];

  if (withCreatePQRS) {
    links.push({
      label: "Crear PQRS",
      path: "/my-pqrs/create",
      icon: <MdOutlineContactSupport />,
    });
  }

  if (updateDataAssistedFlag) {
    links.push({
      label: "Actualiza tus datos",
      path: "/update-data-assisted",
      icon: <MdOutlineBadge />,
    });
  }

  const consultingUser = sessionStorage.getItem("consultingUser");

  const businessUnit = consultingUser ? "Desarrollo" : "";

  return {
    logoURL: logoURL,
    username: "Fake",
    links,
    portalId: "portal",
    logoutTitle: "Cerrar sesión",
    navigation: nav,
    businessUnit,
  };
};

const getMenuSections = (
  isConsultingUser: boolean,
  onToggleLogoutModal: () => void,
  onToggleUserMenu: () => void,
): ISection[] => {
  const sections: ISection[] = [];

  if (isConsultingUser) {
    sections.push({
      links: [
        {
          title: "Cambiar cliente",
          iconBefore: <MdOutlineManageAccounts />,
          path: "/switch-user?redirect_to=/",
          onClick: onToggleUserMenu,
        },
      ],
    });
  }

  sections.push({
    links: [
      {
        title: "Cerrar sesión",
        iconBefore: <MdLogout />,
        onClick: onToggleLogoutModal,
      },
    ],
    divider: true,
  });

  return sections;
};

export { getHeader, getMenuSections };
