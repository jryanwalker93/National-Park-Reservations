/* eslint-disable */

const express = require('express');
const fs = require('fs');
const data = require('../data/Park_to_Campsite');


let output = {};

for (var i = 0; i < data.length; i++ ){
  if (data[i]['RecAreaName'] !== '#N/A' && data[i]['FacilityName'] !== '#N/A'){
    if (!output[data[i]['RecAreaName']]){
      output[data[i]['RecAreaName']] = [
        {
          'facilityID': data[i]['FacilityID'],
          'facilityName': data[i]['FacilityName']
        }
      ];
    } else {
      output[data[i]['RecAreaName']].push({
        'facilityID': data[i]['FacilityID'],
        'facilityName': data[i]['FacilityName']
      })
    }
  }
}

output = JSON.stringify(output, null, 2);
fs.writeFile('campsiteData_2.js', output, (err) =>{
  if (err) {
    console.log(err);
  }
});

// console.log(output);