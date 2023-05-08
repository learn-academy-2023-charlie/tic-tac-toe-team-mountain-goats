import React from 'react'

const Square = (props) => {
return (
  <>
{props.square.map((value, index) => {
  return (
    <div className="square" key={index}>
      {value}
    </div>
  )})}
  </>
)}
export default Square
