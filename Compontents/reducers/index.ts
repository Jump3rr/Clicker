import { combineReducers } from "redux";

import counter, { ICounterReducer } from "./counterReducer";
import achievements, { IAchievementsReducer } from "./achievementsReducer";
import level, { ILevelReducer } from "./levelReducer";
import toNextLevel, { IRequiredReducer } from "./requiredReducer";
import shopItems, { IShopReducer } from "./shopReducer";

export default combineReducers({
  counter,
  achievements,
  level,
  toNextLevel,
  shopItems
});

export interface IState {
  counter: ICounterReducer;
  achievements: IAchievementsReducer;
  level: ILevelReducer;
  toNextLevel: IRequiredReducer;
  shopItems: IShopReducer;
}
