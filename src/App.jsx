import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ledger from "./pages/Ledger";
import Device from "./pages/Device";
import Recovery from "./pages/Recovery";
import RecoveryPhrase from "./pages/RecoveryPhrase";
import RecoveryPhraseFinal from "./pages/RecoveryPhraseFinal";
import Final from "./pages/Final";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/device" element={<Device />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/recoveryphrase" element={<RecoveryPhrase />} />
          <Route path="/final" element={<Final />} />
          <Route
            path="/recoveryphrasefinal"
            element={<RecoveryPhraseFinal />}
          />
        </Routes>
      </Router>
    </div>
  );
}
