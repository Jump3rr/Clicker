import { Dispatch } from "redux";
import * as actionTypes from "./achievementsTypes";
import { IAchievements } from "../Compontents/Achievements/IAchievements";

export const getAchievements = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return (
      // fetch("https://jsonplaceholder.typicode.com/users")
      fetch("./db.json", {
        // headers: {
        //   Accept: "application/json"
        // }
      })
        .then((response) => response.json())
        .then((achievementsList: IAchievements[]) => {
          console.log(achievementsList);
          dispath({
            type: actionTypes.GET_ACHIEVEMENTS,
            achievementsList
          });
        })
    );
  }) as any;
