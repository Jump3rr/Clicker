import { FC } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";

const Bar = styled.div`
  background: ${Colors.lightblue};
  height: 12vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
`;
const Logo = styled.img`
  width: auto;
  height: 12vh;
  order: 1;
`;
const Navs = styled.div`
  color: ${Colors.white};
  order: 2;
  justify-content: center;
  align-items: center;
  transform: translateY(30%);
  margin: 0px 2% 0px 2%;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
    transform: translateY(40%);
  }
`;

export const TopBar: FC = () => {
  return (
    <Bar>
      <Logo src="../../icons/cookie.png" alt="Logo" />
      <Navs>Home</Navs>
      <Navs>Achievements</Navs>
      <Navs>Shop</Navs>
    </Bar>
  );
};
