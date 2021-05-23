import { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "../NavBar/TopBar";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  margin-top: 12vh;
  flex-flow: row;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column-reverse;
  }
`;

export const Shop: FC = () => {
  return <MainWrapper></MainWrapper>;
};
