import AOS from "aos";
import Portfolio from "./components/Portfolio";
import JobRecommendation from "./components/Projects/JobRecommendation";
import Pathfinder from "./components/Projects/Pathfinder";
import Drawscillate from "./components/Projects/Drawscillate";
import DistributedSystems from "./components/Projects/DistributedSystems";
import TextClassification from "./components/Projects/TextClassification";
import StockRecommender from "./components/Projects/StockRecommender";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/css/custom.css";
import "./assets/css/aos.css";

AOS.init();

function App() {
  return (
    <BrowserRouter basename="/myportfolio">
      <Routes className="App">
        <Route path="/" element={<Portfolio />} />
        <Route path="/jobrecommendation" element={<JobRecommendation />} />
        <Route path="/pathfinder" element={<Pathfinder />} />
        <Route path="/stockrecommender" element={<StockRecommender />} />
        <Route path="/drawscillate" element={<Drawscillate />} />
        <Route path="/distributedsystems" element={<DistributedSystems />} />
        <Route path="/textclassification" element={<TextClassification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
