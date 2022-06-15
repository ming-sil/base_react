import "../../styles/style.css";

export const FoodMenu = ({ menuName, beverage }) => {
  // console.log(props);
  // =>props는 오브젝트 형태로 가져오기때문에 매개변수에 중괄호를 적고 작성할 것
  // console.log(menuName);

  return (
    <div>
      오늘의 메뉴는 <i className="menu">{menuName}</i> 음료는
      <i className="bev">{beverage}</i>
      {/* =>jsx안쪽에 변수를 사용할 시 중괄호로 감싸줄 것 */}
    </div>
  );
};
