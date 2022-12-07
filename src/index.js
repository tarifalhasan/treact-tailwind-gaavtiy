import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SendMail from "./components/auth/Forget/SendMail";
import ForgotPassword from "./components/auth/ForgotPass/ForgotPassword";
import Login from "./components/auth/Login/Login";
import "@fontsource/be-vietnam-pro"; 
import SignUp from "./components/auth/SignUp/SignUp";
import "./index.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "send_mail",
        element: <SendMail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
