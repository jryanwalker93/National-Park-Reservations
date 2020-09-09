/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const axios = require('axios');
const campsites = require('../Campsite_to_ID.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/campsites', (req, res) => {
  const id = campsites[req.query.id].FacilityID;
  axios.get(`https://www.recreation.gov/api/camps/availability/campground/${id}/month?start_date=${req.query.date}T00%3A00%3A00.000Z`)
    .then((availability) => {
      res.send(availability.data.campsites);
    })
    .catch((err) => {
      console.log(`Error retrieving campsite availability ${err}`);
    });
});

app.listen(port, () => console.log(`MVP is hanging out at http://localhost:${port}`));
