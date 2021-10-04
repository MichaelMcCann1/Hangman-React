import './App.css';
import React, { useState, useEffect } from 'react'
import Letter from './components/letter/Letter';
import Gallows from './components/gallows/Gallows';
import GameOver from './components/gameOver/GameOver';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  const wordList = ['computer','book','fishing','basement','control','insulate','package','customer','outside','electrical','result','rubber','register','dryer','mirror','calculator','binder','purse']

  const [currentWord, setCurrentWord] = useState('word')
  const [correctLetters, setCorrectLetters] = useState('')
  const [strikes, setStrikes] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [winLose, setWinLose] = useState('')
  const [resetClicked, setResetClicked] = useState(false)

  useEffect(() => {
    setCurrentWord(wordList[Math.floor(Math.random() * Math.floor(wordList.length))].toUpperCase())
  }, [])

  useEffect(() => {    
    setResetClicked(false)
    setCorrectLetters('_'.repeat(currentWord.length))
  }, [currentWord])

  useEffect(() => {
    if (correctLetters === currentWord) {
      gameOverScreen('win')
    }
  }, [correctLetters])

  useEffect(() => {
    if (strikes === 7) {
      gameOverScreen('lose')
    }
  }, [strikes])

  const checkLetter = function(letter){
    if (currentWord.includes(letter)) {
      let workingCorrectLetters = correctLetters
      for (let i=0; i<currentWord.length; i++) {
        if (currentWord[i] === letter) {
          let beforeLetter = workingCorrectLetters.substring(0,i)
          let afterLetter = workingCorrectLetters.substring(i+1)
          workingCorrectLetters = (beforeLetter + letter + afterLetter)
        }  
      }
      setCorrectLetters(workingCorrectLetters)
    } else {
      setStrikes(s => s + 1)
    }
  }

  const gameOverScreen = function(result){
    setGameOver(true)
    setTimeout(() => {
      if (result === 'win') setWinLose('win')
      else setWinLose('lose')
    }, 1000)
    
  }

  const resetGame = function(){
    setResetClicked(true)
    setStrikes(0)
    setWinLose('')
    setGameOver(false)
    setCurrentWord(wordList[Math.floor(Math.random() * Math.floor(wordList.length))].toUpperCase())
  }

  return (
    <>
      <a className="githubLink" href="https://github.com/MichaelMcCann1/Hangman-React"><img src="Images/GitHub.svg"></img></a>
      <div className="game">
        <Gallows strikes={strikes}/>
        <div className="word">
          <span className="correctLetters">{correctLetters}</span>
        </div>
        <div className="letters">
          <Letter letter='A' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='B' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='C' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='D' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='E' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='F' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='G' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='H' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='I' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='J' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='K' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='L' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='M' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='N' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='O' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='P' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='Q' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='R' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='S' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='T' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='U' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='V' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='W' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='X' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='Y' checkLetter={checkLetter} resetClicked={resetClicked}/>
          <Letter letter='Z' checkLetter={checkLetter} resetClicked={resetClicked}/>
        </div>
      </div>
      {gameOver && <div className={winLose ? 'grayScreen' : 'grayScreen active'}></div>}
      <GameOver gameOver={gameOver} winLose={winLose} resetGame={resetGame} currentWord={currentWord}/>
    </>
  );
}

export default App;