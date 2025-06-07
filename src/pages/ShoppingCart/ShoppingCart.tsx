import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IItem, IOrder } from "../../types/IOrder";
import BuyDetails from "./BuyDetails/BuyDetails";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import styles from "./ShoppingCart.module.css";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const ShoppingCart = () => {
  const [cart, setCart] = useState<IItem[]>([]);
  const {userActive} = useAuth();
  const cantProd = cart.length;

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

  const handlerSubmit = async (totalCost: number) => {
    if (!userActive) {
      Swal.fire("Debe iniciar sesión para realizar la compra", "", "error");
      return;
    }

    const orders: IOrder = {
      idUsuario: userActive?.id!,
      productos: cart.map((item) => ({
        id: item.idDetalleProducto,
        cantidad: item.cantidad,
        idTalle: item.talleId,
      })),
      total: totalCost
    };
    
    try {
      // const response = await createPayment(orders);
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
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
          <BuyDetails products={cart} onSubmit={handlerSubmit} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCart;
