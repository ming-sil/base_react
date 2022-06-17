import TagRule from "./components/1_JsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { Ex } from "./components/3_props/Ex";
import { Menus } from "./components/3_props/Menus";
import { Subject } from "./components/3_props/Subject";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { kakoDb, menuDb, subDb } from "./db";
import { ExKakao } from "./components/4_map/ExKakao";
import { Content } from "./components/4_map/Content";
import { GlobalStyled } from "./styles/GlobalStyled";
import { Icons } from "./components/MusicApp/Icons";
import { MusicApp } from "./components/MusicApp/MusicApp";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* 1일차 */}
      {/* <TagRule /> */}

      {/* 2일차 */}
      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}

      {/* 3일차 */}
      {/* <Menus /> */}
      {/* <Subject sub={subDb} /> */}
      {/* <Ex menuName={menuDb} /> */}

      {/* 4일차 */}
      {/* <FoodMenu menus={menuDb} /> */}
      {/* <ExKakao kakaoData={kakoDb} /> */}
      {/* <Content /> */}

      {/* 5일차 */}
      {/* <Icons /> */}
      <MusicApp />
    </>
  );
};

export default App;
