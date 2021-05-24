import { FC } from "react";
import styled from "styled-components";
import { IShop, ShopItems } from "./IShop";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { IRequiredReducer } from "../reducers/requiredReducer";

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
  const { count } = useSelector<IState, ICounterReducer>((globalState) => ({
    ...globalState.counter
  }));

  function CanBeBuy(required: number) {
    if (count > required) {
      return <BuyButton>Buy</BuyButton>;
    }
  }

  return (
    <MainWrapper>
      <ItemSection>
        {ShopItems.map((item) => {
          return [
            <OneItem>
              <ItemTitle>
                {item.name}
                <div>{CanBeBuy(item.cost)}</div>
              </ItemTitle>
              <ItemDescription>
                <div>Cost: {item.cost}</div>
                <div>Production per second: {item.perSec}</div>
              </ItemDescription>
              <OwnedNbr>{item.owned}</OwnedNbr>
            </OneItem>
          ];
        })}
      </ItemSection>
    </MainWrapper>
  );
};
