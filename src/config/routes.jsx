// Mis componentes
// Layout
import LayoutBasic from "../layouts/layoutBasic/LayoutBasic";

// Client Pages
import Home from "../pages/Home";
import Search from "../pages/Search";
import Detail from "../pages/Detail";

// Inicio

export const routesClient = [
  {
    path: "/",
    Layout: LayoutBasic,
    Component: Home,
  },
  {
    path: "/items/search",
    Layout: LayoutBasic,
    Component: Search,
  },
  {
    path: "/items/:id",
    Layout: LayoutBasic,
    Component: Detail,
  },
];
