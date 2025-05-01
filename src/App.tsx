import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/productos" element={<ProductCatalog />} />
    </Routes>
  );
}

export default App;
