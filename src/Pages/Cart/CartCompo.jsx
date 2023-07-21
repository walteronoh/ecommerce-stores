import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
const CartCompo = (props) => {
  const { id, title, image, price, category, description } = props.data;

  const { storeItems, addToCart, removeFromCart, editInput } =
    useContext(StoreContext);
  return (
    <div className="cartItem">
      <img src={image} alt={category} />
      <div className="itCred">
        <h3>{title}</h3>
        <h5>{description}</h5>
        <div className="funcHolder">
          <h4>${price}</h4>
          <div className="cartFunc">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input
              type="text"
              value={storeItems[id]}
              onChange={(e) => editInput(id, Number(e.target.value))}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCompo;
