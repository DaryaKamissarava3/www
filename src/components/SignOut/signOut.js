import './signOut.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import allActions from "../../redux/actions";
import { useDispatch } from 'react-redux';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(allActions.userActions.logOut());
    navigate('/');
  };

  return (
    <p className="underline-item" onClick={logout} >SIGN OUT</p>
  );
};

export default SignOut;