import React, { createContext, useContext, useState } from "react";

interface ILocalContext {
  showSidebar: boolean;
  setSidebar?: () => void;
}

const defaultState = {
  showSidebar: false,
};
const LocalContext = createContext<ILocalContext>(defaultState);

interface Props {
  children: React.ReactNode;
}

export const useLocalContext = () => {
  return useContext(LocalContext);
};

const LocalProvider: React.FC<Props> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const setSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <LocalContext.Provider
      value={{
        setSidebar,
        showSidebar,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};

export default LocalProvider;
