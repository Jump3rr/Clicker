import React, { FC, useEffect, Component } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
// import { ClickCounter } from "./clickerCounter";
// import { LevelUp } from "./clickerCounter";
import { createStore } from "redux";
import ClickCounter from "./clickerCounter";
import { bindActionCreators } from "redux";
import counterReducer from "../reducers/counterReducer";
import { increaseCount, getCount } from "../../Actions/actionCounter";
import { useSelector } from "react-redux";

// export const store = createStore(counterReducer);

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

// export const Counter: FC = () => {
export class Counter extends Component {
  static mapStateToProps = (state) => {
    return {
      count: state.count
    };
  };
  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        increaseCount,
        getCount
      },
      dispatch
    );
  };

  render() {
    return (
      <CookieCounter>
        <Level>Level:</Level>
        <ClickCounter />
        <span></span>
      </CookieCounter>
    );
  }
}
