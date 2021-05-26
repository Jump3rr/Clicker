import { FC, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/colors";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { IShopReducer } from "../reducers/shopReducer";
import {
  increaseFarm,
  increaseGrandma,
  increaseMine,
  increaseFactory,
  increaseCity,
  increaseCountry
} from "../../Actions/shopActions";
import {
  grandmaBought,
  farmBought,
  mineBought,
  factoryBought,
  cityBought,
  countryBought
} from "../../Actions/actionCounter";

const MainWrapper = styled.div`
  display: flex;
  margin-top: 12vh;
  flex-flow: row;
`;
const ItemSection = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  grid-auto-flow: row;
  grid-gap: 10px;
  padding: 0 5% 5% 5%;
`;
const OneItem = styled.div`
  width: 100%;
  background-color: ${Colors.shop};
  display: flex;
  flex-direction: repeat(auto-fill, 30%);
  justify-content: space-between;
  align-items: center;
`;
const ItemTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  text-align: left;
`;
const ItemDescription = styled.div`
  color: ${Colors.lightgrey};
  font-size: 3.5vw;
  text-align: center;
`;
const OwnedNbr = styled.div`
  color: ${Colors.white};
  font-size: 5vw;
  font-weight: bold;
  text-align: right;
`;
const BuyButton = styled.button`
  padding: 0.15em 0.6em;
  border: 0.1em solid ${Colors.white};
  margin: 0 0.3em 0.3em 0.3em;
  border-radius: 0.12em;
  font-size: 2.7vw;
  color: ${Colors.white};
  background-color: transparent;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    color: ${Colors.black};
    background-color: ${Colors.white};
  }
`;

export const Shop: FC = () => {
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

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("grandma", JSON.stringify(grandma));
    localStorage.setItem("farm", JSON.stringify(farm));
    localStorage.setItem("mine", JSON.stringify(mine));
    localStorage.setItem("factory", JSON.stringify(factory));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("country", JSON.stringify(country));
    localStorage.setItem("click_count", JSON.stringify(clickedCount));
  }, [grandma, farm, mine, factory, city, country, clickedCount]);
  const incGrand = () => {
    dispatch(increaseGrandma()), dispatch(grandmaBought());
  };
  const incFarm = () => {
    dispatch(increaseFarm()), dispatch(farmBought());
  };
  const incMine = () => {
    dispatch(increaseMine()), dispatch(mineBought());
  };
  const incFactory = () => {
    dispatch(increaseFactory()), dispatch(factoryBought());
  };
  const incCity = () => {
    dispatch(increaseCity()), dispatch(cityBought());
  };
  const incCountry = () => {
    dispatch(increaseCountry()), dispatch(countryBought());
  };

  function CanBeBuy(withOne: number, required: number) {
    switch (withOne) {
      case 0:
        if (clickedCount >= required) {
          return <BuyButton onClick={incGrand}>Buy</BuyButton>;
        }
        break;
      case 1:
        if (clickedCount >= required) {
          return <BuyButton onClick={incFarm}>Buy</BuyButton>;
        }
        break;
      case 2:
        if (clickedCount >= required) {
          return <BuyButton onClick={incMine}>Buy</BuyButton>;
        }
        break;
      case 3:
        if (clickedCount >= required) {
          return <BuyButton onClick={incFactory}>Buy</BuyButton>;
        }
        break;
      case 4:
        if (clickedCount >= required) {
          return <BuyButton onClick={incCity}>Buy</BuyButton>;
        }
        break;
      case 5:
        if (clickedCount >= required) {
          return <BuyButton onClick={incCountry}>Buy</BuyButton>;
        }
        break;
      default:
        break;
    }
  }

  return (
    <MainWrapper>
      <ItemSection>
        <OneItem>
          <ItemTitle>
            {grandma.name}
            <div>{CanBeBuy(0, 10)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {grandma.price}</div>
            <div>Production per second: {grandma.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{grandma.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>
            {farm.name}
            <div>{CanBeBuy(1, 100)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {farm.price}</div>
            <div>Production per second: {farm.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{farm.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>
            {mine.name}
            <div>{CanBeBuy(2, 500)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {mine.price}</div>
            <div>Production per second: {mine.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{mine.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>
            {factory.name}
            <div>{CanBeBuy(3, 1000)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {factory.price}</div>
            <div>Production per second: {factory.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{factory.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>
            {city.name}
            <div>{CanBeBuy(4, 10000)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {city.price}</div>
            <div>Production per second: {city.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{city.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>
            {country.name}
            <div>{CanBeBuy(5, 100000)}</div>
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {country.price}</div>
            <div>Production per second: {country.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{country.count}</OwnedNbr>
        </OneItem>
      </ItemSection>
    </MainWrapper>
  );
};
