import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Menus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: white;
    color: #1d1d1d;
    font-size: 12px;
  }
  &:nth-child(2) {
    border: 1px solid white;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Menus>
        <FontAwesomeIcon icon={faChevronDown} />
      </Menus>
      <Menus>
        <FontAwesomeIcon icon={faBars} />
      </Menus>
    </SHeader>
  );
};
