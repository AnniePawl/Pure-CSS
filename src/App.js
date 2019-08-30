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
      <Title title='Advanced Cascading Style Sheets ' subtitle="Art Collection" />


      <div className='display'>

        <div
          className='art_container'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ArtDisplay subtitle='Derpy Face' />
          <div style={{
            backgroundColor: 'red',
            width: '130px',
            height: '130px'
          }}>

          </div>
        </div>

        {/* Smiley Face Art */}
        <div className='art_container'>
          <ArtDisplay subtitle='Derpy Face' />
          <SmileyFace />
        </div>

        {/* Lemon Art */}
        <div className='art_container'>
          <ArtDisplay subtitle='Lousy Lemon' />
          <Lemon />
        </div>


        {/* Pickle Art */}
        <div className='art_container'>
          <ArtDisplay subtitle="I'm Kind of a Big Dill" />
          <Pickle />
        </div>

        {/* Olive Art */}
        <div className='art_container'>
          <ArtDisplay subtitle='Olive You So Much It Hurts' />
          <Olive />
        </div>


        {/* Tomato  Art */}

        {/* Portrait Art */}
        <div className='art_container'>
          <ArtDisplay subtitle='Self Portrait' />
          <Portrait />
        </div>


      </div>

    </div >
  )
}

export default App;
