import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <h1>Users List</h1>,
    //   },
    //   {
    //     path: "/add-user",
    //     element: <h1>Add User</h1>,
    //   },
    //   {
    //     path: "/edit-user",
    //     element: <h1>Edit User</h1>,
    //   },
    // ]
  },  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
