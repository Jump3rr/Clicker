import { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookie from "./cookie";
import { Counter } from "./Counter";
import styled from "styled-components";
import { Leveling } from "./leveling";

const MainWrapper = styled.div`
  display: flex;
  margin-top: 12vh;
  flex-flow: row;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column-reverse;
  }
`;
const CookieStyled = styled(Cookie)`
  order: 1;
  @media (max-width: 768px) {
  }
`;
const CounterStyled = styled(Counter)`
  order: 2;
  @media (max-width: 768px) {
  }
`;

export const HomePage: FC = () => {
  return (
    <MainWrapper>
      <CookieStyled />
      <Leveling />
      <CounterStyled />
    </MainWrapper>
  );
};
