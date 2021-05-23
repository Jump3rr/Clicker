import { combineReducers } from "redux";

import counter, { ICounterReducer } from "./counterReducer";
import achievements, { IAchievementsReducer } from "./achievementsReducer";

export default combineReducers({
  counter,
  achievements
});

export interface IState {
  counter: ICounterReducer;
  achievements: IAchievementsReducer;
}
