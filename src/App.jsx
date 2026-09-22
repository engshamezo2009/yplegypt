import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Wraper from "./wraper";
import HomePage from "./pages/homepage";
import "./styles/index.css";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import EventDashboard from "./pages/event-dashboard";
import PlantingGuide from "./pages/planting-guide";
import Login from "./pages/login";
import JoinUs from "./pages/join-us";
import ComingSoon from "./pages/ComingSoon";
import PlantingField from "./pages/planting-field";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper />}>
          <Route index element={<Navigate to="/homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="about-us" element={<About />} />
          <Route path="dashboard" element={<ComingSoon />}>
            {/* <Route
              index
              element={<Navigate to="green-future-challenge-2026" replace />}
            />

            <Route
              path="green-future-challenge-2026"
              element={<EventDashboard />}
            />*/}
          </Route>
          <Route path="planting-guide" element={<PlantingGuide />} />
          <Route path="planting-field" element={<PlantingField />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="join-us" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
}
