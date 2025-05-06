import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import ProductCatalog from "./pages/ProductCatalog/ProductCatalog";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/productos/:sexo/:type" element={<ProductCatalog />} />
      <Route path="/carrito" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
