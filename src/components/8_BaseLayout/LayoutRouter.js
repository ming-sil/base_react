import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Heder";
import { sub_1, sub_2 } from "./contens";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Sub } from "./pages/Sub";

export const LayoutRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sub1" element={<Sub cons={sub_1} />}></Route>
        <Route path="/sub2" element={<Sub cons={sub_2} />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};
