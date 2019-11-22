import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Display from './Display/Display'
import Navbar from './Navbar/Navbar'
import LandingPage from './LandingPage/LandingPage'
import FruitPage from './Fruits/FruitPage'
import VeggiePage from './Veggies/VeggiePage'
import SpacePage from './Space/SpacePage'

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />

        <Route exact path="/" >
          <LandingPage />
        </Route>

        <Route exact path="/Pure-CSS-Animations" >
          <LandingPage />
        </Route>

        <Route path="/FruitPage" component={FruitPage}>
        </Route>

        <Route path='/VeggiePage' component={VeggiePage}>
        </Route>

        <Route path='/SpacePage' component={SpacePage}>
        </Route>

      </Router>

    </div>
  );
}

export default App;
