import { FC, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IAchievementsReducer } from "../reducers/achievementsReducer";

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
`;

export const Achievements: FC = () => {
  const { achievementsList } = useSelector<IState, IAchievementsReducer>(
    (globalState) => ({
      ...globalState.achievements
    })
  );

  return (
    <MainWrapper>
      <Showcase>
        {achievementsList?.length > 0 &&
          achievementsList.map((element) => {
            return [
              <Achievement>
                <div>{element.title}</div>
                <div>{element.description}</div>
              </Achievement>
            ];
          })}
      </Showcase>
      {console.log({ achievementsList })}
    </MainWrapper>
  );
};
