import React, {useState} from 'react';
import './bagButton.css';
import allActions from "../../redux/actions";
import {useDispatch} from "react-redux";


const BagButton = ({inf}) => {
  const [disableBtn,setDisableBtn]=useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(allActions.cartActions.addToCart(inf));
    setDisableBtn(true);
  };

  return (
    <>
      <button
        className={disableBtn===false ? 'add-to-bag-button' : 'disable-btn'}
        onClick={addToCart}
        disabled={disableBtn}
      >
        ADD TO BAG
      </button>
    </>
  );
};

export default BagButton;