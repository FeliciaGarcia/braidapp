import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../home/Home.js';
import Contact from '../contact/Contact.js';

const Routes = () => (
  <Router>
      <Scene key = "root">
          <Scene key = "home" component = {Home} title = "Home" initial = {true} />
          <Scene key = "contact" component = {Contact} title = "Contact" />
      </Scene>
  </Router>
);
export default Routes;
