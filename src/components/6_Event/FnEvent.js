import { useState } from "react";

export const FnEvent = () => {
  const [num, setNum] = useState(0);

  console.log(num);

  // *const[속성, 속성] = 객체 명; / const{속성, 속성} = 객체 명; :배열/객체 비구조화 할당(distructuring assignment)
  // =>객체의 내용을 쉽게 뽑아쓸 수 있게 만듦

  // *Hooks
  // =>기존 클래스형 컴포넌트에서 비효율적인 부분을 개선하여 사용하기 편리하게 만듦

  //   1.
  //   const handlePlus = () => {
  //     setNum(num + 1);
  //   };
  //   const handleMinus = () => {
  //     setNum(num - 1);
  //   };

  //   2.
  //   const handlePlus = () => setNum(num + 1);

  //   const handleMinus = () => setNum(num - 1);

  return (
    <>
      <h3> {num} </h3>
      {/* <button onClick={handlePlus}> + </button>
      <button onClick={handleMinus}> - </button> */}

      {/* 3. */}
      <button onClick={() => setNum(num + 1)}> + </button>
      <button onClick={() => setNum(num - 1)}> - </button>
    </>
  );
};
