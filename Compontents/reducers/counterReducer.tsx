import { useState } from "react";
import ActionTypes from "../../Actions/counterTypes";

const initialState = {
  count: -1
};
const initialLvlState = {
  level: 0
};
const initialToNextLvlState = {
  toNextLevel: 5
};

export interface ICounterReducer {
  count: number;
  level: number;
  toNextLevel: number;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return { count: state.count + 1 };
    case ActionTypes.RESET_PROGRESS:
      return { count: state.count = 0 };
    // case ActionTypes.INCREASE_REQUIREMENT:
    //   return { toNextLevel: tstate.toNextLevel * 2 };
    // case ActionTypes.LEVEL_UP:
    //   return { level: lstate.level + 1 };
    default:
      return state;
  }
};
