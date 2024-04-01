import React from 'react'
import './style.css'
function Box(props) {
  return (
    <>
    <div className="box"  onClick={props.onClick}>
      <h1 style={{color:" #000000", fontFamily: "'Rouge Script', cursive",fontSize: "40px", fontWeight:" normal",  textShadow: "1px 1px 2px #082b34"}}>{props.value}</h1>
    </div>
    </>
  )
}

export default Box
