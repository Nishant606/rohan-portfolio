import React, { useState, useEffect } from 'react';
const ThemeContext = React.createContext();

const ThemeToggleProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeToggleProvider };
