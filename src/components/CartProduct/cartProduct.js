import React, {useState} from 'react';
import './cartProduct.css';
import {useDispatch} from "react-redux";
import allActions from "../../redux/actions";

const CartProduct = ({cartItem}) => {

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(allActions.cartActions.removeFromCart(cartItem));
  };

  const imageURL = cartItem.images[0].toString();

  const [select, setSelect] = useState("");
  const amountOfProduct = [1, 2, 3, 4, 5];
  const options = amountOfProduct.map((amountOfProduct, i) =>
    <option key={i}>{amountOfProduct}</option>
  );
  console.log(cartItem.price.value*select);

  return (
    <>
      <div className="cart-inner">
        <div className="cart-images ">
          <div>
            <img src={imageURL} className="cart-img" alt="img"/>
          </div>
        </div>
        <div className="cart-item-description">
          <div className="cart-description">{cartItem.description}</div>
          <div className="prod-price">
            <span className="prod-price-currency">{cartItem.price.currency}</span>
            $
            <span>{cartItem.price.value}</span>
          </div>

          <div>
            COLOR
            <div className="prod-color-square" style={{
              backgroundColor: `${cartItem.color.hex}`,
            }}/>
          </div>
          <div className="cart-sizes">{cartItem.availableSizes}</div>

          <div className="cart-quantity">
            QUANTITY:
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="select-quantity"
            >
              {options}
            </select>
            {/*<span>{quantity}</span>*/}
            {/*<button onClick={() =>quantityDispatch(allActions.cartActions.increaseItemQuantity())}>+</button>*/}
            {/*<button onClick={() =>quantityDispatch(allActions.cartActions.decreaseItemQuantity())}>-</button>*/}
          </div>
          <button
            style={{color: "grey"}}
            onClick={removeItem}
          >
            REMOVE
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;