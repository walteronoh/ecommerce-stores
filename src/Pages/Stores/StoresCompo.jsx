import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
const StoresCompo = (props) => {
  const { storeItems, addToCart } = useContext(StoreContext);
  const { id, title, price, description, category, image, rating } = props.data;
  const { rate, count } = rating;

  const handleAddToCart = (id) => {
    if (storeItems[id] > 0) {
      return <span>({storeItems[id]})</span>;
    }
  };

  return (
    <div className="storeItem">
      <img src={image} alt={category} />
      <div className="itCred">
        <h3>{title}</h3>
        <h4>${price}</h4>
        <button className="btnCred1" onClick={() => addToCart(id)}>
          Add To Cart {handleAddToCart(id)}
        </button>
      </div>
    </div>
  );
};

export default StoresCompo;
