import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ledger from "./pages/Ledger";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ledger" element={<Ledger />} />
        </Routes>
      </Router>
    </div>
  );
}
