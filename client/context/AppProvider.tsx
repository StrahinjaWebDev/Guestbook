import React, { useEffect, useState } from "react";
import { User } from "../src/model/User";
import jwtDecode from "jwt-decode";

export const appContext = React.createContext<{
  user?: User | null;
  setUser?: React.Dispatch<React.SetStateAction<User | null>>;
  handleLogout?: () => void;
  isLoading?: boolean;
}>({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && setUser) {
      setUser(jwtDecode(storedUser) as User);
      setIsLoading(false);
    }
  }, []);

  return <appContext.Provider value={{ user, setUser, handleLogout, isLoading }}>{children}</appContext.Provider>;
};

export default AppProvider;
