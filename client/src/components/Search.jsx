/* eslint-disable arrow-body-style */
import React from 'react';

const Search = ({ searchPark, getDate, fetchData }) => {
  return (
    <div>
      <input type="text" onChange={searchPark} />
      <input type="text" onChange={getDate} />
      <button type="submit" onClick={fetchData}>Search</button>
    </div>
  );
};

export default Search;
