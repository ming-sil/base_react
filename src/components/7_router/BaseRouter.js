import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// *HashRouter : 해시태그가 붙어있는 라우터
// *Route : 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링함

import { Header } from "./Header";
import { Home } from "./routes/Home";
import { Intro } from "./routes/Intro";
import { PageNotFound } from "./routes/PageNotFound";
import { Product } from "./routes/Product";

export const BaseRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

{
  /* <HashRouter>     
  <Routes>       
      <Route path="/" element={<Home />} />       
      <Route path="/detail/*" element={<Detail />} />       
      <Route path="/search/*" element={<Search />} />       
      <Route path="/*" element={<NotFound />} />     
    </Routes>
</HashRouter> */
}
