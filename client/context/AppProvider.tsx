import React from "react";

export const appContext = React.createContext<{}>({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
};

export default AppProvider;
