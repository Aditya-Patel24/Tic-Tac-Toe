import React, { useState } from "react";
import Box from "./Box";
import "./style.css";
function Border() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsTurn, setXIsTurn] = useState(true);
  const [isDraw, setIsDraw] = useState(false);
  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of win) {
      const [a, b, c] = i;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  const handleClick = (i) => {
    const audio = new Audio('/Tic-Tac-Toe/touch1.mp3');
    audio.play();
    if (isWinner || state[i] !== null) return;
    const copyState = [...state];
    copyState[i] = xIsTurn ? "X" : "O";
    setState(copyState);
    setXIsTurn(!xIsTurn);
    if (!copyState.includes(null) && !checkWinner()) {
      setIsDraw(true);
    }
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
    setXIsTurn(true);
    setIsDraw(false);
  };
  return (
    <div className="border-container">
      <div className="border">
        {isWinner ? (
          <>
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: " #CEF0D4",
                fontFamily: "'Rouge Script', cursive",
                fontSize: "50px",
                fontWeight: " normal",
                textShadow: "1px 1px 2px #082b34",
              }}
            >
              Player {xIsTurn ? "X" : "O"} turn
            </h2>

            <div className="row">
              <Box onClick={() => handleClick(0)} value={state[0]} />
              <Box onClick={() => handleClick(1)} value={state[1]} />
              <Box onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="row">
              <Box onClick={() => handleClick(3)} value={state[3]} />
              <Box onClick={() => handleClick(4)} value={state[4]} />
              <Box onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="row">
              <Box onClick={() => handleClick(6)} value={state[6]} />
              <Box onClick={() => handleClick(7)} value={state[7]} />
              <Box onClick={() => handleClick(8)} value={state[8]} />
            </div>

            <div
              style={{
                color: " #CEF0D4",
                fontFamily: "'Rouge Script', cursive",
                fontSize: "40px",
                fontWeight: " normal",
                textShadow: "1px 1px 2px #082b34",display:"flex",alignItems:"center",justifyContent:"center"
              }}
            >
              {isWinner} won the game
              <br></br>
              <span><img src="/Tic-Tac-Toe/party.gif" style={{width:"200px",position:"absolute",marginTop:"-147px",marginLeft:"-388px", WebkitTransform: "scaleX(-1)", transform: "scaleX(-1)"}}alt="" /></span>
              <span><img src="/Tic-Tac-Toe/party.gif" style={{width:"200px",position:"absolute",marginTop:"-147px",marginLeft:"-104px"}}alt="" /></span>
            </div>
              <button className="plbtn" style={{ marginTop:"10px"}} onClick={handleReset}>Play Again</button>
          </>
        ) :isDraw ? ( <>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: " #CEF0D4",
              fontFamily: "'Rouge Script', cursive",
              fontSize: "50px",
              fontWeight: " normal",
              textShadow: "1px 1px 2px #082b34",
            }}
          >
            Player {xIsTurn ? "X" : "O"} turn
          </h2>

          <div className="row">
            <Box onClick={() => handleClick(0)} value={state[0]} />
            <Box onClick={() => handleClick(1)} value={state[1]} />
            <Box onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Box onClick={() => handleClick(3)} value={state[3]} />
            <Box onClick={() => handleClick(4)} value={state[4]} />
            <Box onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Box onClick={() => handleClick(6)} value={state[6]} />
            <Box onClick={() => handleClick(7)} value={state[7]} />
            <Box onClick={() => handleClick(8)} value={state[8]} />
          </div>

          <div
            style={{
              color: " #CEF0D4",
              fontFamily: "'Rouge Script', cursive",
              fontSize: "40px",
              fontWeight: " normal",
              textShadow: "1px 1px 2px #082b34",display:"flex",alignItems:"center",justifyContent:"center"
            }}
          >
            This is Draw
          </div>
            <button className="plbtn" style={{ marginTop:"10px"}} onClick={handleReset}>Play Again</button>
        </>): (
          <>
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: " #CEF0D4",
                fontFamily: "'Rouge Script', cursive",
                fontSize: "50px",
                fontWeight: " normal",
                textShadow: "1px 1px 2px #082b34",
              }}
            >
              Player {xIsTurn ? "X" : "O"} turn
            </h2>
            <div className="row">
              <Box onClick={() => handleClick(0)} value={state[0]} />
              <Box onClick={() => handleClick(1)} value={state[1]} />
              <Box onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="row">
              <Box onClick={() => handleClick(3)} value={state[3]} />
              <Box onClick={() => handleClick(4)} value={state[4]} />
              <Box onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="row">
              <Box onClick={() => handleClick(6)} value={state[6]} />
              <Box onClick={() => handleClick(7)} value={state[7]} />
              <Box onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Border;
