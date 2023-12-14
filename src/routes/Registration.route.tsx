import React from "react";
import { Registration } from "@pages/Registration";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./Admin.route";
import { CookiesProvider, useCookies } from "react-cookie";

const RegistrationRoute = () => {
  const [cookies] = useCookies(["authData"]);

  const userType = cookies["authData"]?.userType;

  React.useEffect(() => {
    console.log(userType);
  }, [userType]);

  return (
    <Routes>
      <Route path="" element={<Registration type="SignIn" />} />

      {userType && (
        <>
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/user" element={<>hello user</>} />
        </>
      )}

      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};

export default RegistrationRoute;
