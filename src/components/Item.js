import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState('')
  function handleCart(event){
   if (inCart===''){setInCart("in-cart")}else{setInCart('')}
  }
  
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart?'Remove from Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;

//make state for inCart

//make callback function > setInCart
//add event listener to button
