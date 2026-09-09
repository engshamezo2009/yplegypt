import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Wraper from "./wraper";
import HomePage from "./pages/homepage";
import "./styles/index.css";
import About from "./pages/about";
import PlantingGuide from "./pages/planting-guide";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper />}>
          <Route index element={<Navigate to="/planting-guide" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="about-us" element={<About />} />
          <Route path="dashboard" element={<p>fss</p>} />
          <Route path="planting-guide" element={<PlantingGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
