import "./App.css";

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio-professional">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
