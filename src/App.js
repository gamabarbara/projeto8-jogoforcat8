import React from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import { RandomWord } from "./palavras";

export default function App(props) {
  return (
    <>
      <div className="content">
        <GameImage />
        <ButtonGame />
        <div className="content-gessing">
          <RandomWord />
        </div>
      </div>
      <div className="letters">
        <Letter name={props.name} />
      </div>
      <GuessWord />
    </>
  );
}

function Letter() {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="letters-container">
      {alfabeto.map((a) => (
        <div>
          <button className="letter-button">{a.toUpperCase()}</button>
        </div>
      ))}
    </div>
  );
}

function GameImage() {
  return (
    <div className="content-image">
      <img src={forca0} />
    </div>
  );
}

function ButtonGame() {
  return (
    <div className="content-button">
      <button className="content-button-button" onClick={RandomWord}>Escolher Palavra</button>
    </div>
  );
}

function GuessWord() {
  return (
    <div className="input">
      <p className="text">Já sei a palavra!</p>
      <input />
      <button className="guess-button">Chutar</button>
    </div>
  );
}

function StepsGame(props) {
  const [errors, setErrors] = React.useState(0)
  const [word, setWord] = React.useState()
  const steps = {
    maxErrors: 6, 
    steps: [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  }
}
