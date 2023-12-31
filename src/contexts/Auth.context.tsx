import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AxiosSingleton from "@utils/axiosUtil";
import { useAppDispatch } from "@hooks/redux.hook";
import { unwrapResult } from "@reduxjs/toolkit";
import { loginUserAsync } from "@store/features/user/thunks";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

// Define the types for user data
interface UserData {
  authentication: string;
  userType: string;
}

// Define the types for the authentication context
interface AuthContextProps {
  user: UserData;
  isAuthenticated: boolean;
  decodedToken: any;
  loginUser: (user: {
    userName: string;
    password: string;
  }) => Promise<{ path: string; message: string; messageType: any }>;
  logoutUser: () => void;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["authData"]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData>(cookies["authData"]);
  const { decodedToken } = useJwt(user?.authentication);
  const isAuthenticated = !!user;


  const loginUser = async (user: { userName: string; password: string }) => {
    try {
      const resultAction = await dispatch(loginUserAsync(user));
      const originalPromiseResult = unwrapResult(resultAction);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      const authData = {
        authentication: originalPromiseResult.authentication,
        userType: originalPromiseResult.userType,
      };
      setCookie("authData", authData, { expires: expirationDate });
      AxiosSingleton.setToken(originalPromiseResult.authentication);
      return {
        path: `/${user.userName}`,
        message: "Logged In Successfully !",
        messageType: "success",
      };
    } catch (rejectedValueOrSerializedError: any) {
      return {
        path: ``,
        message: rejectedValueOrSerializedError,
        messageType: "error",
      };
    }
  };

  const logoutUser = () => {
    setUser({ authentication: "", userType: "" });
    removeCookie("authData");
    AxiosSingleton.removeToken();
    navigate("");
  };

  useEffect(() => {
    setUser(cookies["authData"]);
  }, [cookies]);

  if (isAuthenticated) {
    AxiosSingleton.setToken(user.authentication);
  }

  const contextValue: AuthContextProps = {
    user,
    isAuthenticated,
    decodedToken,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
