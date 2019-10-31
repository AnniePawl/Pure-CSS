import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import bag from './Fruits'
// import Display from './Display/Display'
import Navbar from './Navbar/Navbar'
import LandingPage from './LandingPage/LandingPage'
import Profile from './Profile/Profile'


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
        {/* <LandingPage /> */}

        {/* 
        {things}
        */}

        <Route exact path="/profile" >
          <Profile />
        </Route>

        <Route path="/" >
          <LandingPage />
        </Route>


      </Router>


    </div>
  );
}

export default App;
