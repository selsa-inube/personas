import { IBreadcrumbItem } from "@design/navigation/Breadcrumbs";

const crumbsCard = (card_id?: string): IBreadcrumbItem[] => [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "myCards",
    path: "/my-cards",
    label: "Mis tarjetas",
  },
  {
    id: "card",
    path: `/my-cards/${card_id}`,
    label: "Consulta de tarjetas",
    isActive: true,
  },
];

export { crumbsCard };
