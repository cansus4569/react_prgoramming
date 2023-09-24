import React from "react"
import styled from "styled-components"

// const ButtonCommon = styled.button`
//   width: ${props => (props.isbig === 'big' ? 100 : 50)}px;
//   height: 30px;
//   background-color: #aaa00a;
// `;
const ButtonCommon = styled.button`
  width: ${props => (props.isbig ? 100 : 50)}px;
  height: 30px;
  background-color: #aaa00a;
`;

export default function Button3({ size }) {
  const isBig = size === "big"
  const label = isBig ? "큰 버튼" : "작은 버튼"
  return <ButtonCommon isbig={size}>{label}</ButtonCommon>
}

// props 에 isBig 과 같은 카멜케이스에 대해서 lowercase로 표현할 것을 요구하는 warning 발생
// props 에 boolean 값이 올수 없다고 warning 발생함
// 위의 문제를 다 해결하니,, props 명칭에 $를 붙여줘야 한다고는 하는데,, 나중에 패스,,