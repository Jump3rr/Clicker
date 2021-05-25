import { FC, useEffect } from "react";
import { IState } from "../Compontents/reducers";
import { ICounterReducer } from "../Compontents/reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { IShopReducer } from "../Compontents/reducers/shopReducer";
import { increaseByBots } from "./actionCounter";

export const Bots: FC = () => {
  const {
    clickedCount,
    grandma,
    farm,
    mine,
    factory,
    city,
    country
  } = useSelector<IState, ICounterReducer & IShopReducer>((globalState) => ({
    ...globalState.counter,
    ...globalState.shopItems,
    ...globalState.shopItems.grandma,
    ...globalState.shopItems.farm,
    ...globalState.shopItems.mine,
    ...globalState.shopItems.factory,
    ...globalState.shopItems.city,
    ...globalState.shopItems.country
  }));
  let perSec =
    grandma.perSec +
    farm.perSec +
    mine.perSec +
    factory.perSec +
    city.perSec +
    country.perSec;

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => dispatch(increaseByBots(perSec)), 1000);
    localStorage.setItem("click_count", JSON.stringify(clickedCount));
    return () => clearInterval(interval);
  }, [grandma, farm, mine, factory, city, country]);

  console.log(perSec);
  return null;
};
