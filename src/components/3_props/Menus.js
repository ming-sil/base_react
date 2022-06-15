import { FoodMenu } from "../2_component/FoodMenu";

export const Menus = () => {
  return (
    <>
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
