import React from 'react';
import logo from './logo.svg';
import './App.css';
import Firstdiv from './Firstdiv.js';
import Seconddiv from './Seconddiv.js';
import Thirddiv from './Thirddiv.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      <Firstdiv/>
      <Seconddiv/>
      <Thirddiv/>
      </div>
      </Router>
    )
}

export default App;
