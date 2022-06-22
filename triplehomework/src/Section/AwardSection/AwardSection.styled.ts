import styled, { keyframes } from "styled-components";


// 메인 페이지의 전체 틀(구획)설정  = 향후 디자인 추가적인 디자인 가능하도록
export const AwardSectionFrame = styled.section`
  display : flex;
  height : 560px;
  width: 1200px;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin : auto;
  font-family: sans-serif;
`

export const AwardDiv = styled.div`
  width : 500px;
  position : static;
`

export const AwardTriple2xText = styled.div`
  position: absolute;
  top: 315px;
  left: 165px;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`

const UpMove = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 15%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`


export const AwardUpDiv1 = styled.div`
  position: relative;
  animation-fill-mode: both;
  animation-name: ${UpMove};
  animation-duration : 0.7s;
`

export const AwardUpDiv2 = styled.div`
  position: relative;
  animation-fill-mode: both;
  animation-name: ${UpMove};
  animation-duration : 700ms;
  height: 200px;
  animation-delay: 100ms;
`

export const AwardUpDiv3 = styled.div`
  position: relative;
  animation-fill-mode: both;
  animation-name: ${UpMove};
  animation-duration : 700ms;
  animation-delay: 200ms;
  display : flex;
  font-size: 14px;
  justify-content: space-evenly;
  margin-bottom: 60px;
  margin-top: 5px;
`