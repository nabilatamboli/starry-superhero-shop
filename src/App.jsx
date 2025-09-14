import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import CapesCollection from "./pages/Collections/CapesCollection";
import ActionFiguresCollection from "./pages/Collections/ActionFiguresCollection";
import CollectiblesCollection from "./pages/Collections/CollectiblesCollection";
import CollectibleCardsCollection from "./pages/Collections/CollectibleCardsCollection";
import ComicBooksCollection from "./pages/Collections/ComicBooksCollection";
import PosterCollection from "./pages/Collections/PosterCollection";



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
            <Route path="/collections/collectible" element={<CollectiblesCollection />} />
            <Route path="/collections/cards" element={<CollectibleCardsCollection />} />
            <Route path="/collections/comics" element={<ComicBooksCollection />} />
            <Route path="/collections/posters" element={<PosterCollection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
