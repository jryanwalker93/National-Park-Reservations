/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import React from 'react';
import Search from './Search.jsx';
import '../styles/navBar.css';

const NavBar = ({ searchPark, getDate, fetchData }) => {
  return (
    <div className="NavBar">
      <div className="heading">
        Search for a park:
      </div>
      <Search searchPark={searchPark} getDate={getDate} fetchData={fetchData} />
    </div>
  );
};

export default NavBar;
