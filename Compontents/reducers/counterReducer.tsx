import React, { useState } from "react";
import ActionTypes from "../../Actions/counterTypes";

const initialState = {
  clickedCount: -1
};

const localData = localStorage.getItem("click_count");
if (localData) {
  initialState.clickedCount = JSON.parse(localData) - 1;
}

export interface ICounterReducer {
  clickedCount: number;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return { clickedCount: state.clickedCount + 1 };
    case ActionTypes.RESET_PROGRESS:
      return { clickedCount: state.clickedCount = 0 };
    case ActionTypes.GRANDMA_BOUGHT:
      return { clickedCount: state.clickedCount - 10 };
    case ActionTypes.FARM_BOUGHT:
      return { clickedCount: state.clickedCount - 100 };
    case ActionTypes.MINE_BOUGHT:
      return { clickedCount: state.clickedCount - 500 };
    case ActionTypes.FACTORY_BOUGHT:
      return { clickedCount: state.clickedCount - 1000 };
    case ActionTypes.CITY_BOUGHT:
      return { clickedCount: state.clickedCount - 10000 };
    case ActionTypes.COUNTRY_BOUGHT:
      return { clickedCount: state.clickedCount - 100000 };
    case ActionTypes.INCREASE_BY_BOTS:
      return {
        ...state,
        clickedCount: state.clickedCount + action.valuePerSec
      };
    default:
      return state;
  }
};
