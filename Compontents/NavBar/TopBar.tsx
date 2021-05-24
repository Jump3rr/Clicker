import { FC } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const Urls = styled.div`
  text-decoration: none;
  display: inline-block;
  color: ${Colors.white};
  &:hover {
    color: ${Colors.white};
    text-decoration: underline;
  }
`;

export const TopBar: FC = () => {
  return (
    <Bar>
      <Link to="/">
        <Logo src="../../icons/cookie.png" alt="Logo" />
      </Link>
      <Navs>
        <Link to="/">
          <Urls>Home</Urls>
        </Link>
      </Navs>
      <Navs>
        <Link to="/Achievements">
          <Urls>Achievements</Urls>
        </Link>
      </Navs>
      <Navs>
        <Link to="/Shop">
          <Urls>Shop</Urls>
        </Link>
      </Navs>
    </Bar>
  );
};
