import Portfolio from "./components/Portfolio";
import JobRecommendation from "./components/Projects/JobRecommendation";
import Pathfinder from "./components/Projects/Pathfinder";
import Drawscillate from "./components/Projects/Drawscillate";
import DistributedSystems from "./components/Projects/DistributedSystems";
import TextClassification from "./components/Projects/TextClassification";
import StockRecommender from "./components/Projects/StockRecommender";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./assets/css/custom.css";
import "./assets/css/aos.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <HashRouter>
      <Routes className="App">
        <Route path="/" element={<Portfolio />} />
        <Route path="/jobrecommendation" element={<JobRecommendation />} />
        <Route path="/pathfinder" element={<Pathfinder />} />
        <Route path="/stockrecommender" element={<StockRecommender />} />
        <Route path="/drawscillate" element={<Drawscillate />} />
        <Route path="/distributedsystems" element={<DistributedSystems />} />
        <Route path="/textclassification" element={<TextClassification />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
