import React, { FC, useState } from "react";
import { levelUp } from "../../Actions/levelActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import {  } from "react-redux";
import { IState } from "../reducers";
import { ICounterReducer } from "../reducers/counterReducer";
import { ILevelReducer } from "../reducers/levelReducer";
import { useSelector } from "react-redux";

export const Leveling: FC = () => {
  const { count } = useSelector<IState, ICounterReducer>((globalState) => ({
    ...globalState.counter
  }));
  const [level, levelUp] = useState(1);
  const [required, changeRequire] = useState(10);

  const handleLevel = () => {
    levelUp((prevState) => prevState + 1);
  };
  const handleRequired = () => {
    changeRequire((prevState) => prevState * 2);
  };
  if (count === required) {
    handleRequired();
    handleLevel();
  }

  return (
    <>
      <span>Level: {level}</span>
    </>
  );
};
