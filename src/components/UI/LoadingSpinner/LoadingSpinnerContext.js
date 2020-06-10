import React, { useState, createContext, useContext } from 'react';

const LoadingSpinnerContext = createContext();
const LoadingSpinnerActionsContext = createContext();

export const useLoadingSpinnerContext = () => useContext(LoadingSpinnerContext);
export const useLoadingSpinnerActionsContext = () =>
  useContext(LoadingSpinnerActionsContext);

const LoadingSpinnerContextProvider = (props) => {
  const [isLoadingSpinnerOn, setLoadingSpinner] = useState(false);

  return (
    <LoadingSpinnerContext.Provider value={isLoadingSpinnerOn}>
      <LoadingSpinnerActionsContext.Provider value={setLoadingSpinner}>
        {props.children}
      </LoadingSpinnerActionsContext.Provider>
    </LoadingSpinnerContext.Provider>
  );
};

export default LoadingSpinnerContextProvider;
