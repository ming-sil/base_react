import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <h3>페이지를 찾을 수 없습니다.</h3>
      <span>
        <Link to="/">홈으로 가기(☞ﾟヮﾟ)☞ &rarr;</Link>
      </span>
    </>
  );
};

// &rarr; : right arrow
// &larr; : left arrow
