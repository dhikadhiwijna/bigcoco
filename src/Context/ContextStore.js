import React, { createContext, useReducer } from "react";
import { NavbarReducer, ProductReducer, ProductIdReducer } from "./Reducer";

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
  const [NavbarState, NavbarDispatch] = useReducer(NavbarReducer, false);
  const [ModalState, ModalDispatch] = useReducer(ProductReducer, false);
  const [getProductId, getProductIdDispatch] = useReducer(ProductIdReducer, 0);

  return (
    <ContextStore.Provider
      value={{
        //Navbar Mobile
        NavbarState,
        NavbarDispatch,

        //Open Product Modal
        ModalState,
        ModalDispatch,

        //Get ID Product
        getProductId,
        getProductIdDispatch,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
