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
    <BrowserRouter>
      <Routes className="App">
        <Route path="/myportfolio" element={<Portfolio />} />
        <Route
          path="/myportfolio/jobrecommendation"
          element={<JobRecommendation />}
        />
        <Route path="/myportfolio/pathfinder" element={<Pathfinder />} />
        <Route
          path="/myportfolio/stockrecommender"
          element={<StockRecommender />}
        />
        <Route path="/myportfolio/drawscillate" element={<Drawscillate />} />
        <Route
          path="/myportfolio/distributedsystems"
          element={<DistributedSystems />}
        />
        <Route
          path="/myportfolio/textclassification"
          element={<TextClassification />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
