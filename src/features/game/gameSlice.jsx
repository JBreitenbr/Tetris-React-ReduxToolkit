import { createSlice } from '@reduxjs/toolkit';
import {
  nextRotation,
  detectCollision,
  addTetroToBoard,
  checkRows,
  randomShape,
} from '../../utils';
import { defaultState } from '../../utils/index';
function addArr(arr1,arr2){
  return [arr1[0]+arr2[0],arr1[1]+arr2[1]];
}
function arrEnhance(arr2d){
  let expr=Math.floor(arr2d[0]/10);
  return [...arr2d,expr];
}
function arrEnhance3d(arr3d){
  let expr=1000 / (arr3d[2] + 1) + 200
  return [...arr3d,expr];
}
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
      const { shape, board, x, y, rotation, nextShape, lines_score, isRunning } = state;
      if (!detectCollision(board,shape,rotation,x,y,1,0)) {
        state.x = x + 1;
      } else {
        const obj = addTetroToBoard(board,shape,rotation,x,y);
        const newBoard = obj.board;
        const gameOver = obj.gameOver;
        if (gameOver) {
          state.shape = "";
          state.gameOver = gameOver;
          state.board = newBoard;
          state.isRunning = false;
        } else {
          state.board = newBoard;
          state.shape = nextShape;
          state.nextShape = randomShape();

         /*state.score = score + checkRows(newBoard)[1];*/
          state.lines_score = arrEnhance3d(arrEnhance(addArr( lines_score.slice(0,2),checkRows(newBoard).slice(0,2))));
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
    },
   /* setScore: (state, action) => {
      state.lines_score[1] = action.payload;
      if (state.lines_score[1] > state.highestScore) {
        state.highestScore = state.lines_score[1];
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
  /*setScore*/
} = gameSlice.actions;

export default gameSlice.reducer;