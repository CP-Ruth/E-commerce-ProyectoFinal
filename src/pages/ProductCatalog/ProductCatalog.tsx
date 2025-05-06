import { useParams } from "react-router";
import styles from "./ProductCatalog.module.css";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { FiltersProducts } from "./FiltersProducts/FiltersProducts";
import { Product } from "../../components/Product/Product";

export const ProductCatalog = () => {
  const { type, sexo } = useParams();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>
          {type} de {sexo}
        </h2>
        <section className={styles.flex}>
          <FiltersProducts />
          <section className={styles.gridContainer}>
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
            <Product product={{ nombre: "Producto 1", precio: 345 }} />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};