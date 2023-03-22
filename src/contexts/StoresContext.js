import React, { createContext, useState } from 'react';

export const StoresContext = createContext();

export function StoresProvider({ children }) {
  const [storesData, setStoresData] = useState([]);

  const values = {
    storesData
  };

  return (
    <StoresContext.Provider value={values}>
      {children}
    </StoresContext.Provider>
  )
}