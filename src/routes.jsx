import React, { Suspense } from "react";
import { lazy } from "react";
import { Outlet } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<p>loading ...</p>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./pages/home/HomePage")));
const Signup = Loadable(lazy(() => import("./pages/auth/Signup")));
const Login = Loadable(lazy(() => import("./pages/auth/Login")));

const routes = [
  {
    path: "",
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    ),
  },
  {
    path: "",
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
