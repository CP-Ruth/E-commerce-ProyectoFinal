import styles from "./ShoppingCart.module.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.title}>
          Carrito <span>(2)</span>
        </h2>
        <section className={styles.flexSection}>
          <section className={styles.sectionProducts}>
            <ProductsToBuy />
            <ProductsToBuy />
            <ProductsToBuy />
            <ProductsToBuy />
          </section>
          <section className={styles.sectionDetails}>
            <div className={styles.details}>
              <span>Subtotal:</span>
              <span>$30.000</span>
            </div>
            <div className={styles.details}>
              <span>Envio:</span>
              <span>Gratis</span>
            </div>
            <div className={styles.details}>
              <span>Total Estimado:</span>
              <span>$30.000</span>
            </div>
            <Button text="Proceder al pago" />
          </section>
        </section>
      </main>
    </>
  );
};

export default ShoppingCart;
