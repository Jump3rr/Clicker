import React, { useState } from "react";
import ActionTypes from "../../Actions/counterTypes";

const initialState = {
  count: -1
};

const localData = localStorage.getItem("click_count");
if (localData) {
  initialState.count = JSON.parse(localData) - 1;
}

export interface ICounterReducer {
  count: number;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return { count: state.count + 1 };
    case ActionTypes.RESET_PROGRESS:
      return { count: state.count = 0 };
    default:
      return state;
  }
};
