import react, { FC, useEffect } from "react";
import styled from "styled-components";
import { IShop, ShopItems } from "./IShop";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { IRequiredReducer } from "../reducers/requiredReducer";
import { IShopReducer } from "../reducers/shopReducer";
import shopReducer from "../reducers/shopReducer";
// import { ShopActions } from "./ShopActions";
import { increaseFarm, increaseGrandma } from "../../Actions/shopActions";

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
  background-color: blue;
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
  color: grey;
  font-size: 3.5vw;
  text-align: center;
`;
const OwnedNbr = styled.div`
  color: white;
  font-size: 5vw;
  font-weight: bold;
  text-align: right;
`;
const BuyButton = styled.button`
  padding: 0.15em 0.6em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0.3em;
  border-radius: 0.12em;
  font-size: 2.7vw;
  color: white;
  background-color: transparent;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const Shop: FC = () => {
  const { count, grandma, farm, mine, factory, city, country } = useSelector<
    IState,
    ICounterReducer & IShopReducer
  >((globalState) => ({
    ...globalState.counter,
    ...globalState.shopItems,
    ...globalState.shopItems.grandma,
    ...globalState.shopItems.farm,
    ...globalState.shopItems.mine,
    ...globalState.shopItems.factory,
    ...globalState.shopItems.city,
    ...globalState.shopItems.country
  }));

  // function CanBeBuy(required: number) {
  //   if (count > required) {
  //     return <BuyButton>Buy</BuyButton>;
  //   }
  // }
  // const [grandma, setGrandmaCount] = useState({
  //   name: "Grandma",
  //   count: 0,
  //   price: 10,
  //   perSec: 1
  // });
  // const [farm, setFarmCount] = useState({
  //   name: "Farm",
  //   count: 0,
  //   price: 100,
  //   perSec: 10
  // });
  // const [mine, setMineCount] = useState({
  //   name: "Mine",
  //   count: 0,
  //   price: 500,
  //   perSec: 50
  // });
  // const [factory, setFactoryCount] = useState({
  //   name: "Factory",
  //   count: 0,
  //   price: 1000,
  //   perSec: 100
  // });
  // const [city, setCityCount] = useState({
  //   name: "City",
  //   count: 0,
  //   price: 10000,
  //   perSec: 1000
  // });
  // const [country, setCountryCount] = useState({
  //   name: "Country",
  //   count: 0,
  //   price: 100000,
  //   perSec: 10000
  // });

  // const handleClickGrandma = () => {
  //   setGrandmaCount((prevState) => ({
  //     ...prevState,
  //     count: grandma.count + 1
  //   }));
  // };
  // const handleClickFarm = () => {
  //   setFarmCount((prevState) => ({
  //     ...prevState,
  //     count: farm.count + 1
  //   }));
  // };
  // const handleClickMine = () => {
  //   setMineCount((prevState) => ({
  //     ...prevState,
  //     count: mine.count + 1
  //   }));
  // };
  // const handleClickFactory = () => {
  //   setFactoryCount((prevState) => ({
  //     ...prevState,
  //     count: factory.count + 1
  //   }));
  // };
  // const handleClickCity = () => {
  //   setCityCount((prevState) => ({
  //     ...prevState,
  //     count: city.count + 1
  //   }));
  // };
  // const handleClickCountry = () => {
  //   setCountryCount((prevState) => ({
  //     ...prevState,
  //     count: country.count + 1
  //   }));
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    increaseGrandma();
    // localStorage.setItem("click_count", JSON.stringify(count));
  }, []);
  const incGrand = () => {
    dispatch(increaseGrandma());
  };
  const incFarm = () => {
    dispatch(increaseFarm());
  };

  return (
    <MainWrapper>
      <ItemSection>
        <OneItem>
          <ItemTitle>
            {grandma.name}
            <button onClick={incGrand}>abc</button>
            {/* {CanBeBuy(grandma.price)} */}
          </ItemTitle>
          <ItemDescription>
            <div>Cost: {grandma.price}</div>
            <div>Production per second: {grandma.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{grandma.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>{farm.name}</ItemTitle>
          <button onClick={incFarm}>abc</button>
          <ItemDescription>
            <div>Cost: {farm.price}</div>
            <div>Production per second: {farm.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{farm.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>{mine.name}</ItemTitle>
          <ItemDescription>
            <div>Cost: {mine.price}</div>
            <div>Production per second: {mine.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{mine.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>{factory.name}</ItemTitle>
          <ItemDescription>
            <div>Cost: {factory.price}</div>
            <div>Production per second: {factory.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{factory.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>{city.name}</ItemTitle>
          <ItemDescription>
            <div>Cost: {city.price}</div>
            <div>Production per second: {city.perSec}</div>
          </ItemDescription>
          <OwnedNbr>{city.count}</OwnedNbr>
        </OneItem>
        <OneItem>
          <ItemTitle>{country.name}</ItemTitle>
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
