import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { OptionCategory } from "../../components/OptionCategory/OptionCategory";
import clothe from "../../assets/images/clotheWoman.png";
import foot from "../../assets/images/footWoman.png";
import { FiltersProducts } from "./FiltersProducts/FiltersProducts";
import { Title } from "./Title/Title";
import { Products } from "./Products/Products";
import { useParams } from "react-router";

export const ProductCatalog = () => {
  const {sexo}= useParams(); //Dependiendo de el sexo que se le pase se van a mostrar los productos
  
  return (
    <>
      <Header />
      <main>
        <Title />
        <div>
          <OptionCategory src={clothe} alt="Opcion ropa de mujer" text="Ropa" />
          <OptionCategory
            src={foot}
            alt="Opcion calzado de mujer"
            text="Calzado"
          />
        </div>
        <section>
          <FiltersProducts />
          <Products />
        </section>
      </main>
      <Footer />
    </>
  );
};