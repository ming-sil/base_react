import styled, { keyframes } from "styled-components";

const move = keyframes`
    0%{
        margin: 0;
    }
    100%{
        margin-top: 100px;
        margin-left: 100px;
    }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: gold;
  animation: ${move} 1s infinite alternate;
`;

export const Animation = () => {
  return <Box>Animation</Box>;
};
