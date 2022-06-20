import styled from "styled-components";

const SPlayWrap = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const GageWrap = styled.div`
  height: 5px;
  background-color: gray;
`;

const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: mediumpurple;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
`;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GageWrap>
        <Gage />
      </GageWrap>
      <TimeWrap>
        <span>00:03</span>
        <span>03:40</span>
      </TimeWrap>
    </SPlayWrap>
  );
};
