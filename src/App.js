import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SendMail from "./components/auth/Forget/SendMail";
import ForgotPassword from "./components/auth/ForgotPass/ForgotPassword";
import Home from "./components/auth/Home/Home";
import Layout from "./components/auth/Layout/Layout";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp/SignUp";
export default function App() {
  console.log("Front End Tarif Al Hasan");
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="send_mail" element={<SendMail />} />
      </Routes>
    </Layout>
  );
}
