import React from 'react';
import Title from './Title'

function ArtDisplay(props) {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {/* {props.component} */}
    </div >

  )
}


export default ArtDisplay;