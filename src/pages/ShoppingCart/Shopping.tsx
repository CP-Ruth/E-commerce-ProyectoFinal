import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BuyDetails from "./BuyDetails/BuyDetails";
import ProductsToBuy from "./ProductsToBuy/ProductsToBuy";
import styles from './Shopping.module.css'
import { IProduct } from "../../types/IProduct";
import { useStoreCart } from "../../store/useStoreCart";

interface ShoppingCart{
  productos : IProduct[]
}
//traemos la store del carrito
const { cartProducts, deleteProduct } = useStoreCart();

//acá cuando este listo el producto, traerlo de productToBuy  y mapearlo. 

const ShoppingCart: FC<ShoppingCart> = ({productos}) => {
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
          {productos.map((product)=> (
            //producto que recibe, producto que mapea
            // <ProductsToBuy product={product}/>
          ))}


          {/* <ProductsToBuy/>
          <ProductsToBuy/>
          <ProductsToBuy/>
          <ProductsToBuy/> */}
          </div>
          <BuyDetails />
        </section>
      </main>
      <Footer />
      </div>

  );
};

export default ShoppingCart;