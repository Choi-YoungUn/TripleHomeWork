import React, { useEffect, useRef, useState } from 'react';

import { 
  AwardSectionFrame,
  AwardDiv,
  AwardTriple2xText,
  AwardUpDiv1,
  AwardUpDiv2,
  AwardUpDiv3
 } from "./AwardSection.styled"

 import AwardInfo from "../../components/AwardSection/AwardInfo"
 import AwardGet from "../../components/AwardSection/AwardGet"


const AwardSection : React.FunctionComponent = () => {
  return (
    <AwardSectionFrame>
      <AwardDiv>
        <AwardUpDiv1>
          <img src='images/Section/triple2x.png' alt='triple2x' style={{ width: "400px", marginTop: "37px", marginLeft: "21px"}}></img>
          <AwardTriple2xText>2019년 2월 기준</AwardTriple2xText>
        </AwardUpDiv1>
      </AwardDiv>
      
      <AwardDiv>
        <AwardUpDiv2 >
          <AwardInfo endNum = {350} middleText = {"만 명"} endText = {"의 사용자"}  ></AwardInfo>
          <AwardInfo endNum = {21} middleText = {"만 개"} endText = {"의 리뷰"}  ></AwardInfo>
          <AwardInfo endNum = {650} middleText = {"만 개"} endText = {"의 저장"}  ></AwardInfo>
        </AwardUpDiv2>

        <AwardUpDiv3>
          <AwardGet imgSrc='images/Section/play-store2x.png' topText='2018 구글 플레이스토어' bottomText='올해의 앱 최우수상 수상'></AwardGet>
          <AwardGet imgSrc='images/Section/badge-apple4x.png' topText='2018 애플 앱스토어' bottomText='오늘의 여행앱 선정'></AwardGet>
        </AwardUpDiv3>
      </AwardDiv>
      
    </AwardSectionFrame>
  );
}

export default AwardSection;


