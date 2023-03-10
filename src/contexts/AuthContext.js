import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [verified, setVerified] = useState(false);

  const isVerified = () => {
    setVerified(true);
  }

  const isNotVerified = () => {
    setVerified(false);
  }

  const values = {
    verified, 
    isVerified,
    isNotVerified
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}