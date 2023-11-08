import React from 'react';
import '../styles/Scores.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resume, pause, restart} from '../features/game/gameSlice';
export default function Scores() {const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { lines_score, isRunning, gameOver }=game;
  
let linesToScore={0:0,1:40,2:100,3:1200};
                              function playHandler() {
    if (gameOver) return;
    if (isRunning) {
      dispatch(pause());
    } else {
      dispatch(resume());
    }
  }

  function restartHandler() {
    dispatch(restart());
      }
    return (<>
        <div className="score-board">
          <div style={{fontSize:"20px",marginTop:"25px"}}>Score: {lines_score[1]}</div>
          <div>Lines: {lines_score[0]}</div>
          {/*<div>Level: 1</div>*/}</div>
          <div className="score-btn-container">
            <button className="score-board-button" onClick={playHandler}>
      {isRunning ? 'Pause' : 'Play'}
            </button>
            <button className="score-board-button" onClick={restartHandler}>
              Restart
            </button>
        </div></>
    )
                                       }