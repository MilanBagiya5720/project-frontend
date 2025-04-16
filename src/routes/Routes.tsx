import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    children: [{ path: "", element: <Home /> }],
  },
];

const routes: RouteObject[] = [...publicRoutes];
export const router = createBrowserRouter(routes);
