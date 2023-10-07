import "./App.css";
import HomePage from "./Routes/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      TypeScript + React
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
