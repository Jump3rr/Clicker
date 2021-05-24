import { Dispatch } from "redux";
import * as actionTypes from "./achievementsTypes";
import { IAchievements } from "../Compontents/Achievements/IAchievements";

export const getAchievements = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return fetch("./db.json", {})
      .then((response) => response.json())
      .then((achievementsList: IAchievements[]) => {
        dispath({
          type: actionTypes.GET_ACHIEVEMENTS,
          achievementsList
        });
      });
  }) as any;
