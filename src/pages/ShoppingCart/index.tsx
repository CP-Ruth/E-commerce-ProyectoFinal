import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductsToBuy } from "./ProductsToBuy/ProductsToBuy";

export const ShoppingCart = () => {
  return (
    <>
      <Header />
      <main>
        {/** Acá va el titulo y la cantidad de productos a comprar */}
        <h2>Carrito</h2>
        <section>
          <ProductsToBuy />
          {/**Detalle de la compra */}
          {/** */}
        </section>
      </main>
      <Footer />
    </>
  );
};
