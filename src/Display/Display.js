import React from 'react'
import './Display.scss'

function Display(props) {
  return (

    <div className='display_container'>
      <div className='title_container'>
        <h1 className='title'>{props.title}</h1>
      </div>
      {props.comp}
    </div>
  )
}

export default Display 