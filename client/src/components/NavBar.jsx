/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import React from 'react';
import Search from './Search.jsx';
import '../styles/navBar.css';

const NavBar = ({ searchPark, getDate, fetchData }) => {
  return (
    <div className="NavBar">
      NavBar
      <Search searchPark={searchPark} getDate={getDate} fetchData={fetchData} />
    </div>
  );
};

export default NavBar;
