import React, { Component } from "react";
import { randomWord } from "./Words.js";
import styled from "styled-components";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [forca0, forca1, forca2, forca3, forca4, forca5, forca6],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    };
  }

  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  guessedWord() {
    return this.state.answer
      .toUpperCase()
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz"
      .toUpperCase()
      .split("")
      .map((letter) => (
        <LetterButton
          key={letter}
          value={letter}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(letter)}
        >
          {letter}
        </LetterButton>
      ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    });
  };

  ButtonGame() {
    return (
      <div className="content-button">
        <ChooseWordButton>Escolher Palavra</ChooseWordButton>
      </div>
    );
  }

GuessWord() {
    return (
      <Input>
        <p>Já sei a palavra!</p>
        <input />
        <GuessButton>Chutar</GuessButton>
      </Input>
    );
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "Ganhou";
    }

    if (gameOver) {
      gameStat = "Perdeu";
    }



    return (
      <div className="Hangman container">
        <TextCenter>
          <Image src={this.props.images[this.state.mistake]} alt="" />
          <this.ButtonGame />
        </TextCenter>
        <div className="text-center">
          <Text>{!gameOver ? this.guessedWord() : this.state.answer}</Text>
          <LetterContainer>
            <p>{gameStat}</p>
          </LetterContainer>
          <this.GuessWord />
          <ResetContainer>
            <ResetButton onClick={this.resetButton}>
            Reset
          </ResetButton>
          </ResetContainer>
          
        </div>
      </div>
    );
  }
}

export default Hangman;

const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LetterContainer = styled.div`
  width: 650px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const LetterButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #d9e5f1;
  border: 2px solid #84a3c1;
  color: #4578c5;
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

const TextCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Image = styled.img`
  width: 400px;
  height: 450px;
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

const Input = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 350px;
    height: 30px;
    border-radius: 5px;
    color: #84a3c1;
    border: 2px solid gray;
    box-shadow: 0 0 2px gray;
  }
  p {
    font-size: 20px;
    margin-right: 10px;
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

const ResetButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  background-color: lightpink;
  border: 2px solid red;
  color: red;
  cursor: pointer;
`

const ResetContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`