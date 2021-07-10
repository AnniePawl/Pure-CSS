import React from 'react'
import Lime from './Lime/Lime'
import Pear from './Pear/Pear'
// import Beet from './Beet/Beet'
import Circles from '../Circles/circles'
import Lemon from './Lemon/Lemon'
import Blueberry from './Blueberry/Blueberry'
import Ghost from '../Ghost/ghost'
import Watermelon from '../Fruits/Watermelon/Watermelon'
import Pom from './Pom/Pom'
import Orange from './Orange/Orange'
import './Fruits.css'
import Toggle from '../Toggle/Toggle'



const bag = [
  // {
  //   title: "Lively Lime",
  //   desc: "https://codepen.io/annampawl/pen/BaaZYjM",
  //   comp: < Lime />
  // },
  // {
  //   title: "Playful Pomegranate",
  //   desc: '<Link to="https://codepen.io/annampawl/pen/rNNwpRO">CodePen</Link>',
  //   comp: <Pom />
  // },
  {
    comp: <Toggle/>
  },
  {
    comp: <Circles/>
  },

  {
    comp: <Ghost/>
  },

  {
    comp: <Watermelon/>
  },


  {
    // title: "Bouncing  Bloobs",
    desc: "Roses are red, blueberries are blue-ish",
    comp: <Blueberry />
  },
  {
    // title: "Percolating Pear",
    desc: "Hello there my perfect pear! You're a fruit beyond compare ",
    comp: <Pear />
  },
  // {
  //   title: "Watermelon",
  //   desc: "So watery and not very good",
  //   comp: <Watermelon />
  // },


  {
    // title: "Lemon",
    desc: "I cannot stop crying. There is lemon in my eyes. Juicy",
    comp: < Lemon />
  },
  // {
  //   title: "Orange",
  //   desc: "Orange You Glad Blah Blah",
  //   comp: < Orange />
  // },



]



export default bag