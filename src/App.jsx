import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/header.jsx";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import About from "./Components/About.jsx";
import Info from "./Components/Info.jsx";


export default function App() {
  return (
    <div className="container">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
   
    </Router>
     </div>
  );
}
