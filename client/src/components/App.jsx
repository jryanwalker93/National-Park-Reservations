/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import CampsiteList from './CampsiteList.jsx';
import testData from '../../../data/testZionData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: '',
      formattedAvail: {},
      searchDate: '',
    };

    this.formatData = this.formatData.bind(this);
    this.renderData = this.renderData.bind(this);
    this.searchPark = this.searchPark.bind(this);
    this.getDate = this.getDate.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  getDate(event) {
    this.setState({
      searchDate: event.target.value,
    });
  }

  searchPark(event) {
    this.setState({
      campsites: event.target.value,
    });
  }

  fetchData(event) {
    const { campsites, searchDate } = this.state;
    event.preventDefault();
    console.log('CAMPSITES: ', campsites)
    console.log('SEARCHDATE: ', searchDate)
    axios.get('/campsites', {
      params: {
        id: campsites,
        date: searchDate,
      },
    })
      .then((campsiteData) => {
        console.log('RETURNED FROM SERVER: ', campsiteData);
        this.formatData(campsiteData.data);
      });
  }

  formatData(campsiteData) {
    const formatted = {};
    for (let i = 0; i < campsiteData.length; i++) {
      const name = campsiteData[i];
      for (const campgroundName in name) {
        formatted[campgroundName] = {};
        const allCampsites = name[campgroundName];
        // console.log('CAMPSITE: ', campsite);
        for (const campsite in allCampsites) {
          const availability = allCampsites[campsite].availabilities;
          // console.log('SITE DATA: ', allCampsites[campsite].availabilities);
          for (let date in availability) {
            // console.log('DATES: ', availability[date])
            if (availability[date] === 'Available') {
              date = date.slice(0, 10);
              if (!formatted[campgroundName][date]) {
                formatted[campgroundName][date] = {
                  numAvail: 1,
                  sites: [campsite],
                };
              } else {
                formatted[campgroundName][date].numAvail++;
                formatted[campgroundName][date].sites.push(campsite);
              }
            }
          }
        }
      }
    }
    this.setState({
      formattedAvail: formatted,
    });
  }

  renderData(event) {
    const { campsites } = this.state;
    event.preventDefault();
    this.formatData(campsites);
  }

  render() {
    const { formattedAvail, searchDate } = this.state;
    return (
      <div>
        <button type="submit" onClick={this.renderData}>Lets do some testing</button>
        <Header />
        <NavBar searchPark={this.searchPark} getDate={this.getDate} fetchData={this.fetchData} />
        <CampsiteList campsiteData={formattedAvail} date={searchDate} />
      </div>
    );
  }
}

export default App;
