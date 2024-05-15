// Mycontext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible((prev) => false);
  };

  return (
    <MyContext.Provider value={{ isNavbarVisible, toggleNavbarVisibility }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
