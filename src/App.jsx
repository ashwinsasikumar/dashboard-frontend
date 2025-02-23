import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Maind from "./pages/Maind";
import Academics from "./pages/Academics";
import Marks from "./pages/Marks";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard-frontend/" element={<Login />} />
        <Route path="/dashboard-frontend/Maind" element={<Maind />} />
        <Route path="/dashboard-frontend/Academics" element={<Academics />} />
        <Route path="/dashboard-frontend/Marks" element={<Marks />} />
      </Routes>
    </div>
  );
}

export default App;
