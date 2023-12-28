import { useAppDispatch } from "@hooks/redux.hook";
import { unwrapResult } from "@reduxjs/toolkit";
import { loginUserAsync } from "@store/features/user/userThunks";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { userInformationAdded } from "@store/features/user/userSlice";
import AxiosSingleton from "@utils/axiosUtil";

// Define the types for user data
interface UserData {
  authorization: string;
  userType: string;
}

// Define the types for the authentication context
interface AuthContextProps {
  user: UserData | null;
  isAuthenticated: boolean;
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
  const [user, setUser] = useState<UserData | null>(
    cookies["authData"] || null
  );
  const { decodedToken } = useJwt(user?.authorization ?? "");
  const isAuthenticated = !!user;

  const loginUser = async (user: { userName: string; password: string }) => {
    try {
      const resultAction = await dispatch(loginUserAsync(user));
      const originalPromiseResult = unwrapResult(resultAction);
      AxiosSingleton.setToken(originalPromiseResult);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      setCookie("authData", { authorization: originalPromiseResult });

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
    setUser(null);
    removeCookie("authData");
    AxiosSingleton.removeToken();
    navigate("");
  };

  useEffect(() => {
    setUser(cookies["authData"] || null);
    if (decodedToken) {
      dispatch(userInformationAdded(decodedToken));
    }
  }, [cookies, decodedToken, dispatch]);

  const contextValue: AuthContextProps = {
    user,
    isAuthenticated,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
