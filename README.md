# Hangman-React

The classic game of Hangman. Try to solve the puzzle by guessing the correct letters. If you guess too many incorrect letters you lose!

This game was made with ReactJS and has a responsive design to fit any screen. This game is the same as the one I made [here with vanilla JavaScript](https://github.com/MichaelMcCann1/Hangman). Please refer to the other repository for a more in-depth explanation on how the code works and for an explanation of the variables.

<img src="https://github.com/MichaelMcCann1/Hangman/blob/main/hangmanScreenshot.png" height="300px">


## Code Explanation

### Choosing a Letter
Each letter you can click on in the game is a component called `<Letter />`. An `onClick` event listener is attached to the container `div` element of each letter. The function that is run when there is a click checks to see if the selected letter is contained in the current word of the game. But first it makes sure that the letter hasn't already been chosen. If it has then the function returns nothing.

``` javascript
const handleClick = function(){
    if (!clicked) {
      setClicked(true)
      checkLetter(letter)
    }
  }

return (
    <div onClick={() => handleClick()} className={clicked ? 'clicked' : ''}>
      <p>{letter}</p>
    </div>
  )
```

The game checks the selected letter using the same logic as the previous version of this game (see other repository). If the correct letter was selected then the program updates the state of `correctLetters` which is then updated on the screen. If the user selected a wrong letter then `setStrikes(s => s + 1)` is used to update the state of `strikes` by one.

### Updating the Gallows

The gallows is contained in a component called `<Gallows />`. The variable `strikes` is passed to the component as a prop. This props controls the display of the gallows and the body parts of the stickman. Each body part is rendered conditionally depending the value of `strikes`. The markup for the stickman is shown below.

``` javascript
<div className="person">
  {strikes >= 2 && <div className="head"></div>}
  {strikes >= 3 && <div className="torso"></div>}
  {strikes >= 4 && <div className="leftArm"></div>}
  {strikes >= 5 && <div className="rightArm"></div>}
  {strikes >= 6 && <div className="leftLeg"></div>}
  {strikes >= 7 && <div className="rightLeg"></div>}
</div> 
```

### Ending the game

The game is ended when either the player gets too many strikes or if they solve the puzzle. The `useEffect()` hook is used to check if there are too many strikes.

``` javascript
  useEffect(() => {
    if (strikes === 7) {
      gameOverScreen('lose')
    }
  }, [strikes])
```

Similarly the `useEffect()` hook is used to check if the player won.

``` javascript
useEffect(() => {
    if (correctLetters === currentWord) {
      gameOverScreen('win')
    }
  }, [correctLetters])
```

The `gameOverScreen()` function is called to show the popup screen which lets the player know if they won or lost the game. The argument passed to the function indicates if the player won or lost. The `gameOverScreen()` function makes a change to a `gameOver` variable which indicates that the game is over. If `gameOver` is equal to 'true' then the popup is conditionally rendered. The popup is another component that takes in props of if the player won or lost, the current word, and a function to reset the game. The content of the popup message is also conditionally rendered. 

``` javascript
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
```

The game is then reset when the player clicks on the 'Play Again' button. This completes an entire round of the game and a new round can be started.
