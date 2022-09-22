import { Routes, Route } from "react-router-dom";

import {
  Buyer,
} from "./pages";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
          <Route path="/buyer" element={<Buyer />} />
      </Routes>
    </div>
  );
}

export default App;
