import { useEffect, useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {moveDown} from '../features/game/gameSlice';

export function useTimer(flagVal) {
  const game = useSelector((state) => state.game);
  let lines_score=game.lines_score;
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);
  const dispatch = useDispatch();

  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
    if (!flagVal) return;
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    console.log(lines_score[3]);
    if (progressTimeRef.current > lines_score[3]) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [flagVal,lines_score[3]]);
}