import React from 'react';
import '../styles/Board.css';
import Square from './Square';
import {tetrObj,defaultState} from '../utils/index.jsx';
import {useSelector,useDispatch} from 'react-redux';
import { useTimer } from '../utils/useTimer';
import {moveDown} from '../features/game/gameSlice';
const Board = () => {
let tetros=["S","T","O","L","J", "I", "Z"];
let hash={};
for(let i=0;i<tetros.length;i++){
hash[tetros[i]]="block "+tetros[i].toLowerCase()+"Tetro";}
hash[""]="block";
const game = useSelector((state) => state.game);
//let game=defaultState();
let board=game.board;
let rotation=game.rotation;
let x=game.x;
let y=game.y;
let shape=game.shape;
let isRunning=game.isRunning;
let speed=game.speed;
const block = tetrObj[shape][rotation];

  const blockColor = shape;

  useTimer(isRunning, speed, moveDown);
const boardSquare = board.map((rowArray, row) => {
    return rowArray.map((square, col) => {

      const blockX = row-x;
      const blockY = col-y;
      let color = square;
      if (
        blockX >= 0 &&
        blockX < 4 &&
        blockY >= 0 &&
        blockY < 4
      ) {
        color = block[blockX][blockY] === "" ? color : blockColor;
      }
      const k = row * board[0].length + col;
      return <Square key={k} color={color} />;
    });
  });
  return (
    <div className="outer">
      <div className="board">{boardSquare}</div>
    </div>
  );
 /* return (<div className="outer">
    {board.map((items, index) => {
      return (
        <div className="board" key={index}>
          {items.map((subItems, sIndex) => {
          const blockY = sIndex+y;
          const blockX = index+x;
          let val="white";
          let cl;
          if (
            blockX >= 0 &&
            blockX < 4 &&
            blockY >= 0 &&
            blockY < 4
          ) {
            cl=tetro[blockX][blockY] === "" ? "white" : "blue";
            console.log(cl);
          }
            return <div key={sIndex} className={hash[subItems]} style={{backgroundColor:{cl}}} > {subItems} </div>;
          })}
        </div>
      );
    })}
  </div>)*/
};

export default Board;