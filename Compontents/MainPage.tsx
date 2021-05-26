import { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "../Compontents/NavBar/TopBar";
import { HomePage } from "../Compontents/HomePage/HomePage";
import { Achievements } from "../Compontents/Achievements/Achievements";
import { Shop } from "../Compontents/Shop/Shop";
import { useDispatch } from "react-redux";
import { getAchievements } from "./../Actions/achievementsActions";
import { increaseCount } from "./../Actions/actionCounter";
import { levelUp } from "./../Actions/levelActions";
import { increaseRequirement } from "./../Actions/requiredActions";
import { Bots } from "../Actions/increasePerSecond";
import { RenderNotifications } from "../tools/renderNotification";
import { Leveling } from "../Compontents/HomePage/leveling";

type GetAchievements = ReturnType<typeof getAchievements>;
type IncreaseCount = ReturnType<typeof increaseCount>;
type LevelUp = ReturnType<typeof levelUp>;
type IncreaseRequirement = ReturnType<typeof increaseRequirement>;

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetAchievements>(getAchievements());
    dispatch<IncreaseCount>(increaseCount());
    dispatch<LevelUp>(levelUp());
    dispatch<IncreaseRequirement>(increaseRequirement());
  }, []);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Achievements" exact>
          <Achievements />
        </Route>
        <Route path="/Shop" exact>
          <Shop />
        </Route>
      </Switch>
      <Bots />
      <RenderNotifications />
    </Router>
  );
};
