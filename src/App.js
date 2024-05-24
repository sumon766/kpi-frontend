import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Leaderboard from "./components/Leaderboard";
import Sectors from "./components/sectors/Sectors";
import CreateSector from "./components/sectors/CreateSectors";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Leaderboard />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/create" element={<CreateSector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
