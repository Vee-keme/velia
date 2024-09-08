import { HomePage, AboutPage, WorkPage, ContactPage } from "../pages";

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
];

export default mainRoutes;
