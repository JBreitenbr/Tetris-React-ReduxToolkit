import React from 'react';
import Square from './Square';
import '../styles/SmallGrid.css';

import { useSelector } from 'react-redux';
import { tetrObj } from '../utils/index.jsx';

export default function SmallGrid() {
  const nextShape = useSelector((state) => state.game.nextShape);
  const block = tetrObj[nextShape][0];

  const blockToDisplay = block.map((rowArr, row) => {
    return rowArr.map((square, col) => {
      return (
        <Square key={`${row}${col}`} color={square === "" ? "" : nextShape} />
      );
    });
  });

  return <div className="next-block">{blockToDisplay}</div>;
}