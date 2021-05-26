import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Compontents/reducers";
import { IAchievementsReducer } from "../Compontents/reducers/achievementsReducer";
import { ICounterReducer } from "../Compontents/reducers/counterReducer";
import { Notification } from "./notifications";

export const RenderNotifications: FC = () => {
  const { achievementsList, clickedCount } = useSelector<
    IState,
    IAchievementsReducer & ICounterReducer
  >((globalState) => ({
    ...globalState.achievements,
    ...globalState.counter
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    achievementsList?.length > 0 &&
      achievementsList.map((element) => {
        if (clickedCount == element.required && element.achieved == false) {
          {
            Notification();
          }
        }
      });
  }, [clickedCount]);
  return <></>;
};
