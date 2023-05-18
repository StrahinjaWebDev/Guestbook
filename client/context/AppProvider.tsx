import React, { useEffect, useState } from "react";
import { User } from "../src/model/User";
import { getUsers } from "../src/api/UserApi/getUsers";

export const appContext = React.createContext<{
  users?: User[];
  setUsers?: React.Dispatch<React.SetStateAction<User[] | []>>;
}>({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      if (response.success) {
        if (response.data) setUsers(response.data);
      } else {
        console.error(response.error);
      }
    };

    fetchUsers();
  }, []);

  return <appContext.Provider value={{ users, setUsers }}>{children}</appContext.Provider>;
};

export default AppProvider;
