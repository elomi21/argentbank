import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Error from "./pages/Error/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
