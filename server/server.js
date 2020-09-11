/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const axios = require('axios');
const campsites = require('../data/campsiteData.js');
const { cache } = require('./cache');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/campsites', (req, res) => {
  // get campgrounds by park name from campground data
  const campgrounds = campsites[req.query.id];
  // function to make all the API calls necessary & return results of calls
  function aggregate(data) {
    // create array of promises to give to Promise.all
    const allRequests = data.map((campsite) => {
      const cacheKey = `${campsite.facilityID} - ${req.query.date}`;
      // check if data is cached, if so just return from cache
      if (cache.get(cache)) {
        console.log('cached');
        return cache.get(cacheKey);
      }
      // if not cached, make api call
      return axios.get(`https://www.recreation.gov/api/camps/availability/campground/${campsite.facilityID}/month?start_date=${req.query.date}T00%3A00%3A00.000Z`)
        .then((availability) => {
          // add data to cache & return
          cache.set(cacheKey, { [campsite.facilityName]: availability.data.campsites });
          return { [campsite.facilityName]: availability.data.campsites };
        });
    });
    // call Promise.all to make sure all api calls resolve before returning
    return Promise.all(allRequests);
  }

  aggregate(campgrounds)
    .then((aggregateAvail) => {
      console.log(aggregateAvail);
      res.status(200).send(aggregateAvail);
    })
    .catch((err) => {
      console.log(`Error retrieving availability ${err}`);
    });
});

app.listen(port, () => console.log(`MVP is hanging out at http://localhost:${port}`));
