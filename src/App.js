import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import bag from './Fruits'
// import Display from './Display/Display'
import Navbar from './Navbar/Navbar'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'
import FruitPage from './Fruits/FruitPage'


function App() {

  // const things = bag.map((item) => {
  //   return (


  //     <Display
  //       title={item.title}
  //       desc={item.desc}
  //       comp={item.comp}
  //     />)
  // })

  return (
    <div className="App">

      <Router>
        <Navbar />


        <Route path="/" >
          <LandingPage />
        </Route>


        {/* 
        {things}
        */}

        <Route exact path="/Profile" exact component={Profile}>
        </Route>

        <Route exact path="/FruitPage" exact component={FruitPage}>
        </Route>



      </Router>


    </div>
  );
}

export default App;
