import React, { FC, useEffect } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { ILevelReducer } from "../reducers/levelReducer";
import { resetProgress } from "../../Actions/actionCounter";
import { resetLevel } from "../../Actions/levelActions";
import { IRequiredReducer } from "../reducers/requiredReducer";
import { IShopReducer } from "../reducers/shopReducer";
import {
  resetGrandma,
  resetFarm,
  resetMine,
  resetFactory,
  resetCity,
  resetCountry
} from "../../Actions/shopActions";

const CookieCounter = styled.div`
  width: 55%;
  display: block;
  justify-content: right;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
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
  border-color: ${Colors.white};
  color: ${Colors.white};
  font-weight: bold;
  height: 12vh;
  width: 12vh;
  margin-top: 5vh;
  font-size: 2vh;
  &:hover {
    border-color: ${Colors.red};
    color: ${Colors.lightgrey};
  }
  &:active {
    border-style: groove;
    border-width: 5px;
    font-weight: normal;
  }
`;

export const Counter: FC = () => {
  const {
    clickedCount,
    grandma,
    farm,
    mine,
    factory,
    city,
    country,
    level,
    toNextLevel
  } = useSelector<
    IState,
    ICounterReducer & IShopReducer & ILevelReducer & IRequiredReducer
  >((globalState) => ({
    ...globalState.counter,
    ...globalState.shopItems,
    ...globalState.shopItems.grandma,
    ...globalState.shopItems.farm,
    ...globalState.shopItems.mine,
    ...globalState.shopItems.factory,
    ...globalState.shopItems.city,
    ...globalState.shopItems.country,
    ...globalState.level,
    ...globalState.toNextLevel
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    resetProgress();
    resetLevel();
    resetGrandma();
    resetFarm();
    resetMine();
    resetFactory();
    resetCity();
    resetCountry();

    localStorage.setItem("grandma", JSON.stringify(grandma));
    localStorage.setItem("farm", JSON.stringify(farm));
    localStorage.setItem("mine", JSON.stringify(mine));
    localStorage.setItem("factory", JSON.stringify(factory));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("country", JSON.stringify(country));
    localStorage.setItem("click_count", JSON.stringify(clickedCount));
  }, [grandma, farm, mine, factory, city, country, clickedCount]);

  return (
    <CookieCounter>
      <CounterDiv>Cookies: {clickedCount}</CounterDiv>
      <Level>Level: {level}</Level>
      <ResetButton
        onClick={() => {
          dispatch(resetProgress()),
            dispatch(resetLevel()),
            dispatch(resetGrandma()),
            dispatch(resetFarm()),
            dispatch(resetMine()),
            dispatch(resetFactory()),
            dispatch(resetCity()),
            dispatch(resetCountry());
        }}
      >
        RESET
      </ResetButton>
    </CookieCounter>
  );
};
