import React, { createContext, useState } from 'react';
import { signOut } from '../services/Auth';
import { getStorageObject, mergeStorageItem, removeStorageItem } from '../services/localStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [verified, setVerified] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleVerified = () => {
    setVerified(!verified);
  };

  const getAuthFromStorage = async () => {
    try {
      const authObject = await getStorageObject('userAuth');
      authObject !== null ? setAuthData(authObject) : null; 
    } catch(err) {
      setAuthError(err);
    } finally {
      setLoading(false);
    }
  }

  const setLogin = async () => {
    try {
      await mergeStorageItem('userAuth', { isLoggedIn: true });
      const authObject = await getStorageObject('userAuth');
      authObject !== null ? setAuthData(authObject) : null; 
    } catch(err) {
      setAuthError(err);
    } finally {
      setLoading(false);
    }
  }

  const setLogout = async () => {
    try {
      await removeStorageItem('userAuth');
      signOut();
      setAuthData(null);
      setLoading(true)
    } catch(err) {
      setAuthError(err);
    } finally {
      setLoading(false)
    }
  }

  const values = {
    verified, 
    toggleVerified,
    setLogin,
    setLogout,
    getAuthFromStorage,
    authError,
    authData,
    loading
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}