import React, { useState } from "react";
import { createContext } from "react";

import data from "../Assets/fakestore.json";

export const StoreContext = createContext(null);

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const StoreContextProvider = ({ children }) => {
  const [storeItems, setStoreItems] = useState(defaultCart());

  const addToCart = (id) => {
    setStoreItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeFromCart = (id) => {
    setStoreItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const editInput = (id, newValue) => {
    setStoreItems((prev) => ({ ...prev, [id]: newValue }));
  };

  const populateSubTotal = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      let curData = data[i];
      if (storeItems[curData.id] > 0) {
        let calcTotal = curData.price * storeItems[curData.id];
        total += calcTotal;
      }
    }
    return total;
  };

  const values = {
    storeItems,
    addToCart,
    removeFromCart,
    editInput,
    populateSubTotal,
  };

  //wrapping the provider
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
