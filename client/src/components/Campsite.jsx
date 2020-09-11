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
      <div className="name">{campsiteName}</div>
      <AvailCalendar
        availability={campsite[campsiteName]}
        campsiteName={campsiteName}
        dates={date}
      />
      <div id={`${campsiteName} open-sites`} className="not-visible">
        Sites Available:
        <div id={`${campsiteName} sites`}></div>
      </div>
    </div>
  );
};

export default Campsite;
