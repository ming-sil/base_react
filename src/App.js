// eslint-disable-next-line
import TagRule from "./components/1_JsxRule/TagRule";
// eslint-disable-next-line
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  // eslint-disable-next-line
  FnComponent_1,
  // eslint-disable-next-line
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  return (
    <>
      {/* 1일차 */}
      {/* <TagRule /> */}

      {/* 2일차 */}
      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}

      {/* 3일차 */}
      {/* *props? */}
      {/* =><컴포넌트 프롭스명="값" /> */}
      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" beverage="커피" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="토마토리조또" beverage="콜라" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="훠거" beverage="얼그레이 하이볼" />
    </>
  );
};

export default App;
