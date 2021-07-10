import React from 'react'
import ToggleRow from './ToggleRow'
import './styles/toggle.css'

function Toggle(){
  return (

    <div className='toggle_container'>
      <ToggleRow/>
      <ToggleRow/>
      <ToggleRow/>
      <ToggleRow/>
    </div>

  )
}

export default Toggle