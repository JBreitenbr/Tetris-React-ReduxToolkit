import React from 'react';
import '../styles/Board.css';

export default function Square(props) {
  const squareColor = `block color-${props.color}`;

  return <div className={squareColor}></div>;
}