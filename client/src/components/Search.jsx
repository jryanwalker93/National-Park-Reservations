/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const Search = ({ searchPark, getDate, fetchData }) => {
  return (
    <div>
      <input className="input" type="text" placeholder="Park Name" onChange={searchPark} />
      <br />
      <input className="input" type="text" onChange={getDate} placeholder="Date" />
      <br />
      <button className="search" type="submit" onClick={fetchData}>Search</button>
    </div>
  );
};

export default Search;
