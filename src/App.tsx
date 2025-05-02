import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import { ProductCatalog } from "./pages/ProductCatalog";
import { ShoppingCart } from "./pages/ShoppingCart";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<ProductCatalog />} />
      <Route path="/producto/:idProduct" element={<ProductDetail />} />
      <Route path="/carrito" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
