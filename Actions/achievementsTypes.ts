import { IAchievements } from "../Compontents/Achievements/IAchievements";

export const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";

export interface IAchievementTypes {
  GET_ACHIEVEMENTS: {
    achievementsList: IAchievements[];
  };
}
