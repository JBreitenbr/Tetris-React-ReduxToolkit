import React from 'react';
import '../styles/SmallGrid.css';
let tetros=["S","T","O","L","J", "I", "Z"];
let hash={};
for(let i=0;i<tetros.length;i++){
hash[tetros[i]]="block-sm "+tetros[i].toLowerCase()+"Tetro-sm";}
hash[""]="block-sm";
let smallGrid=Array.from(Array(4), () => Array(4).fill(""));
smallGrid[0][1]="S";
smallGrid[0][2]="S";
smallGrid[1][0]="S";
smallGrid[1][1]="S";
const SmallGrid = () => (
  
  <div className="wrapper">
    {smallGrid.map((items, index) => {
      return (
        <div className="small-grid" key={index}>
          {items.map((subItems, sIndex) => {
            return <div key={sIndex} className={hash[subItems]}> {subItems} </div>;
          })}
        </div>
      );
    })}
  </div>
);

export default SmallGrid;