import React from 'react';
import './App.css'
import Lemon from './Lemon/Lemon'
import Blueberry from './Blueberry/Blueberry'
import Pear from './Pear/Pear'
import Pom from './Pom/Pom'
import Tomato from './Tomato/Tomato'



function App() {
  return (
    <div className='App'>

      {/* Lemon */}
      <Lemon />

      {/* Blueberry */}
      <Blueberry />

      {/* Pear */}
      <Pear />

      {/* Pomegranate */}
      <Pom />

      {/* Tomato */}
      <Tomato />

    </div >
  )
}

export default App;
