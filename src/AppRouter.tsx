import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to={"/login"} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
}

export default AppRouter;
