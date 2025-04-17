import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import VideoPlayer from "../components/VideoPlayer";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    children: [
      { path: "", element: <Home /> },
      { path: "video", element: <VideoPlayer /> },
    ],
  },
];

const routes: RouteObject[] = [...publicRoutes];
export const router = createBrowserRouter(routes);
