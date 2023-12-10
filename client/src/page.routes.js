/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {
  CurrencyBitcoin,
  Dashboard,
  DiscFull,
  DocumentScanner,
  GitHub,
  List,
  People,
  Plumbing,
  Rocket,
  Shop,
} from "@mui/icons-material";

/** 
  All of the routes for the page layout of Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// Soft UI Dashboard PRO React icons
// import Shop from "examples/Icons/Shop";
// import Office from "examples/Icons/Office";
// import Document from "examples/Icons/Document";
// import CustomerSupport from "examples/Icons/CustomerSupport";
// import Cube from "examples/Icons/Cube";
// import SpaceShip from "examples/Icons/SpaceShip";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
      },
      // {
      //   name: "Automotive",
      //   key: "automotive",
      //   route: "/dashboards/automotive",
      // },
      // {
      //   name: "Smart Home",
      //   key: "smart-home",
      //   route: "/dashboards/smart-home",
      // },
      // {
      //   name: "VR Default",
      //   key: "vr-default",
      //   route: "/dashboards/virtual-reality/default",
      // },
      // {
      //   name: "VR Info",
      //   key: "vr-info",
      //   route: "/dashboards/virtual-reality/info",
      // },
      // { name: "CRM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <People size="12px" color="white" />,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <People size="12px" color="white" />,
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/pages/profile/profile-overview",
      },
      {
        name: "Teams",
        key: "teams",
        route: "/pages/profile/teams",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/pages/profile/all-projects",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <DocumentScanner size="12px" color="white" />,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
      },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <GitHub size="12px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
      {
        name: "Security",
        key: "security",
        route: "/pages/account/security",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <Dashboard size="12px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
      {
        name: "New Project",
        key: "new-project",
        route: "/pages/projects/new-project",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <List size="12px" color="white" />,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Order Details",
        key: "order-details",
        route: "/ecommerce/orders/order-details",
      },
    ],
  },
  {
    name: "General",
    key: "general",
    icon: <Dashboard size="12px" color="white" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
      },
    ],
  },
  {
    name: "Products",
    key: "products",
    icon: <Shop size="12px" color="white" />,
    collapse: [
      {
        name: "New Product",
        key: "new-product",
        route: "/ecommerce/products/new-product",
      },
      {
        name: "Edit Product",
        key: "edit-product",
        route: "/ecommerce/products/edit-product",
      },
      {
        name: "Product Page",
        key: "product-page",
        route: "/ecommerce/products/product-page",
      },
      {
        name: "Products List",
        key: "products-list",
        route: "/ecommerce/products/products-list",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-in/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-in/illustration",
      },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-up/illustration",
      },
    ],
  },
  {
    name: "Reset Password",
    key: "reset-password",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/reset-password/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/reset-password/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/reset-password/illustration",
      },
    ],
  },
  {
    name: "Lock",
    key: "lock",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/lock/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/lock/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/lock/illustration",
      },
    ],
  },
  {
    name: "2-Step Verification",
    key: "2-step-verification",
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/verification/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/verification/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/verification/illustration",
      },
    ],
  },
  {
    name: "Error",
    key: "error",
    collapse: [
      {
        name: "Error 404",
        key: "error-404",
        route: "/authentication/error/404",
      },
      {
        name: "Error 500",
        key: "error-500",
        route: "/authentication/error/500",
      },
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        icon: "apps",
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        icon: "badge",
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        icon: "table_view",
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        icon: "today",
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        icon: "assessment",
      },
    ],
  },
  {
    name: "Docs",
    key: "docs",
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/",
        description: "All about overview, quick start, license and contents",
        icon: <Rocket size="15px" color="secondary" />,
      },
      {
        name: "Foundation",
        key: "foundation",
        href: "https://www.creative-tim.com/learning-lab/react/colors/soft-ui-dashboard/",
        description: "See our colors, icons and typography",
        icon: <DiscFull size="15px" color="secondary" />,
      },
      {
        name: "Components",
        key: "components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/soft-ui-dashboard/",
        description: "Explore our collection of fully designed components",
        icon: <CurrencyBitcoin size="15px" color="secondary" />,
      },
      {
        name: "Plugins",
        key: "plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/soft-ui-dashboard/",
        description: "Check how you can integrate our plugins",
        icon: <Plumbing size="15px" color="secondary" />,
      },
    ],
  },
];

export default pageRoutes;
