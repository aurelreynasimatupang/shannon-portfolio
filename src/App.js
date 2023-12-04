import './App.scss';
import Navbar from "./Navbar";
import Home from "./Home";
import Illus from "./Illus";
import Reels from "./Reels";
import Sketches from "./Sketches";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/illustrations" element={<Illus />} />
        <Route path="/sketches" element={<Sketches />} />
      </Routes>
    </div>
  );
}
