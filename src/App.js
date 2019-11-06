import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import bag from './Fruits'
// import Display from './Display/Display'
import Navbar from './Navbar/Navbar'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import FruitPage from './Fruits/FruitPage'
import BugPage from './Bugs/BugPage'
import CandyPage from './Candy/CandyPage'
import PlantPage from './Plants/PlantPage'
import VeggiePage from './Veggies/VeggiePage'

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />

        <Route exact path="/" >
          <LandingPage />
        </Route>

        <Route path="/Profile" component={Profile}>
        </Route>

        <Route path="/BugPage" component={BugPage}>
        </Route>

        <Route path='/CandyPage' component={CandyPage}>
        </Route>

        <Route path="/FruitPage" component={FruitPage}>
        </Route>

        <Route path='/PlantPage' component={PlantPage}>
        </Route>

        <Route path='/VeggiePage' component={VeggiePage}>
        </Route>

      </Router>

    </div>
  );
}

export default App;
