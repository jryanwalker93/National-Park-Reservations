/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/campsite.css';
import AvailCalendar from './AvailCalendar.jsx';

const Campsite = ({ campsite, date }) => {
  const campsiteName = Object.keys(campsite)[0];
  return (
    <div className="campsite">
      {campsiteName}
      <AvailCalendar availability={campsite[campsiteName]} dates={date} />
    </div>
  );
};

export default Campsite;
