import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyDetails from "./BuyDetails/BuyDetails";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import styles from './Shopping.module.css'

const ShoppingCart = () => {
  return (

      <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        {/** Acá va el titulo y la cantidad de productos a comprar */}
        <h2>Carrito ()</h2>
        <section className={styles.containerSection}>
          <div className={styles.scrollBox}>
            {/* eliminar los productstobuy de mas */}
          <ProductsToBuy/>
          <ProductsToBuy/>
          <ProductsToBuy/>
          <ProductsToBuy/>
          </div>
          <BuyDetails />
        </section>
      </main>
      <Footer />
      </div>
 
  );
};

export default ShoppingCart;