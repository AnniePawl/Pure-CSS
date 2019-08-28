import React from 'react';
import ArtDisplay from './ArtDisplay'
import Title from './Title';
import SmileyFace from './SmileyFace'
import Portrait from './Portrait'
import Lemon from './Lemon'
import Olive from './Olive'


import './App.css'


function App() {
  return (
    <div>
      {/* Heading */}
      <Title title='Cascading Style Sheets Art Collection' />

      <div className='display'>

        <div className='art_container'>
          {/* Smiley Face Art */}
          <ArtDisplay title='Derpy Face' />
          <SmileyFace />
        </div>

        <div className='art_container'>
          {/* Olive Art */}
          <ArtDisplay title='Olive You So Much It Hurts' />
          <Olive />
        </div>

        <div className='art_container'>

          {/* Lemon Art */}
          <ArtDisplay title='Lousy Lemon' />
          <Lemon />
        </div>

        {/* Tomato  Art */}

        <div className='art_container'>
          {/* Portrait Art */}
          <ArtDisplay title='Self Portrait' />
          <Portrait />
        </div>


      </div>

    </div >
  )
}

export default App;
