import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyDetails from "./BuyDetails/BuyDetails";
import styles from './ShoppingCart.module.css'
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import { IItem } from "../../types/IOrder";

const ShoppingCart: FC = () => {
  const orderItems: IItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const cantProd = orderItems.length;
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {/** Acá va el titulo y la cantidad de productos a comprar */}
        <h2>Carrito ({cantProd})</h2>
        <section className={styles.containerSection}>
          <div className={styles.scrollBox}>
            {orderItems.map((item) => (
              <ProductsToBuy key={item.idDetalleProducto} itemProducto={item} />
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