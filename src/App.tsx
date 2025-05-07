import { Route, Routes } from "react-router";
import "./App.css";
import ShoppingCart from "./pages/ShoppingCart/Shopping";
import Catalog from "./pages/Catalog/Catalog";
import ProductCatalog from "./pages/ProductCatalog/ProductCatalog";
import Home from "./pages/Home/Home";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminOrders from "./pages/AdminOrders/AdminOrders";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import AdminUsers from "./pages/AdminUsers/AdminUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/catalogo/:sexo/:type" element={<ProductCatalog />} />
      <Route path="/carrito" element={<ShoppingCart />} />

      {/**Quitar despues */}
      <Route path="/administrador" element={<AdminHome />}>
        <Route path="usuarios" element={<AdminUsers />} />
        <Route path="producto/:tipo" element={<AdminProducts />} />
        <Route path="pedidos" element={<AdminOrders />} />
      </Route>

    </Routes>
  );
}

export default App;
