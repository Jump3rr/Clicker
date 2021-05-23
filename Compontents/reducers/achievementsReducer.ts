import { IAchievements } from "../Achievements/IAchievements";
import * as actionTypes from "../../Actions/achievementsTypes";

export interface IAchievementsReducer {
  achievementsList: IAchievements[];
}

const defaultState = (): IAchievementsReducer => ({
  achievementsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_ACHIEVEMENTS: {
      const paylod: actionTypes.IAchievementTypes["GET_ACHIEVEMENTS"] = action;
      return {
        ...state,
        achievementsList: paylod.achievementsList
      };
    }
    default: {
      return state;
    }
  }
};
