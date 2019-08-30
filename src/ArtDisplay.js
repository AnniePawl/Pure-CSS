import React from 'react';
import Title from './Title'

function ArtDisplay(props) {
  return (
    <div>
      <Title title={props.title}
        subtitle={props.subtitle} />
      {/* {props.component} */}
    </div >

  )
}


export default ArtDisplay;