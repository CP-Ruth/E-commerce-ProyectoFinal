import { Route, Routes } from "react-router";
import "./App.css";
import ShoppingCart from "./pages/ShoppingCart/Shopping";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminOrders from "./pages/AdminOrders/AdminOrders";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/carrito" element={<ShoppingCart />} />
      {/**Quitar despues */}
      <Route path="/administrador" element={<AdminHome />}>
        <Route index path="usuarios" element={<AdminUsers />} />
        <Route path="productos" element={<AdminProducts />} />
        <Route path="pedidos" element={<AdminOrders />} />
      </Route>
    </Routes>
  );
}

export default App;
