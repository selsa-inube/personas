import { IBreadcrumbItem } from "@design/navigation/Breadcrumbs";

const crumbsInvestment = (productId?: string): IBreadcrumbItem[] => [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "myInvestments",
    path: "/my-investments",
    label: "Mis inversiones",
  },
  {
    id: "investment",
    path: `/my-investments/${productId}`,
    label: "Consulta de inversiones",
    isActive: true,
  },
];

export { crumbsInvestment };
