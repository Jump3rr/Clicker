import { combineReducers } from "redux";

import counter, { ICounterReducer } from "./counterReducer";
import achievements, { IAchievementsReducer } from "./achievementsReducer";
import level, { ILevelReducer } from "./levelReducer";
import toNextLevel, { IRequiredReducer } from "./requiredReducer";

export default combineReducers({
  counter,
  achievements,
  level,
  toNextLevel
});

export interface IState {
  counter: ICounterReducer;
  achievements: IAchievementsReducer;
  level: ILevelReducer;
  toNextLevel: IRequiredReducer;
}
