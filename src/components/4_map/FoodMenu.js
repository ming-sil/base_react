export const FoodMenu = ({ menus }) => {
  console.log(menus);
  return (
    <>
      <h1 style={{ color: "salmon" }}>오늘의 메뉴!</h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            오늘의 메뉴는 {menu.menuName}랑 사이드메뉴는 {menu.sideName}다.
            {console.log(menu)}
          </li>
        ))}
      </ul>
    </>
  );
};

// *map
// =>배열안의 요소를 새로운 배열로 만들어 줌
// 배열.map(변수 => 새로만들 배열)

// *key
// =>key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
