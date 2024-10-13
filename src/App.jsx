import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ledger from "./pages/Ledger";
import Device from "./pages/Device";
import Recovery from "./pages/Recovery";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/device" element={<Device />} />
          <Route path="/recovery" element={<Recovery />} />
        </Routes>
      </Router>
    </div>
  );
}
