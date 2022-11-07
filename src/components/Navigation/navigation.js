import './navigation.css';
import SignOut from '../SignOut/signOut';
import WishList from '../WishList/wishList';
import React, {useState} from 'react';
import Modal from '../Modal/modal';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Navigation = ({classForNav, blockTitle, fill, updateClassStatus, updateDataSearch}) => {

  const [modalActive, setModalActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const products = useSelector((state) => state.productsReducer.products);
  const cartItemsAmount=useSelector((state)=>state.cartReducer.cart);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const findMatchesInArray = (value) => {
    const string = value.toString().toLowerCase();
    return products.filter(function (o) {
      return Object.keys(o).some(function (k) {
        return o[k].toString().toLowerCase().indexOf(string) !== -1;
      });
    });
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const res = findMatchesInArray(searchValue);
      if (res.length === 0) {
        alert('No beauty products found');
        return;
      }
      updateClassStatus((prevState) => !prevState);
      updateDataSearch(res);
    }
  }

  return (
    <>
      <header className="navigation-block">
        <nav className="nav">
      <span className="nav-block">
          <a href="#" className={classForNav}>
            NEW ARRIVALS
          </a>
          <Link to={`/`} className={classForNav}>
                  SHOP
          </Link>
          <a href="#" className={classForNav}>
            COLLECTIONS
          </a>
        </span>
          <span className={blockTitle}>
           <p>MODNIKKY</p>
        </span>
          <span className="nav-block nav-block-3">
            <button className="search-btn" onClick={() => setModalActive(true)}>
              SEARCH
           </button>
            <a href="#" className={classForNav}>
              <SignOut/>
           </a>

            <Link to={`/cart`} className={classForNav}>
                  BAG
              <span className="cart-items-amount">({cartItemsAmount.length})</span>
            </Link>

            <a href="#" className={classForNav}>
              <WishList fill={fill}/>
            </a>
          </span>
        </nav>
      </header>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal-container">
          <input className="modal-input" type="text" onChange={handleInput} onKeyDown={handleKeyDown}/>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;