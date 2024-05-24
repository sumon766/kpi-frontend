import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Leaderboard from "./components/Leaderboard";
import Sectors from "./components/sectors/Sectors";
import CreateSector from "./components/sectors/CreateSectors";
import Employees from "./components/employees/Employees";
import CreateEmployee from "./components/employees/CreateEmployee";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Leaderboard />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/create" element={<CreateSector />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/create" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
