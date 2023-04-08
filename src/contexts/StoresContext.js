import React, { createContext, useState } from 'react';
//import { getStorageObject } from '../services/localStorage';

export const StoresContext = createContext();

export function StoresProvider({ children }) {
  const [storesData, setStoresData] = useState();
  const [storeID, setStoreID] = useState(0);

  const setSearchData = async (data) => {
    await setStoresData(data)
  }

  const setIndividualStoreId = (id) => {
    setStoreID(id);
  }

  const values = {
    storesData,
    setIndividualStoreId,
    storeID,
    setSearchData
  };

  return (
    <StoresContext.Provider value={values}>
      {children}
    </StoresContext.Provider>
  )
}