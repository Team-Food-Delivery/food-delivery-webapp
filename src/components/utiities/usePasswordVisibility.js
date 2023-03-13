import { useState } from 'react';

export const usePasswordVisibility = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [icon, setIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if(icon === 'eye') {
      setIcon('eye-off');
      setPasswordShow(!passwordShow);
    } else if(icon === 'eye-off') {
      setIcon('eye');
      setPasswordShow(!passwordShow);
    }
  };

  return {
    passwordShow,
    icon,
    handlePasswordVisibility
  };
};