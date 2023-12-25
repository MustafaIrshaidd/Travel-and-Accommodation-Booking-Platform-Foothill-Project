import React, { useContext, useEffect } from "react";
import { Registration } from "@pages/Registration";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./Admin.route";
import HomeRoute from "./Home.route";

import { AuthContext } from "@contexts/Auth.context";

const RegistrationRoute = () => {
  const { user } = useContext(AuthContext)!;

  return (
    <Routes>
      {user?.authorization ? (
        <>
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/user/*" element={<HomeRoute />} />
        </>
      ) : (
        <Route path="" element={<Registration type="SignIn" />} />
      )}
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default RegistrationRoute;
