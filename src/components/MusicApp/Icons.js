import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icon = styled.div`
  font-size: 50px;
  i {
    color: red;
  }
  svg {
    color: blue;
  }
`;

export const Icons = () => {
  return (
    <>
      <Icon>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-solid fa-seedling"></i>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause} />
        <FontAwesomeIcon icon={faAngleRight} />
      </Icon>
    </>
  );
};
