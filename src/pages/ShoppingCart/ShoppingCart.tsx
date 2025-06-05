import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IItem } from "../../types/IOrder";
import BuyDetails from "./BuyDetails/BuyDetails";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import styles from "./ShoppingCart.module.css";
import Swal from "sweetalert2";

const ShoppingCart = () => {
  const [cart, setCart] = useState<IItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleRemoveItem = (item: IItem) => {
    const updatedCart = cart.filter(
      (p: IItem) =>
        !(
          p.idDetalleProducto === item.idDetalleProducto &&
          p.talleId === item.talleId
        )
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);

    Swal.fire({
      icon: "info",
      title: "Producto eliminado",
      text: `${item.nombre} - Talle ${item.talle} fue eliminado del carrito.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const cantProd = cart.length;

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {/** Acá va el titulo y la cantidad de productos a comprar */}
        <h2>Carrito ({cantProd})</h2>
        <section className={styles.containerSection}>
          <div className={styles.scrollBox}>
            {cart.map((item) => (
              <ProductsToBuy
                key={`${item.idDetalleProducto}-${item.talleId}`}
                itemProducto={item}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
          <BuyDetails />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCart;
