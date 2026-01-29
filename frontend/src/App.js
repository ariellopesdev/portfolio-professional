import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import StarsBackground from "./components/StarsBackground/StarsBackground";
import SolarSystemBackground from "./components/SolarSystemBackground/SolarSystemBackground";

// Pages
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      {/* Background 3D global */}
      <StarsBackground />
      <SolarSystemBackground />

      <BrowserRouter basename="/portfolio-professional">
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
