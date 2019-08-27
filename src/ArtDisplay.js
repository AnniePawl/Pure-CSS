import React from 'react';
import Title from './Title'

function ArtDisplay(props) {
  return (
    <div>
      <Title title={props.title} description={props.description} />

    </div >

  )
}


export default ArtDisplay;