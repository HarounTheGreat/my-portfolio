import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

function App() {
  return <Home />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
