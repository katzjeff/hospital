import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="SignIn" element={<SignIn />}></Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;
