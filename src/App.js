import React from 'react';
import ArtDisplay from './ArtDisplay'
import Title from './Title';
import SmileyFace from './SmileyFace'
import Portrait from './Portrait'
import Lemon from './Lemon'
import Olive from './Olive'
import Pickle from './Pickle'


import './App.css'


function App() {
  return (
    <div>
      {/* Heading */}
      <Title title='Cascading Style Sheets Art Collection' />

      <div className='display'>

        {/* Smiley Face Art */}
        <div className='art_container'>
          <ArtDisplay title='Derpy Face' />
          <SmileyFace />
        </div>

        {/* Lemon Art */}
        <div className='art_container'>
          <ArtDisplay title='Lousy Lemon' />
          <Lemon />
        </div>


        {/* Pickle Art */}
        <div className='art_container'>
          <ArtDisplay title="I'm Kind of a Big Dill" />
          <Pickle />
        </div>

        {/* Olive Art */}
        <div className='art_container'>
          <ArtDisplay title='Olive You So Much It Hurts' />
          <Olive />
        </div>


        {/* Tomato  Art */}

        {/* Portrait Art */}
        <div className='art_container'>
          <ArtDisplay title='Self Portrait' />
          <Portrait />
        </div>


      </div>

    </div >
  )
}

export default App;
