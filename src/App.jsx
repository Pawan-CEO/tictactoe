import React from "react";
import Board from "./components/Board";
import './styles/root.scss';
const App =()=>{
  return (
    <div className="app">
    <h2>Tic Tac Toe</h2>
    <Board/>
    </div>
  );
};

export default App;