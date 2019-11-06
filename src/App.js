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


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />


        <Route exact path="/" >
          <LandingPage />
        </Route>

        <Route exact path="/Profile" exact component={Profile}>
        </Route>

        <Route exact path="/BugPage" exact component={BugPage}>
        </Route>

        <Route exact path="/FruitPage" exact component={FruitPage}>
        </Route>





      </Router>


    </div>
  );
}

export default App;
