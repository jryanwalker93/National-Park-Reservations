/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_of_the_United_States_National_Park_Service.svg/1200px-Logo_of_the_United_States_National_Park_Service.svg.png" alt="nps logo" />
      <div className="title">
        National Park Reservation Availability
      </div>
    </div>
  );
};

export default Header;
