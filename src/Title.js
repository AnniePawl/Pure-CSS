import React from 'react';
import './App.css'

function Title(props) {
  return (
    <div>
      <h1 className='title'>{props.title}</h1>
      <p className='description'>{props.description}</p>
    </div>
  )
}
export default Title; 