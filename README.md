# Hangman-React

The classic game of Hangman. Try to solve the puzzle by guessing the correct letters. If you guess too many incorrect letters you lose!

This game was made with ReactJS and has a responsive design to fit any screen. This game is the same as the one I made [here with vanilla JavaScript](https://github.com/MichaelMcCann1/Hangman). Please refer to the other repository for a more in-depth explanation on how the code works and for an explanation of the variables.

<img src="https://github.com/MichaelMcCann1/Hangman/blob/main/hangmanScreenshot.png" height="300px">


## Code Explanation

### Choosing a Letter
Each letter you can click on in the game is a component called `Letter`. An `onClick` event listener is attached to container `div` of each letter. The function that is run when there is a click checks to see if the selected letter is contained in the current word of the game. But first it makes sure that the letter hasn't already been chosen. If it has then the function returns nothing.

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

The game checks the selected letter using the same logic as the prvious version of this game (see other repository). If the correct letter was selected then the program updates the state of `correctLetters` which is then updated on the screen. If the user selected a wrong letter then `setStrikes(s => s + 1)` is used to update the state of `strikes` by one.

### Updating the Gallows
