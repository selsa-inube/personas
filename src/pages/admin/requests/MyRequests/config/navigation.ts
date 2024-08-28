import { IBreadcrumbItem } from "@design/navigation/Breadcrumbs";

const crumbsMyRequests: IBreadcrumbItem[] = [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "myRequests",
    path: "/my-requests",
    label: "Mis solicitudes",
    isActive: true,
  },
];

export { crumbsMyRequests };
