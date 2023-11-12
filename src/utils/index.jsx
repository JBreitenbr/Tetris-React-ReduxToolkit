export let startGrid=Array.from(Array(20), () => Array(12).fill(""));

export let tetrObj = {
  "":[
    [
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""]
    ],   
    [
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""]
    ],   
    [
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""]
    ],   
    [
      ["","","",""],
      ["","","",""],
      ["","","",""],
      ["","","",""]
    ]
  ],
  "S":[
    [
      ["","S","S",""],
      ["S","S","",""],
      ["","","",""],
      ["","","",""]
    ],
    [ 
      ["","S","",""],
      ["","S","S",""],
      ["","","S",""],
      ["","","",""]
    ],
    [
      ["","","",""],
      ["","S","S",""],
      ["S","S","",""],
      ["","","",""]
    ],
    [
      ["S","","",""],
      ["S","S","",""],
      ["","S","",""],
      ["","","",""]
    ]
  ],
  "I":[
    [
      ["","","",""],
      ["I","I","I","I"],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","","I",""],
      ["","","I",""],
      ["","","I",""],
      ["","","I",""]
    ],
    [
      ["","","",""],
      ["","","",""],
      ["I","I","I","I"],
      ["","","",""]
    ],
    [
      ["","I","",""],
      ["","I","",""],
      ["","I","",""],
      ["","I","",""]
    ]
  ],
  "T":[
    [
      ["","T","",""],
      ["T","T","T",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","T","",""],
      ["","T","T",""],
      ["","T","",""],
      ["","","",""]
    ],
    [
      ["","","",""],
      ["T","T","T",""],
      ["","T","",""],
      ["","","",""]
    ],
    [
      ["","T","",""],
      ["T","T","",""],
      ["","T","",""],
      ["","","",""]
    ]
  ],
  "L":[
    [
      ["","","L",""],
      ["L","L","L",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","L","",""],
      ["","L","",""],
      ["","L","L",""],
      ["","","",""]
    ],
    [
      ["","","",""],
      ["L","L","L",""],
      ["L","","",""],
      ["","","",""]
    ],
    [
      ["L","L","",""],
      ["","L","",""],
      ["","L","",""],
      ["","","",""]
    ]
  ],
  "J":[
    [
      ["J","","",""],
      ["J","J","J",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","J","J",""],
      ["","J","",""],
      ["","J","",""],
      ["","","",""]
    ],
    [
      ["","","",""],
      ["J","J","J",""],
      ["","","J",""],
      ["","","",""]
    ],
    [
      ["","J","",""],
      ["","J","",""],
      ["J","J","",""],
      ["","","",""]
    ]
  ],

  "Z":[
    [
      ["Z","Z","",""],
      ["","Z","Z",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","","Z",""],
      ["","Z","Z",""],
      ["","Z","",""],
      ["","","",""]
    ],[
      ["","","",""],
      ["Z","Z","",""],
      ["","Z","Z",""],
      ["","","",""]
    ],
    [
      ["","Z","",""],
      ["Z","Z","",""],
      ["Z","","",""],
      ["","","",""]
    ]
  ],
  "O":
  [
    [
      ["","O","O",""],
      ["","O","O",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","O","O",""],
      ["","O","O",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","O","O",""],
      ["","O","O",""],
      ["","","",""],
      ["","","",""]
    ],
    [
      ["","O","O",""],
      ["","O","O",""],
      ["","","",""],
      ["","","",""]
    ]
  ]
};

export function randomShape(){
  let tetroStr="STOLJIZ";
  let rando=Math.floor(Math.random()*7);
   return tetroStr[rando];
}
/* scoreArr holds lines, score, level and speed */
export let defaultState = () => {
  return {
    board: startGrid,
    shape: randomShape(),
    rotation: 0,
    x: 0,
    y: 5 ,
    nextShape: randomShape(),
    isRunning: true,
    scoreArr: [0,0,0,1200],
    gameOver: false,
    highestScore:0
  };
};
export function nextRotation(rotation){
  return (rotation+1)%4;
};

export function detectCollision(board,shape,rotation,x,y,moveX,moveY) {
  let tetro=tetrObj[shape][rotation];
  for (let i=0;i<4;i++) {
    for (let j=0;j<4;j++) {
      if (tetro[i][j]!=="") {
        let moveToX=i+x+moveX;
        let moveToY=j+y+moveY;
        let moveToRow=board[moveToX];
        if (moveToRow) {
          if (
            moveToRow[moveToY] === undefined ||
            moveToRow[moveToY] !==""
          ) {
            return true;
          }
        } else {
            return true;
        }
      }
     }
    }
  return false;
}

export function addTetroToBoard(board,shape,rotation,x,y){
    let fitOnBoard=true;
    let tetr=tetrObj[shape][rotation];
    let newBoard = [...board];            for (let i=0;i<4;i++) {
      for (let j=0;j<4;j++) {
        if (tetr[i][j]!=="") {
           if (i+x<1) {
             fitOnBoard=false;
           } else {
          newBoard[i+x][j+y] = shape;
          }
      }
    }
  }
    return {board: newBoard,gameOver:!fitOnBoard};
}

export function checkRows(board){
  const points = [0, 40, 100, 300, 1200];
  let completedRows = 0;
  for (let row = 0; row < board.length; row++) {
    if (board[row].indexOf("") === -1) {
      completedRows += 1;
      board.splice(row, 1);
      board.unshift(Array(12).fill(""));
    }
  }
  return [completedRows,points[completedRows],Math.floor(completedRows%10)];
};