import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <AppContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </AppContext.Provider>
  );
};
