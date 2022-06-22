import styled from "styled-components";

const Section = styled.section`
  padding: 200px 400px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 400px;
  height: 500px;
  background-color: pink;
`;

const TextWrap = styled.div`
  max-width: 500px;
`;

const Title = styled.h3`
  margin-top: 100px;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  opacity: 0.7;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const Sub2 = () => {
  return (
    <Section>
      <Bg />
      <TextWrap>
        <Title>서브웨이 맛있겠다</Title>
        <Desc>
          써브웨이는 미국에 본거지를 둔 샌드위치 전문 레스토랑 체인이다. 현재
          맥도날드를 앞서는 세계에서 점포 수가 가장 많은 레스토랑 체인이다.
          위키백과 본사: 미국 코네티컷 밀퍼드 창립: 1965년 8월 28일, 미국
          코네티컷 브리지포트 CEO: 존 치드시 (2019년 11월–) 소유자: 프레드
          드루카 대표: 수잔 그레코 창립자: 프레드 드루카, 피터 벅 모회사:
          Doctor's Associates, Inc.
        </Desc>
      </TextWrap>
    </Section>
  );
};
