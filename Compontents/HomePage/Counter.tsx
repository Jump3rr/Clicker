import React, { FC } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { Leveling } from "./leveling";
import { ILevelReducer } from "../reducers/levelReducer";
import { IRequiredReducer } from "../reducers/requiredReducer";

const CookieCounter = styled.div`
  width: 55%;
  display: block;
  justify-content: right;
  background: rgba(0, 0, 0, 0.4);
  height: auto;
  margin-top: 3vh;
  margin-left: 5%;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-left: 0;
  }
`;
const CounterDiv = styled.div`
  width: 100%;
  text-align: center;
  font-size: 44px;
  display: block;
`;

const Level = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
  display: block;
`;

export const Counter: FC = () => {
  const { count, level, toNextLevel } = useSelector<
    IState,
    ICounterReducer & ILevelReducer & IRequiredReducer
  >((globalState) => ({
    ...globalState.counter,
    ...globalState.level,
    ...globalState.toNextLevel
  }));

  return (
    <CookieCounter>
      <CounterDiv>Cookies: {count}</CounterDiv>
      <Level>Level: {level}</Level>
    </CookieCounter>
  );
};
