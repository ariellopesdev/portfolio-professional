import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import SolarSystemBackground from "./components/SolarSystemBackground/SolarSystemBackground";

// Pages
import Home from "./pages/Home/Home";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";

function App() {
  return (
    <div className="App">
      <SolarSystemBackground />

      <BrowserRouter basename="/portfolio-professional">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <ScrollTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
