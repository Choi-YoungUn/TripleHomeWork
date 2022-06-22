import React from 'react';
import styled, { keyframes, css } from "styled-components";



type AwardInfoCntProps = {
  endNum: number
}

const AwardInfoCnt : React.FunctionComponent<AwardInfoCntProps> = ({endNum})=> {
  return (
    <AwardInfoCntText num={endNum}>
    </AwardInfoCntText>
  );
}
export default AwardInfoCnt;


function createCSS(num : number) {
  let styles = ``;
  for (let i = 0; i < 64; i += 1) {
    let number : number = Math.round(num * i / 100) 
    styles += `
      ${i.toString()+"%"} {
        content : ${`"` + number.toString() + `"`};
      }
     `
  }
  for (let i = 64; i < 76; i += 3) {
    let number : number = Math.round(num * i / 100) 
    styles += `
      ${i.toString()+"%"} {
        content : ${`"` + number.toString() + `"`};
      }
     `
  }
  for (let i = 76; i < 101; i += 6) {
    let number : number = Math.round(num * i / 100) 
    styles += `
      ${i.toString()+"%"} {
        content : ${`"` + number.toString() + `"`};
      }
     `
  }
  
  return css`${styles}`;
}

const explosion = (num: number) => keyframes`
  ${createCSS(num)};
`

const AwardInfoCntText = styled.strong<{num:number}>`
  &::after {
    content: "0";
    animation-name : ${(props) => explosion(props.num)};
    animation-duration : 2s; 
    animation-fill-mode: both;
    animation-timing-function : cubic-bezier(0, 1.25, 0.03, 1);
  }
`

