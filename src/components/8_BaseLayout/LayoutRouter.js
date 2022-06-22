import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Heder";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Sub1 } from "./pages/Sub1";
import { Sub2 } from "./pages/Sub2";

export const LayoutRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sub1" element={<Sub1 />}></Route>
        <Route path="/sub2" element={<Sub2 />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};
