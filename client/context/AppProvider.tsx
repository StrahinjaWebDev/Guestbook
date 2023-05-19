import React, { useEffect, useState } from "react";
import { User } from "../src/model/User";
import { getUsers } from "../src/api/UserApi/getUsers";

export const appContext = React.createContext<{
  user?: User[];
  setUser?: React.Dispatch<React.SetStateAction<User[] | []>>;
  handleLogout?: () => void;
}>({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User[] | []>([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser([]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && setUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return <appContext.Provider value={{ user, setUser, handleLogout }}>{children}</appContext.Provider>;
};

export default AppProvider;
