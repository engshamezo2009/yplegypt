import { createContext, useContext, useEffect, useState } from "react";

import apiRequest from "../api/apiRequest.js";

import { useLoader } from "./LoaderContext.jsx";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const { setIsLoading } = useLoader();

  const checkAuth = async () => {
    try {
      const response = await apiRequest("/auth/me");

      setUser(response.member);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
