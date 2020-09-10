/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import CampsiteList from './CampsiteList.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <CampsiteList />
      </div>
    );
  }
}

export default App;
