/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import React from 'react';
import Campsite from './Campsite.jsx';

const CampsiteList = ({ campsiteData, date }) => {
  return (
    <div className="campsiteList">
      {Object.keys(campsiteData).map((site) => (
        <div>
          <Campsite campsite={{ [site]: campsiteData[site] }} key={site} date={date} />
        </div>
      ))}
    </div>
  );
};

export default CampsiteList;
