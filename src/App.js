import React from 'react';
import './App.css'
import Display from './Display'
import fruit_bag from './Fruits'

function App() {
  const fruit_things = fruit_bag.map((item) => {
    console.log(item)
    return (
      <Display
        component={item.component}
      />
    )
  })
  return (
    <div className='App'>
      {fruit_things}
    </div >
  )
}

export default App;
