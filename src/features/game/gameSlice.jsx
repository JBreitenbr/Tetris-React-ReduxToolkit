import { createSlice } from '@reduxjs/toolkit';
import {
  nextRotation,
  detectCollision,
  addTetroToBoard,
  checkRows,
  randomShape,
} from '../../utils';
import { defaultState } from '../../utils/index';

const initialState = defaultState();

const gameSlice = createSlice({
  name: 'game',
  initialState,

  reducers: {
    rotate: (state) => {
      const { shape, rotation, board, x, y } = state;
      const newRotation = nextRotation(shape, rotation);
     if (!detectCollision(board,shape,newRotation,x,y,0,0)) {
        state.rotation = newRotation;
      }
    }, 
    moveRight: (state) => {
      const { shape, rotation, board, x, y } = state;
      if (!detectCollision(board,shape,rotation,x,y,0,1)) {
        state.y = y + 1;
      }
    },
    moveLeft: (state) => {
      const { shape, rotation, board, x, y } = state;
     if (!detectCollision(board,shape,rotation,x,y,0,-1)) {
        state.y = y - 1;
      }
    },
    moveDown: (state) => {
      const { shape, board, x, y, rotation, nextShape, score, lines, isRunning } = state;
      if (!detectCollision(board,shape,rotation,x,y,1,0)) {
        state.x = x + 1;
      } else {
        const obj = addTetroToBoard(board,shape,rotation,x,y);
        const newBoard = obj.board;
        const gameOver = obj.gameOver;
        if (gameOver) {
          state.shape = 0;
          state.gameOver = gameOver;
          state.board = newBoard;
          state.isRunning = false;
        } else {
          state.board = newBoard;
          state.shape = nextShape;
          state.nextShape = randomShape();

          state.score = score + checkRows(newBoard)[1];
          state.lines = lines + checkRows(newBoard)[0];
          state.isRunning = isRunning;
          state.x = 0;
          state.y = 5;
          state.rotation = 0;
        }
      }
    },
    resume: (state) => {
      state.isRunning = true;
    },
    pause: (state) => {
      state.isRunning = false;
    },

    restart: (state) => {
      return {
        ...initialState
      };
    }/*
    setScore: (state, action) => {
      state.score = action.payload;
      if (state.score > state.highestScore) {
        state.highestScore = state.score;
      }
    },*/
  },
});

export const {
  rotate,
  moveRight,
  moveLeft,
  moveDown,
  resume,
  pause,
  gameOver,
  restart,
  /*setScore,*/
} = gameSlice.actions;

export default gameSlice.reducer;