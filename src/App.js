import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
export default function App() {
  console.log("Router");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },

  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
