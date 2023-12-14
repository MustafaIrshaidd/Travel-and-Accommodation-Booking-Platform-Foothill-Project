import { useAppDispatch } from "@hooks/redux.hook";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { unwrapResult } from "@reduxjs/toolkit";
import { loginUserAcync } from "@store/features/user/userThunks";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useCookies } from "react-cookie";

// Define the types for user data
interface UserData {
  username: string;
  userType: string;
  authorization: string;
}

// Define the types for the authentication context
interface AuthContextProps {
  user: UserData | null;
  isAuthenticated: boolean;
  loginUser: (user: { username: string; password: string }) => void;
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
  const { setSnackbarProps } = useCustomSnackbar();
  const [user, setUser] = useState<UserData | null>(
    cookies["authData"] || null
  );
  const isAuthenticated = !!user;

  // Function to set the user and update the cookie
  const loginUser = async (user: { username: string; password: string }) => {
    try {
      const resultAction = await dispatch(loginUserAcync(user));
      const originalPromiseResult = unwrapResult(resultAction);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      
      const userData = { ...originalPromiseResult, username: user.username };
      setUser(userData);
      setCookie("authData", userData, { path: "/" });
    } catch (rejectedValueOrSerializedError: any) {
      setSnackbarProps({
        message: rejectedValueOrSerializedError,
        type: "error",
        position: { vertical: "bottom", horizontal: "center" },
      });
    }
  };

  // Function to log out the user and remove the cookie
  const logoutUser = () => {
    setUser(null);
    removeCookie("authData", { path: "/" });
  };

  // UseEffect to update the user state when the cookie changes
  useEffect(() => {
    setUser(cookies["authData"] || null);
  }, [cookies]);

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
