/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import CampsiteList from './CampsiteList.jsx';
import testData from '../../../data/testZionData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campsites: testData,
      formattedAvail: {},
    };

    this.formatData = this.formatData.bind(this);
    this.renderData = this.renderData.bind(this);
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
          for (const date in availability) {
            // console.log('DATES: ', availability[date])
            if (availability[date] === 'Available') {
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
    return (
      <div>
        <button type="submit" onClick={this.renderData}>Lets do some testing</button>
        <Header />
        <NavBar />
        <CampsiteList />
      </div>
    );
  }
}

export default App;
