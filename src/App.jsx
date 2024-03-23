import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Add from "./components/add/Add";

const App = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </div>
  );
};

export default App;
