import React, { FC, useEffect } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
// import { Leveling } from "./leveling";
import { ILevelReducer } from "../reducers/levelReducer";
import { IRequiredReducer } from "../reducers/requiredReducer";
import { increaseCount } from "../../Actions/actionCounter";
import { resetProgress } from "../../Actions/actionCounter";

import { increaseRequirement } from "../../Actions/requiredActions";
import { levelUp } from "../../Actions/levelActions";

const CookieCounter = styled.div`
  width: 55%;
  display: block;
  justify-content: right;
  background: rgba(0, 0, 0, 0.4);
  height: auto;
  margin-top: 3vh;
  margin-left: 5%;
  text-align: center;
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
const ResetButton = styled.button`
  background: rgb(28, 0, 0);
  background: linear-gradient(
    153deg,
    rgba(28, 0, 0, 1) 0%,
    rgba(255, 28, 0, 1) 46%,
    rgba(253, 67, 23, 1) 85%,
    rgba(249, 177, 90, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 50%;
  border-color: white;
  color: white;
  font-weight: bold;
  height: 12vh;
  width: 12vh;
  &:hover {
    border-color: red;
    color: grey;
  }
  &:active {
    border-style: groove;
    border-width: 5px;
    font-weight: normal;
  }
`;

export const Counter: FC = () => {
  const { count, level } = useSelector<IState, ICounterReducer & ILevelReducer>(
    (globalState) => ({
      ...globalState.counter,
      ...globalState.level
    })
  );

  const dispatch = useDispatch();
  useEffect(() => {
    resetProgress();
  }, []);

  return (
    <CookieCounter>
      <CounterDiv>Cookies: {count}</CounterDiv>
      <Level>Level: {level}</Level>
      <ResetButton onClick={() => dispatch(resetProgress())}>RESET</ResetButton>
    </CookieCounter>
  );
};
