import React from "react";
import Pear from "../Pear/Pear";
import Stripes from "../Stripes/Stripes";
import Rainbow from "../Rainbow/Rainbow";
import Cat from "../Cat/Cat.js";
import Shelf from "../Bookshelf/Shelf";
import Books from "../Bookshelf/Books";
import Radio from "../Bookshelf/Radio";
import TapeMeasurePinCushion from "../Bookshelf/sewing/tape-measure-pin-cushion";
import SewingMachine from "../Bookshelf/sewing/sewing-machine";
import Container from "../Bookshelf/Container";
import Writing from "../Bookshelf/Writing";
import Laptop from "../Bookshelf/Laptop";
import Dessert from "../Bookshelf/dessert/Dessert";
import Plant from "../Bookshelf/plant/Plant";
import DigitalClock from "../Bookshelf/DigitalClock";
import NewtonsCradle from "../Bookshelf/NewtonsCradle";

// Animation Components
const animations = [
  // { comp: <Books /> },
  { comp: <Container item={<NewtonsCradle />} /> },
  { comp: <Container item={<DigitalClock />} /> },
  { comp: <Container item={<Plant />} /> },
  { comp: <Container item={<Dessert />} /> },
  { comp: <Container item={<Radio cn={"pink-radio"} />} /> },
  { comp: <Container item={<Laptop />} /> },
  { comp: <Container item={<Writing />} /> },
  { comp: <SewingMachine /> },
  { comp: <TapeMeasurePinCushion /> },
  { comp: <Radio /> },
  { comp: <Shelf /> },
  { comp: <Cat /> },
  { comp: "HI" },
  { comp: <Pear /> },
  { comp: <Stripes /> },
  { comp: <Rainbow /> },
];

export default animations;
