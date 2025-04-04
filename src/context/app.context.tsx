'use client';
import { createContext, useContext, useState } from "react";

const AppContext = createContext({})

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('red');

  return (
    <AppContext.Provider value={{ color, setColor }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);