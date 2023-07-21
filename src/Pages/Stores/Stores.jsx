import React from "react";
import "./stores.css";
import { SmileyWink } from "phosphor-react";
import data from "../../Assets/fakestore.json";
import StoresCompo from "./StoresCompo";
const Stores = () => {
  return (
    <div className="storesHolder">
      <h3>
        Welcome to Jamdown one-stop Stores
        <span>
          <SmileyWink size={25} />
        </span>
      </h3>
      <div className="storeItems">
        {data.map((items) => (
          <StoresCompo data={items} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
