export const Ex = ({ menuName }) => {
  //   console.log(menuName);
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <ul>
        <li>
          오늘의 메뉴는 {menuName[0].menuName} 사이드 {menuName[0].sideName}
        </li>
        <li>
          오늘의 메뉴는 {menuName[1].menuName} 사이드 {menuName[1].sideName}
        </li>
        <li>
          오늘의 메뉴는 {menuName[2].menuName} 사이드 {menuName[2].sideName}
        </li>
        <li>
          오늘의 메뉴는 {menuName[3].menuName} 사이드 {menuName[3].sideName}
        </li>
        <li>
          오늘의 메뉴는 {menuName[4].menuName} 사이드 {menuName[4].sideName}
        </li>
      </ul>
    </>
  );
};
