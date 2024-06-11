import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [runningData,setRunningData] = useState(0);
  const [walkingData, setWalkingData] = useState(0);


  return (
    <AppContext.Provider value={{ loginStatus, setLoginStatus , walkingData, setWalkingData , runningData,setRunningData}}>
      {children}
    </AppContext.Provider>
  );
};
