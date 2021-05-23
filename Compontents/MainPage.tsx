import { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopBar } from "../Compontents/NavBar/TopBar";
import { HomePage } from "../Compontents/HomePage/HomePage";
import { Achievements } from "../Compontents/Achievements/Achievements";
import { Shop } from "../Compontents/Shop/Shop";
import { useDispatch } from "react-redux";
import { getAchievements } from "./../Actions/achievementsActions";
import { increaseCount, getCount } from "./../Actions/actionCounter";

type GetAchievements = ReturnType<typeof getAchievements>;
type IncreaseCount = ReturnType<typeof increaseCount>;
type GetCount = ReturnType<typeof getCount>;

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetAchievements>(getAchievements());
    dispatch<IncreaseCount>(increaseCount());
    dispatch<GetCount>(getCount());
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
    </Router>
  );
};
