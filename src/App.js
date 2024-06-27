import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/UserDetailsPage";
export default function App() {
  console.log("Router");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/user/:id",
      element: <UserDetails />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
