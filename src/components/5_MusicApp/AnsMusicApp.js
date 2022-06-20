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
  height: 250px;
  border-radius: 25px;
  box-shadow: 0 15px 20px 10px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
`;

export const AnsMusicApp = () => {
  return (
    <Wrap>
      <Section>
        <Header />
        <CoverImg
          style={{
            background: `url(https://upload.wikimedia.org/wikipedia/commons/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif) no-repeat center / cover`,
          }}
        >
          Like That
        </CoverImg>
        <TitleWrap />
        <PlayWrap />
        <BtnWrap />
        <BottomPlay />
      </Section>
    </Wrap>
  );
};
