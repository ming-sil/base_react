export const ExKakao = ({ kakaoData }) => {
  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>카카오</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        {kakaoData.map((text) => (
          <li key={text.id} style={{ width: "30%", marginRight: "30px" }}>
            <div
              style={{
                width: "100%",
                height: "25%",
                overflow: "hidden",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={text.imgUrl}
                style={{
                  width: "100%",
                }}
              />
            </div>
            <h3 style={{ marginBottom: "15px" }}>{text.title}</h3>
            <p>{text.desc.slice(0, 50) + "..."}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
