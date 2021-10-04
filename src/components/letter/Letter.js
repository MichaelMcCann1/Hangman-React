import React, { useState, useEffect } from 'react'
import './letter.css'

export default function Letter({letter, checkLetter, resetClicked}) {

  const [clicked, setClicked] = useState(false)

  const handleClick = function(){
    if (!clicked) {
      setClicked(true)
      checkLetter(letter)
    }
  }

  useEffect(() => {
    setClicked(false)
  }, [resetClicked])

  return (
    <div onClick={() => handleClick()} className={clicked ? 'clicked' : ''}>
      <p>{letter}</p>
    </div>
  )
}
