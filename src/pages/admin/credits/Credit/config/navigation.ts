import { IBreadcrumbsRoute } from "@inubekit/inubekit";

const crumbsCredit = (credit_id?: string): IBreadcrumbsRoute[] => [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "myCredits",
    path: "/my-credits",
    label: "Mis créditos",
  },
  {
    id: "credit",
    path: `/my-credits/${credit_id}`,
    label: "Consulta de créditos",
    isActive: true,
  },
];

export { crumbsCredit };
