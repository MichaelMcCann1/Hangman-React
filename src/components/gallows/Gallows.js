import React from 'react'
import "./gallows.css"

export default function Gallows({strikes}) {
  return (
    <div className="gallowsContainer">
      <div className="gallows">
        {strikes >= 1 && <div className="frame">
          <div className="bottom"></div>
          <div className="post"></div>
          <div className="top"></div>
          <div className="down"></div>
          <div className="angle"></div>
        </div>}
        <div className="person">
          {strikes >= 2 && <div className="head"></div>}
          {strikes >= 3 && <div className="torso"></div>}
          {strikes >= 4 && <div className="leftArm"></div>}
          {strikes >= 5 && <div className="rightArm"></div>}
          {strikes >= 6 && <div className="leftLeg"></div>}
          {strikes >= 7 && <div className="rightLeg"></div>}
        </div> 
      </div>
    </div>
  )
}
