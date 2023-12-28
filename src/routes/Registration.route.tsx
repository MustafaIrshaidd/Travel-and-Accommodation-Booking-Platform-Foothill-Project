import React, { useContext, useEffect } from "react";
import { Registration } from "@pages/Registration";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./Admin.route";
import UserRoute from "./User.route";
import { AuthContext } from "@contexts/Auth.context";

const RegistrationRoute = () => {
  const { user } = useContext(AuthContext)!;

  return (
    <Routes>
      {user?.authorization ? (
        <>
          <Route path="/home/*" element={<UserRoute />} />
          <Route path="/admin/*" element={<AdminRoute />} />
        </>
      ) : (
        <Route path="" element={<Registration type="SignIn" />} />
      )}
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default RegistrationRoute;
