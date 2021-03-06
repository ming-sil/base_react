import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyled";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  /* =>2.프롭스 받아올 때 사용방법 */
  border: 5px solid ${mainStyle.highLightColor};
  font-size: ${mainStyle.fontSize};
`;

export const Content = () => {
  return (
    <>
      <Box bgColor={mainStyle.mainColor}>styled components</Box>
      {/* =>1.스타일 컴포넌트 사용할 때 props전달 */}
    </>
  );
};

// *리액트 스타일
// =>jsx문법에서 class는 className을 사용해야됨
// =>태그 내부에서도 사용할 수 있지만 외부로 사용가능(단, 반드시 스타일을 사용하는 컴포넌트에 import시킬 것)
// =>import "./styles/styles.css";
//
// *styled-components
// =>태그 이름을 지정하지 않아도 되는 장점이 있음
// =>props로 값을 전달받을 수 있음
// =>npm install --save styled-components
// =>--save옵션은 패키지 제이슨에 dependency항목에 추가하는것(생략가능)
// =>기본 스타일은 scss와 비슷함
