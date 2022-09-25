import React from "react";
import { RandomWord } from "./palavras";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <Content>
        <GameImage />
        <ButtonGame />

        <RandomWord />
      </Content>
      <div className="letters">
        <Letter name={props.name} />
      </div>
      <GuessWord />
    </>
  );
}

function Letter() {
  const letters = [
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
    <LettersContainer>
      {letters.map((l, index) => (
        <div key={index}>
          <LetterButton>{l.toUpperCase()}</LetterButton>
        </div>
      ))}
    </LettersContainer>
  );
}

function GameImage() {
  return (
    <>
      <Image src={forca0} />
    </>
  );
}

function ButtonGame() {
  return (
    <div className="content-button">
      <ChooseWordButton onClick={RandomWord}>Escolher Palavra</ChooseWordButton>
    </div>
  );
}

function GuessWord() {
  return (
    <Input>
      <Text>Já sei a palavra!</Text>
      <input />
      <GuessButton>Chutar</GuessButton>
    </Input>
  );
}

function StepsGame(props) {
  const [errors, setErrors] = React.useState(0);
  const [word, setWord] = React.useState();
  const steps = {
    maxErrors: 6,
    steps: [forca0, forca1, forca2, forca3, forca4, forca5, forca6],
  };
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LettersContainer = styled.div`
  padding-top: 100px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LetterButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: #d9e5f1;
  border: 2px solid #84a3c1;
  color: #4578c5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
  cursor: pointer;
  box-shadow: 0 4px #999;
  outline: none;
  &:hover {
    background-color: #a3bed8;
    transition: all 400ms;
    &:active {
      background-color: #657d93;
      box-shadow: 0 5px #666;
      transform: translateY(5px);
    }
  }
`;

const ChooseWordButton = styled.button`
  background-color: #27ae60;
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  border: none;
  box-shadow: 0 0 5px #000000;
  margin-left: 100px;
  margin-top: 30px;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 18px;
  margin-right: 15px;
  font-family: "Roboto", sans-serif;
`;

const Input = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  input {
    width: 350px;
    height: 30px;
    border-radius: 5px;
    color: #84a3c1;
    border: 2px solid gray;
    box-shadow: 0 0 2px gray;
  }
`;

const GuessButton = styled.button`
  width: 80px;
  height: 40px;
  margin-left: 15px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  background-color: #d9e5f1;
  border: 2px solid #84a3c1;
  color: #4578c5;
  cursor: pointer;
`;

const Image = styled.img`
  width: 400px;
  height: 450px;
`;
