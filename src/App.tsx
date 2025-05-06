import { Route, Routes } from "react-router";
import "./App.css";
import { ShoppingCart } from "./pages/ShoppingCart/Shopping";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Catalog } from "./pages/Catalog/Catalog";
import { ProductCatalog } from "./pages/ProductCatalog/ProductCatalog";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/catalogo/:sexo/:type" element={<ProductCatalog />} />
      <Route path="/producto/:idProduct" element={<ProductDetail />} />
      <Route path="/carrito" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
