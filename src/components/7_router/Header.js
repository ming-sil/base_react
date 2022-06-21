import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/intro">소개</Link>
      </li>
      <li>
        <Link to="/product">제품</Link>
      </li>
    </ul>
  );
};

// *Link
// =>라우터 내부에서 a태그 대신 사용할수 있으며, 반드시 Route안에 있어야됨
// =>to="" 는 경로를 지정할 수 있음
