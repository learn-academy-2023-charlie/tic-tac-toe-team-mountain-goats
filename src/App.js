import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [userOne, setuserOne] = useState(true)

  const [userTwo, setuserTwo] = useState(false)

 // Pseudo
  // Purpose of function: update the value on the tic tac toe board. Name of function is buttonClick. 
  // Input: index of selected box.
  // Output X for one user or O for the other.
  // Process: Use if else statement. 
  //  If user one statement is true && user two is false, put X.
  // useState to toggle between true and false.
  // Else put O. 

  const buttonClick = (selectedSquare) => {
    squares[selectedSquare] = setSquares
    setSquares([...squares])
      if(userOne === true) {
        return "X"
      }
        else {
          return "O"
    }
  }
  console.table(squares)

  // const squareButton = (selectedIndex) => {
  //   const gameValues = ["X", "O"]
  //   const newButton = [...squares]
    
  //   newButton[selectedIndex] = gameValues[i]
  //   setSquares(newButton)
  //   return newButton
    
  // }


  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} buttonClick ={buttonClick} />
    </>
  )
}

export default App