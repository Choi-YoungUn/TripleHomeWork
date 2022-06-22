import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import AwardInfoCnt from "./AwardInfoCnt"


type AwardInfoProps = {
  middleText?: string,
  endText?: string,
  endNum: number
}

const AwardInfo : React.FunctionComponent<AwardInfoProps> = ({middleText, endText, endNum})=> {

  return (
    <AwardInfoText>
      <AwardInfoCnt endNum={endNum}/>
      <strong>{middleText}</strong>
      <span>{endText}</span>
    </AwardInfoText>
  );
}
export default AwardInfo;


const AwardInfoText = styled.div`
  text-align: left;
  margin-left: 45px;
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
  margin-bottom: 9px;
`