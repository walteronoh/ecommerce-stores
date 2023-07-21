import React from "react";
import "./cart.css";
import { StoreContext } from "../../Context/StoreContext";
import data from "../../Assets/fakestore.json";
import { ShoppingBagOpen } from "phosphor-react";
import { useContext } from "react";
import CartCompo from "./CartCompo";
import { Link } from "react-router-dom";
const Cart = () => {
  const { storeItems, populateSubTotal } = useContext(StoreContext);
  return (
    <div className="cartHolder">
      <h3>
        Your Cart Items
        <span>
          <ShoppingBagOpen size={25} />
        </span>
      </h3>
      <div className="cartItems">
        {data.map((items) =>
          storeItems[items.id] > 0 ? <CartCompo data={items} /> : null
        )}
      </div>

      <div className="foot">
        <h3>Subtotal: $ {populateSubTotal()}</h3>
        <Link to={"/ecommerce-stores"}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
