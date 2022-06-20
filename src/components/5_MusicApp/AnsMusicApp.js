import styled from "styled-components";
import { BottomPlay } from "./components/BottomPlay";
import { BtnWrap } from "./components/BtnWrap";
import { Header } from "./components/Header";
import { PlayWrap } from "./components/PlayWrap";
import { TitleWrap } from "./components/TitleWrap";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Section = styled.div`
  width: 375px;
  height: 667px;
  background-color: #1d1d1d;
  border-radius: 25px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverImg = styled.div`
  width: 90%;
  height: 280px;
  border-radius: 25px;
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
`;

export const AnsMusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg
          style={{
            background: `url(https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/e80/image/OEoWWoq-OnoJDV4XHj61fncPK0E.jpg) no-repeat center / cover`,
          }}
        />
        <TitleWrap />
        <PlayWrap />
        <BtnWrap />
        <BottomPlay />
      </Section>
    </Wrap>
  );
};
