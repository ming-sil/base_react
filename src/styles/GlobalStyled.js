import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyle = {
  mainColor: "#F24C4C",
  highLightColor: "teal",
  fontSize: "26px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

body{
  font-family: 'Noto Sans KR', sans-serif;
}

a{
  color: #1d1d1d;
}
`;
