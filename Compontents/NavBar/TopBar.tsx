import { FC } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";

const Bar = styled.div`
  background: ${Colors.lightblue};
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const TopBar: FC = () => {
  return <Bar></Bar>;
};
