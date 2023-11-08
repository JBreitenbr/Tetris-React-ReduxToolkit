export let startGrid=Array.from(Array(20), () => Array(12).fill(""));
/*startGrid[18]=["T","S","T","T","S","","","S","Z","O","O","I"];
startGrid[19]=["J","L","Z","Z","S","O","O","I","S","T","S","Z"];*/

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

/*let tetrStr="STOLJIZ";
let rando1=Math.floor(Math.random()*tetrStr.length);
let rando2=Math.floor(Math.random()*tetrStr.length);*/
export function randomShape(){
  let tetroStr="STOLJIZ";
  let rando=Math.floor(Math.random()*7);
   return tetroStr[rando];
}
export let defaultState = () => {
  return {
    board: startGrid,
    shape: randomShape(),
    rotation: 0,
    x: 0,
    y: 4 ,
    nextShape: randomShape(),
    isRunning: true,
    lines_score: [0,0],
    speed: 1000,
    gameOver: false 
  };
};
export function nextRotation(shape, rotation){
  return (rotation+1)%4;
};
/*
export function detectCollision(board, shape, rotation, x, y, moveX, moveY){
  let tetr=tetrObj[shape][rotation];
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
       if(tetr[i][j]!==""){
     if(x+i+moveX>19||y+j+moveY>11||x+i+moveX<0||y+j+moveY<0){
       return true;
         }
       else {
    let sliced=board.slice(x+moveX,x+moveX+4).map(item=>item.slice(y+moveY,y+moveY+4));
    if(sliced){
     if(sliced[i][j]!==""){
      return true;
     }}
     else {
       return true;
     }
     }
    }
   } 
  }
  return false;
}*/

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
export function detectVerticalCollision(board, shape, rotation, x, y, moveX){
  let tetr=tetrObj[shape][rotation];
  for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
       if(tetr[i][j]!==""){
     if(x+i+moveX>19||x+i+moveX<0){
       return true;
         }
       else {
    let sliced=board.slice(x+moveX,x+moveX+4).map(item=>item.slice(y,y+4));
    if(sliced){
     if(sliced[i][j]!==""){
      return true;
     }}
     else {
       return true;
     }
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
  return [completedRows,points[completedRows]];
};