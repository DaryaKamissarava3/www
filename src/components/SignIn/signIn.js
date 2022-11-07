import React from 'react';
import {Navigate} from 'react-router-dom';
import allActions from "../../redux/actions";
import {useSelector, useDispatch} from 'react-redux';
import './signIn.css';

const SignIn = () => {
  const userStatus = useSelector((state) => state.userReducer.isLogged);
  const dispatch = useDispatch();

  const checkLog = () => {
    dispatch(allActions.userActions.logIn(true));
  };

  return (
    <>
      <div className="auth-block">
        <form className="authorization-form">
          <div className="authorization_title">CREATE ACCOUNT</div>
          <input
            placeholder="First Name"
            type="text"
            className="authorization-input"

          />
          <input
            placeholder="Last Name"
            type="text"
            className="authorization-input"

          />
          <input
            placeholder="Email"
            type="email"
            className="authorization-input"

          />
          <input
            placeholder="Password"
            type="password"
            className="authorization-input"

          />
          <div className="authorization-terms">
            <input
              className="authorization-checkbox"
              type="checkbox"
            />
            Let's get personal! We'll send you only the good stuff:<br/>
            Exclusive early access to Sale, new arrivals and
            promotions. No nasties.
          </div>
          <div className="authorization-terms-rules">
            By signing up you agree to <a href="#" className="auth-links">Terms of Service</a> and <a href="#" className="auth-links">
            Privacy Policy
          </a>
          </div>
          <div>
            <button
              type="submit"
              className="authorization-button"
              onClick={checkLog}
            >
              Sign in
            </button>
          </div>
          <div className="have-an-account">
            <a href="#" className="auth-links">I HAVE AN ACCOUNT</a>
          </div>
        </form>
      </div>
      {!!userStatus && <Navigate to="/"/>}
    </>
  );
};


export default SignIn;