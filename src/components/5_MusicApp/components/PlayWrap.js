import styled from "styled-components";

const SPlayWrap = styled.div``;

const GageWrap = styled.div``;

const Gage = styled.div``;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GageWrap>
        <Gage />
      </GageWrap>
      <span>00:03</span>
      <span>03:40</span>
    </SPlayWrap>
  );
};
