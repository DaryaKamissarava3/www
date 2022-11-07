import Background from '../../assets/images/headerBackground.svg';
import TopSectionTitle from '../TopSectionTitle/topSectionTitle';
import './topSection.css'
import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const TopSection = () => {
  const userStatus = useSelector((state) => state.userReducer.isLogged);

  return (
    <div className="header" style={{ backgroundImage: 'url(' + Background + ')' }}>

      <TopSectionTitle />
      {!userStatus && <Navigate to="/login" />}
    </div>
  );
};

export default TopSection;