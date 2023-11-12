import React from 'react';
import '../styles/MessagePopup.css';

import { useSelector } from 'react-redux';
export default function MessagePopup() {
  const gameOver = useSelector((state) => state.game.gameOver);
  let msg = '';
  let isHidden = 'hidden';

  if (gameOver) {
    msg = 'Game Over';
    isHidden = '';
  } 
  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{msg}</h1>
    </div>
  );
}