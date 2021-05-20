import { FC } from "react";
import { Colors } from "../styledHelpers/colors";
import styled from "styled-components";

const CookieContainer = styled.div`
  height: 60vh;
  width: auto;
  margin-top: 20vh;
  display: flex;
  justify-content: left;

  @media (max-width: 768px) {
    height: 40vh;
    margin-top: 40vh;
    justify-content: center;
  }
`;
const CookieImg = styled.img`
  height: 60vh;
  width: auto;
  order: 1;
  display: inherit;
  transition: 0.15s;
  margin-left: 2%;

  @media (max-width: 768px) {
    height: 40vh;
    margin-left: 0;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
`;

export const Cookie: FC = () => {
  return (
    <CookieContainer>
      <CookieImg src="../icons/cookie.png" alt="Logo" />
    </CookieContainer>
  );
};
