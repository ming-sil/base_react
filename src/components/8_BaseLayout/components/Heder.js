import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  padding: 0 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  a {
    text-decoration: none;
    color: #1d1d1d;
  }
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 900;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  margin-left: 250px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="/sub1">메뉴1</Link>
        </Menu>
        <Menu>
          <Link to="/sub2">메뉴2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
