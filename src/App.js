import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="SignIn" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
