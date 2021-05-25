import React, { FC, useEffect } from "react";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { ILevelReducer } from "../reducers/levelReducer";
import { IRequiredReducer } from "../reducers/requiredReducer";
import { increaseRequirement } from "../../Actions/requiredActions";
import { levelUp } from "../../Actions/levelActions";

export const Leveling: FC = () => {
  const { clickedCount, toNextLevel } = useSelector<
    IState,
    ICounterReducer & IRequiredReducer
  >((globalState) => ({
    ...globalState.counter,
    ...globalState.toNextLevel
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    increaseRequirement();
    levelUp();
    localStorage.setItem("click_count", JSON.stringify(clickedCount));
  }, [clickedCount]);

  // const localData = localStorage.getItem("click_count");
  // console.log(JSON.parse(localData));
  // console.log(typeof JSON.parse(localData));

  if (clickedCount < toNextLevel) {
    return <></>;
  } else {
    // return dispatch(increaseRequirement()), dispatch(levelUp()), (<></>);
    return dispatch(increaseRequirement()), dispatch(levelUp()), (<></>);
  }
};
