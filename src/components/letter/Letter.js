import React, { useState, useEffect } from 'react'
import './letter.css'

export default function Letter({letter, checkLetter, resetClicked}) {

  const [clicked, setClicked] = useState(false)

  const handleClick = function(){
    setClicked(true)
    checkLetter(letter)
  }

  useEffect(() => {
    setClicked(false)
  }, [resetClicked])

  return (
    <div onClick={clicked ? undefined : () => handleClick()} className={clicked ? 'clicked' : ''}>
      <p>{letter}</p>
    </div>
  )
}
