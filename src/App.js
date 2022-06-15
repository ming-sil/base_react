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
import { menuDb, subDb } from "./db";

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
      {/* <Menus /> */}
      {/* <Subject sub={subDb} /> */}
      <Ex menuName={menuDb} />
    </>
  );
};

export default App;
