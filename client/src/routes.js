import Error404 from "pages/errors/404";
import Error500 from "pages/errors/500";

import Homepage from "pages/home/Homepage";
import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";
import Dashboard from "pages/dashboard/Dashboard";
import Docs from "pages/docs/Docs";
import AddEditDashboard from "pages/dashboard/AddEditDashboard";
import { Home, ListAlt } from "@mui/icons-material";

const routes = [
  {
    // type: "collapse",
    name: "Home",
    key: "home",
    icon: <Home size="12px" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "homepage",
            key: "Homepage",
            route: "/",
            component: <Homepage />,
          },
          {
            name: "login",
            key: "Login",
            route: "/login",
            component: <Login />,
          },
          {
            name: "register",
            key: "Register",
            route: "/register",
            component: <Signup />,
          },
          {
            name: "Default",
            key: "default",
            route: "/dashboard",
            component: <Dashboard />,
          },
          {
            name: "Add Document",
            key: "add-doc",
            route: "/document/add/:id",
            component: <AddEditDashboard />,
          },
          {
            name: "Edit Document",
            key: "edit-doc",
            route: "/document/edit/:id",
            component: <AddEditDashboard />,
          },
        ],
      },
    ],
  },

  {
    // type: "collapse",
    name: "docs",
    key: "docs",
    icon: <ListAlt size="12px" />,
    collapse: [
      {
        name: "docs-id",
        key: "docs-id",
        route: "/docs/:id",
        component: <Docs />,
      },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },

  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <ListAlt size="12px" />,
    collapse: [
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
];

export default routes;
