import React from 'react'
import './gameOver.css'

export default function GameOver({winLose, resetGame, currentWord}) {

  return (
    <>
      {winLose && <div className="popup">
        <h1>{winLose === 'win' ? 'YOU WIN!' : 'YOU LOSE...'}</h1>
        {winLose === 'lose' && <h2>THE ANSWER WAS
          <br></br>
          <span className="answer">{currentWord}</span>
        </h2>}
        <button className="playAgain" onClick={() => resetGame()}>Play Again</button>
      </div>}
    </>
  )
}
