import React from 'react';
import ArtDisplay from './ArtDisplay'
import Title from './Title';
import SmileyFace from './SmileyFace'
import Portrait from './Portrait'
import Lemon from './Lemon'

import './App.css'


function App() {
  return (
    <div>
      {/* Heading */}
      <Title title='Cascading Style Sheets Art Collection' />

      <div className='display'>
        {/* Smiley Face Art */}
        <ArtDisplay title='Derpy Face' />
        <SmileyFace />



        {/* Portrait Art */}
        <ArtDisplay title='Self Portrait' />
        <Portrait />

        {/* Lemon Art */}
        <ArtDisplay title='Lousy Lemon' />
        <Lemon />

      </div>

    </div>
  )
}

export default App;
