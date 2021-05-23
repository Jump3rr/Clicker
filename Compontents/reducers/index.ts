import { combineReducers } from "redux";

// import users, { IUsersReducer } from "./counterReducer";
import achievements, { IAchievementsReducer } from "./achievementsReducer";

export default combineReducers({
  // users,
  achievements
});

export interface IState {
  // users: IUsersReducer;
  achievements: IAchievementsReducer;
}
