import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import CapesCollection from "./pages/Collections/CapesCollection";
import ActionFiguresCollection from "./pages/Collections/ActionFiguresCollection";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/collections/capes" element={<CapesCollection />} />
            <Route path="/collections/figures" element={<ActionFiguresCollection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
