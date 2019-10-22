import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Link } from 'react-router-dom'
import Display from './Display/Display'
import FruitBag from './Fruits/FruitItems'
import NavBar from './NavBar/Navbar'
import ReactGA from 'react-ga'

const trackingId = "UA-150726179-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  // userId: auth.currentUserId(),
  // // any data that is relevant to the user session
  // // that you would like to track with google analytics
})

function App() {

  const fruit_things = FruitBag.map((item) => {
    return (


      <Display
        title={item.title}
        desc={item.desc}
        comp={item.comp}
      />)
  })

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        {fruit_things}

      </div >
    </BrowserRouter>
  );
}

export default App;
