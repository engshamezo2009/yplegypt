import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Wraper from "./wraper";
import HomePage from "./pages/homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wraper />}>
          <Route index element={<Navigate to="/homepage" />} />
          <Route path="homepage" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
