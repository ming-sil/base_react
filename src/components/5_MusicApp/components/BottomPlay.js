import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  font-size: 12px;
  font-weight: 700;
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 10px;
`;

const NextBtn = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #ccc;
  color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <Profile>
        <Avatar />
        <h3>Mingsil</h3>
      </Profile>
      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SBottomPlay>
  );
};
