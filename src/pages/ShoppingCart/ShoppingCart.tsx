import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyDetails from "./BuyDetails/BuyDetails";
import styles from './ShoppingCart.module.css'
import { IDetailsProduct } from "../../types/IDetailsProduct";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import { useProductStore } from "../../store/useProductStore";

// interface ShoppingCart{
//   productos : IDetailsProduct[]
// }

const ShoppingCart = () => {
  
  //recibir los productos en el componente

  return (

      <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        {/** Acá va el titulo y la cantidad de productos a comprar */}
        <h2>Carrito ()</h2>
        <section className={styles.containerSection}>
          <div className={styles.scrollBox}>
            {/* eliminar los productstobuy de mas */}
          {/*productos.map((product)=> ( <p>a</p>
            //producto que recibe, producto que mapea
            //<ProductsToBuy product={product}/>
          ))*/}


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