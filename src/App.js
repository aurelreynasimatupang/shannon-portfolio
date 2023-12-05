import './styles/App.scss';
import Home from "./Home";
import Illus from "./Illus";
import Reels from "./Reels";
import Commission from "./Commission";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/illustrations" element={<Illus />} />
        <Route path="/commission" element={<Commission />} />
      </Routes>
    </div>
  );
}
