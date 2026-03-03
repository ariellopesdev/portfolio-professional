// CSS
import "./App.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import SolarSystemBackground from "./components/SolarSystemBackground/SolarSystemBackground";
import Preloader from "./components/PreLoader/PreLoader";

// Pages
import Home from "./pages/Home/Home";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import { useState } from "react";

function App() {
  const [isSolarReady, setIsSolarReady] = useState(false);
  return (
    <div className="App">
      <Preloader ready={isSolarReady} />
      <SolarSystemBackground onReady={() => setIsSolarReady(true)} />
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
