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
import { Icons } from "./components/5_MusicApp/Icons";
import { MusicApp } from "./components/5_MusicApp/MusicApp";
import { AnsMusicApp } from "./components/5_MusicApp/AnsMusicApp";
import { ClassEvent } from "./components/6_Event/ClassEvent";
import { FnEvent } from "./components/6_Event/FnEvent";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* Day 1 */}
      {/* <TagRule /> */}

      {/* Day 2 */}
      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}

      {/* Day 3 */}
      {/* <Menus /> */}
      {/* <Subject sub={subDb} /> */}
      {/* <Ex menuName={menuDb} /> */}

      {/* Day 4 */}
      {/* <FoodMenu menus={menuDb} /> */}
      {/* <ExKakao kakaoData={kakoDb} /> */}
      {/* <Content /> */}

      {/* Day 5 */}
      {/* <Icons /> */}
      {/* <MusicApp /> */}
      {/* <AnsMusicApp /> */}

      {/* Day6 */}
      <ClassEvent />
      <FnEvent />
    </>
  );
};

export default App;
