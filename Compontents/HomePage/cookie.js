import React, { FC, Component } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
// import { handleClick } from "./clickerCounter";
import ClickCounter from "./clickerCounter";
import { increaseCount } from "../../Actions/actionCounter";

const CookieContainer = styled.div`
  width: 40%;
  display: inline-flex;
  justify-content: left;
  margin-top: 3vh;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
const CookieImg = styled.img`
  height: 60vh;
  width: auto;
  transition: 0.15s;
  margin-left: 3%;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 40vh;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
`;
// const inc = () => {
//   return (
//     <ClickCounter onIncrement={() => store?.dispatch({ type: "INCREMENT" })} />
//   );
// };

// export const Cookie: FC = () => {
export class Cookie extends Component {
  render() {
    return (
      <CookieContainer>
        <CookieImg
          src="../icons/cookie.png"
          alt="Logo"
          onClick={increaseCount}
        />
      </CookieContainer>
    );
  }
}
