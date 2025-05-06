import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import ProductCatalog from "./pages/ProductCatalog";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/productos" element={<ProductCatalog />} />
      <Route path="/carrito" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
