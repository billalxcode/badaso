import Pages from "./../../pages/index";

let prefix = process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  ? "/" + process.env.MIX_ADMIN_PANEL_ROUTE_PREFIX
  : "/badaso-admin";

export default [
  {
    path: prefix,
    redirect: prefix + "/home",
  },
  {
    path: prefix + "/admin",
    redirect: prefix + "/home",
  },
  {
    path: prefix + "/home",
    name: "Home",
    component: Pages,
    meta: {
      title: "Home",
    },
  },
  {
    path: prefix + "/profile",
    name: "UserProfile",
    component: Pages,
    meta: {
      title: "User Profile",
    },
  },
];
