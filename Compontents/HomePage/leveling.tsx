import React, { FC, useEffect } from "react";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
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

  if (clickedCount < toNextLevel) {
    return <></>;
  } else {
    return dispatch(increaseRequirement()), dispatch(levelUp()), (<></>);
  }
};
