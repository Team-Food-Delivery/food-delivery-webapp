import React, { createContext, useState } from 'react';
import useFetch from '../components/utiities/useFetch';
import { getStorageObject } from '../services/localStorage';

import { FOOD_DELIVERY_API } from '@env';

export const StoresContext = createContext();

export function StoresProvider({ children }) {
  const [storesData, setStoresData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const setSearchData = async (data) => {
    await setStoresData(data)
  }

  const values = {
    storesData,
    isLoading,
    error,
    setSearchData
  };

  return (
    <StoresContext.Provider value={values}>
      {children}
    </StoresContext.Provider>
  )
}