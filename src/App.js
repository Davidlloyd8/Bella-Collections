import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="checkout/:productID" element={<Checkout />} />
    </Routes>
    </>
  );
}

export default App;
