import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [user, setUser] = useState(true)
  const [gameOver, setgameOver] = useState(false)
  const [tempArray, settempArray] = useState([])
  //a place to collect which index they're clicking on



 // Pseudo
  // Purpose of function: update the value on the tic tac toe board. Name of function is buttonClick. 
  // Input: index of selected box.
  // Output X for one user or O for the other.
  // Process: Use if else statement. 
  //  If user one statement is true && user two is false, put X.
  // useState to toggle between true and false.
  // Else put O. 

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.table(lines)
    //here we preset the winning combinations
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setgameOver(true)
        alert (`${squares[a]}' is the winner!'`)
        //return squares[a];
      }
    }
    return null;
  }
  
  const buttonClick = (selectedSquare) => {
    if(gameOver) {
      alert ("Game over, restart")
      return
      }
      else if (squares[selectedSquare]) {
        alert("Pick another square!")
        return
      }
    } else {
      // settempArray([...tempArray, selectedSquare])
      squares[selectedSquare] = user ? "X" : "O"
      setUser(!user)  
      calculateWinner(squares)
    }
  } 
  const restart = () => {
    setSquares(initialSquares)
    // settempArray([])
    setgameOver(false)
    setUser(true)

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} buttonClick ={buttonClick} />
      <button onClick={restart}>Restart?</button>
    </>
  )
}
export default App