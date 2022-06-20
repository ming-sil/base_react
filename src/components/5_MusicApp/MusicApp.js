import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faAngleDown,
  faBars,
  faShuffle,
  faBackward,
  faForward,
  faRepeat,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #333;
`;
const AppWrap = styled.div`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 20px;
  padding: 35px;
`;
const TopIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    background-color: white;
  }
  &:nth-child(2) {
    color: white;
  }
`;
const ImgWrap = styled.div`
  width: 250px;
  height: 275px;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  img {
    width: 110%;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;
const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
`;
const Artist = styled.h5`
  font-size: 14px;
  font-weight: 100;
  color: white;
`;
const GageBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const PlayProgress = styled.div`
  width: 10%;
  height: 100%;
  background-color: salmon;
`;
const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 100;
  color: white;
`;
const TimeNow = styled.div``;
const TimeEnd = styled.div``;

const MainIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:nth-child(3) {
    background-color: salmon;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImgWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
`;
const UserName = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #1d1d1d;
  margin-left: 10px;
`;
const BIconWrap = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 12px;
  color: #1d1d1d;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <AppWrap>
        <TopIconWrap>
          <IconWrap>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconWrap>
          <IconWrap>
            <FontAwesomeIcon icon={faBars} />
          </IconWrap>
        </TopIconWrap>

        <ImgWrap>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5beb8a1b7106992e7abaa8a4/1644470465651-DFMXE5U0G2WLOCJOE4M4/Epik+High+Is+Here+Cover.jpg?format=1000w"
            alt="앨범커버"
          />
        </ImgWrap>

        <TitleWrap>
          <Title>New Beautiful</Title>
          <Artist>Epik High</Artist>
        </TitleWrap>

        <GageBar>
          <PlayProgress />
        </GageBar>
        <TimeWrap>
          <TimeNow>00:03</TimeNow>
          <TimeEnd>03:40</TimeEnd>
        </TimeWrap>
        <MainIconWrap>
          <IconCircle>
            <FontAwesomeIcon icon={faShuffle} />
          </IconCircle>
          <IconCircle>
            <FontAwesomeIcon icon={faBackward} />
          </IconCircle>
          <IconCircle>
            <FontAwesomeIcon icon={faPause} />
          </IconCircle>
          <IconCircle>
            <FontAwesomeIcon icon={faForward} />
          </IconCircle>
          <IconCircle>
            <FontAwesomeIcon icon={faRepeat} />
          </IconCircle>
        </MainIconWrap>
        <Bottom>
          <UserInfo>
            <ProfileImgWrap>
              <img
                src="https://avatars.githubusercontent.com/u/106130309?v=4"
                alt="프로필이미지"
              />
            </ProfileImgWrap>
            <UserName>Ming-sil</UserName>
          </UserInfo>
          <BIconWrap>
            <FontAwesomeIcon icon={faForwardStep} />
          </BIconWrap>
        </Bottom>
      </AppWrap>
    </Wrap>
  );
};
