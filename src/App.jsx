import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryDetail />} />
        <Route path="/category/:slug/:sectionSlug" element={<CategoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
