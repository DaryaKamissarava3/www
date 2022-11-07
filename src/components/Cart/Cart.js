import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Navigation from "../Navigation/navigation";
import CartProduct from "../CartProduct/cartProduct";
import './cart.css';
import VisaLogo from '../../assets/images/cart/visa-logo.svg';
import CreditCartLogo from '../../assets/images/cart/maestro-logo.svg';
import Subscription from "../Subscription/subscription";
import Footer from "../Footer/footer";

const Cart = () => {
  const allProductsInCart = useSelector((state) => state.cartReducer.cart);

  const countTotalSum = (arrOfProducts) => {
    let sum = 0;
    arrOfProducts.map((item) => {
      sum += Number(item.price.value);
    })
    return sum;
  }

  return (
    <>
      <Navigation blockTitle="black-title" classForNav="nav-link-black" fill="black"/>
      <div className="cart-container">
        <div className="cart-title">
          <span className="cart-title-text">BAG</span>
          <span className="cart-count">({allProductsInCart.length})</span>
        </div>
        {allProductsInCart.map((item) =>
          (
            <CartProduct
              cartItem={item}
              key={item.id}
            />
          ))}
        <div className="total-sum">
          Total $
          {countTotalSum(allProductsInCart)}
        </div>
        <button className="btn-checkout">PROCEED TO CHECKOUT</button>
        <div className="bank-cart-img">
          <img src={CreditCartLogo} className="bankCart-first-img" alt="maestro-logo.svg"/>
          <img src={VisaLogo} className="bankCart-second-img" alt="visa-logo.svg"/>
        </div>
      </div>
      <Subscription/>
      <Footer/>
    </>
  );
};

export default Cart;