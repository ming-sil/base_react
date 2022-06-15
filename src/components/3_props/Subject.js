export const Subject = ({ sub }) => {
  console.log(sub[0].subTitle);
  return (
    <>
      <h3>수업과목: {sub[0].subTitle} </h3>
      <h3>수업과목: {sub[1].subTitle} </h3>
      <h3>수업과목: {sub[2].subTitle} </h3>
      <h3>수업과목: {sub[3].subTitle} </h3>
      <h3>수업과목: {sub[4].subTitle} </h3>
    </>
  );
};
