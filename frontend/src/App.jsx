import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}
