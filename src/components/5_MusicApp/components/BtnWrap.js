import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBtnWrap = styled.div``;

const Items = styled.div``;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <Items>
        <FontAwesomeIcon icon={faShuffle} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faBackward} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faPause} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faForward} />
      </Items>
      <Items>
        <FontAwesomeIcon icon={faRepeat} />
      </Items>
    </SBtnWrap>
  );
};
