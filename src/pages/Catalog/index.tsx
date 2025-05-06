import styles from "./Catalog.module.css";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import OptionCategory from "./OptionCategory/OptionCategory";
import Button from "../../components/Button/Button";
// ------------------ Imagenes ------------------- //
import clotheWoman from "../../assets/images/clotheWoman.png";
import clotheMan from "../../assets/images/clotheMan.png";
import footWoman from "../../assets/images/footWoman.png";
import footMan from "../../assets/images/footMan.png";

export const Catalog = () => {
  const { sexo } = useParams();

  return (
    <>
      <Header />
      <main>
        <h2 className={styles.title}>Encuentra lo que buscas</h2>
        <Button text="Ver todo" />
        <div className={styles.container}>
          {sexo && sexo === "mujer" ? (
            <>
              <OptionCategory
                src={clotheWoman}
                alt="Opcion de ropa femenina"
                text="Ropa"
              />
              <OptionCategory
                src={footWoman}
                alt="Opcion de calzado femenino"
                text="Calzado"
              />
            </>
          ) : (
            <>
              <OptionCategory
                src={clotheMan}
                alt="Opcion de ropa masculina"
                text="Ropa"
              />
              <OptionCategory
                src={footMan}
                alt="Opcion de calzado masculino"
                text="Calzado"
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};
