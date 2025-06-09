import { Route, Routes } from "react-router";
import "./App.css";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminOrders from "./pages/AdminOrders/AdminOrders";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AdminDetails from "./pages/AdminDetails/AdminDetails";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import AdminCategory from "./pages/AdminCategory/AdminCategory";
import AdminDiscount from "./pages/AdminDiscount/AdminDiscount";
import { initMercadoPago } from "@mercadopago/sdk-react";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure/PaymentFailure";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

function App() {
  const {getUserByTokenUser} = useAuth()
  const public_key = import.meta.env.VITE_PUBLIC_KEY;
  initMercadoPago(public_key);

  useEffect(() => {
    getUserByTokenUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo/:sexo" element={<Catalog />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/carrito" element={<ShoppingCart />} />
      {/**Quitar despues */}
      <Route path="/administrador" element={<AdminHome />}>
        <Route index path="usuarios" element={<AdminUsers />} />
        <Route path="detalles" element={<AdminDetails />} />
        <Route path="productos" element={<AdminProducts />} />
        <Route path="pedidos" element={<AdminOrders />} />
        <Route path="categorias" element={<AdminCategory />} />
        <Route path="descuentos" element={<AdminDiscount />} />
      </Route>
      <Route path="pagoExitoso" element={<PaymentSuccess />} />
      <Route path="pagoFracaso" element={<PaymentFailure />} />
    </Routes>
  );
}

export default App;
