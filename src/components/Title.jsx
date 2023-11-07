import React from 'react';
import '../styles/Title.css'
let titleGrid=Array.from(Array(13), () => Array(80).fill(""));
/* first T */
titleGrid[4][17]="T";
titleGrid[4][18]="T";
titleGrid[4][19]="T";
titleGrid[4][20]="T";
titleGrid[4][21]="T";
titleGrid[5][19]="T";
titleGrid[6][19]="T";
titleGrid[7][19]="T";
titleGrid[8][19]="T";
/* E */
titleGrid[4][25]="T";
titleGrid[4][26]="T";
titleGrid[4][27]="T";
titleGrid[4][28]="T";
titleGrid[4][29]="T";
titleGrid[5][25]="T";
titleGrid[6][25]="T";
titleGrid[6][26]="T";
titleGrid[6][27]="T";
titleGrid[6][28]="T";
titleGrid[6][29]="T";
titleGrid[7][25]="T";
titleGrid[8][25]="T";
titleGrid[8][26]="T";
titleGrid[8][27]="T";
titleGrid[8][28]="T";
titleGrid[8][29]="T";
/* second T */
titleGrid[4][33]="T";
titleGrid[4][34]="T";
titleGrid[4][35]="T";
titleGrid[4][36]="T";
titleGrid[4][37]="T";
titleGrid[5][35]="T";
titleGrid[6][35]="T";
titleGrid[7][35]="T";
titleGrid[8][35]="T";
/* R */
titleGrid[4][41]="T";
titleGrid[4][42]="T";
titleGrid[4][43]="T";
titleGrid[4][44]="T";
titleGrid[4][45]="T";
titleGrid[5][41]="T";
titleGrid[5][45]="T";
titleGrid[6][41]="T";
titleGrid[6][42]="T";
titleGrid[6][43]="T";
titleGrid[6][44]="T";
titleGrid[6][45]="T";
titleGrid[7][41]="T";
titleGrid[7][44]="T";
titleGrid[8][41]="T";
titleGrid[8][44]="T";
titleGrid[8][45]="T";
/* I */
titleGrid[4][49]="T";
titleGrid[4][50]="T";
titleGrid[4][51]="T";
titleGrid[4][52]="T";
titleGrid[4][53]="T";
titleGrid[5][51]="T";
titleGrid[6][51]="T";
titleGrid[7][51]="T";
titleGrid[8][49]="T";
titleGrid[8][50]="T";
titleGrid[8][51]="T";
titleGrid[8][52]="T";
titleGrid[8][53]="T";
/* S */
titleGrid[4][57]="T";
titleGrid[4][58]="T";
titleGrid[4][59]="T";
titleGrid[4][60]="T";
titleGrid[4][61]="T";
titleGrid[5][57]="T";
titleGrid[6][57]="T";
titleGrid[6][58]="T";
titleGrid[6][59]="T";
titleGrid[6][60]="T";
titleGrid[6][61]="T";
titleGrid[7][61]="T";
titleGrid[8][57]="T";
titleGrid[8][58]="T";
titleGrid[8][59]="T";
titleGrid[8][60]="T";
titleGrid[8][61]="T";
let dict={"":"block-ground","T":"block-font"};
const Title = () => (
  
  <div className="title-wrapper">
    {titleGrid.map((items, index) => {
      return (
        <div className="title-grid" key={index}>
          {items.map((subItems, sIndex) => {
            return <div key={sIndex} className={dict[subItems]}> {subItems} </div>;
          })}
        </div>
      );
    })}
  </div>
);

export default Title;