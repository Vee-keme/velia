import {
  HomePage,
  AboutPage,
  WorkPage,
  ContactPage,
  ErrorBoundary,
} from "../pages";

const mainRoutes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
];

export default mainRoutes;
