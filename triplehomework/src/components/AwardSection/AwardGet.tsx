import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";


type AwardInfoProps = {
  imgSrc: string,
  topText?: string,
  bottomText?: string
}

const AwardGet : React.FunctionComponent<AwardInfoProps> = ({imgSrc, topText, bottomText})=> {
  return (
    <AwardGetFrame>
      <img src={imgSrc}  style={{width:`53px`, height: "53px"}}></img>
      <AwardGetText>
        <div style={{marginBottom : "5px"}}>{topText}</div>
        <div>{bottomText}</div>
      </AwardGetText>
    </AwardGetFrame>
  );
}
export default AwardGet;


const AwardGetFrame = styled.div`
  display : flex;
  margin-left: 27px;
  
`

const AwardGetText = styled.div`
  display : inline-block;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  margin-left: 7px;
  margin-top: 5px;
`