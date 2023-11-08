import React from 'react';
import '../styles/Scores.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resume, pause, restart} from '../features/game/gameSlice';
export default function Scores() {const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { lines_score, isRunning, gameOver, speed }=game;

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
          <div style={{marginTop:"15px"}}>Score: {lines_score[1]}</div>
          <div>Lines: {lines_score[0]}</div>
          <div>Level: {lines_score[2]}</div>

        </div>
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