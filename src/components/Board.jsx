import React from 'react';
import '../styles/Board.css';
import Square from './Square';
import {tetrObj} from '../utils/index.jsx';
import {useSelector} from 'react-redux';
import {useTimer} from '../utils/useTimer';

const Board = () => {
const game = useSelector((state) => state.game);
let board=game.board;
let rotation=game.rotation;
let x=game.x;
let y=game.y;
let shape=game.shape;
let isRunning=game.isRunning;
const block = tetrObj[shape][rotation];
const blockColor = shape;
useTimer(isRunning);

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
};

export default Board;