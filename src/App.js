import React from "react";
import "./Navbar/navbar.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

import NavigationBar from "./Navbar/Navbar";
import Stores from "./Pages/Stores/Stores";
import Cart from "./Pages/Cart/Cart";
import StoreContextProvider from "./Context/StoreContext";

function App() {
  return (
    <div className="storesContainer">
      <StoreContextProvider>
        <Routers>
          <NavigationBar />
          <Routes>
            <Route path="/ecommerce-stores" element={<Stores />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Routers>
      </StoreContextProvider>
    </div>
  );
}

export default App;
