import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IAchievementsReducer } from "../reducers/achievementsReducer";
import { ICounterReducer } from "../reducers/counterReducer";

const MainWrapper = styled.div`
  display: flex;
  margin-top: 12vh;
  flex-flow: row;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column-reverse;
  }
`;
const Showcase = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20vh);
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-content: center;
`;

const Achievement = styled.div`
  width: 20vh;
  height: 30vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  background-color: rgba(0, 254, 0, 0.4);
  text-align: center;
`;
const AchievementLocked = styled.div`
  width: 20vh;
  height: 30vh;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.3);
`;
const Title = styled.div`
  background-color: gold;
  width: 100%;
  font-weight: bold;
  font-size: 100%;
  color: white;
`;
const Description = styled.div`
  width: 100%;
  font-size: 80%;
  margin-top: 8vh;
  height: 30px;
`;
const AchievementImg = styled.img`
  width: 26px;
  height: auto;
  margin: -15px 0 0 -15px;
  float: left;
  position: static;
`;

export const Achievements: FC = () => {
  const { achievementsList, clickedCount } = useSelector<
    IState,
    IAchievementsReducer & ICounterReducer
  >((globalState) => ({
    ...globalState.achievements,
    ...globalState.counter
  }));

  return (
    <MainWrapper>
      <Showcase>
        {achievementsList?.length > 0 &&
          achievementsList.map((element) => {
            if (clickedCount >= element.required) {
              element.achieved = true;
            }
            if (element.achieved) {
              return [
                <Achievement>
                  <AchievementImg src="../../icons/achievement.jpg" alt="" />
                  <Title>
                    <p>{element.title}</p>
                  </Title>
                  <Description>{element.description}</Description>
                </Achievement>
              ];
            } else {
              return [
                <AchievementLocked>
                  <div>{element.title}</div>
                  <Description>{element.description}</Description>
                  <Description>
                    {clickedCount} / {element.required}
                  </Description>
                </AchievementLocked>
              ];
            }
          })}
      </Showcase>
    </MainWrapper>
  );
};
