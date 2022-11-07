import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetails from "../ProductDetails/productDetails";
import MainPage from "../MainPage/mainPage";
import SignIn from "../SignIn/signIn";
import Cart from "../Cart/Cart";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:id" element={<ProductDetails />}/>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;