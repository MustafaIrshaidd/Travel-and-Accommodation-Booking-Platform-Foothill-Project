import React from "react";
import { Registration } from "@pages/Registration";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./Admin.route";

const RegistrationRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Registration type="SignIn" />} />
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/user" element={<>hello user</>} />
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default RegistrationRoute;
