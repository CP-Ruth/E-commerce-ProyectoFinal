import styles from "./Catalog.module.css";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import OptionCategory from "./OptionCategory/OptionCategory";
import Footer from "../../components/Footer/Footer";
import { RefObject, useEffect, useRef, useState } from "react";
import ProductCatalog from "./ProductCatalog/ProductCatalog";
import Button from "../../components/Button/Button";

const Catalog = () => {
  const { sexo } = useParams();
  const [filter, setFilter] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const handleFilter = (type: string) => {
    setFilter(type);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    setFilter("");
  }, [sexo]);

  return (
    <>
      <Header />
      <main className={styles.containerMain}>
        <h2 className={styles.title}>Encuentra lo que buscas</h2>
        <Button text="Ver todo" onClick={() => handleFilter("")} />
        <div className={styles.containerOptions}>
          {sexo && sexo === "mujer" ? (
            <>
              <OptionCategory
                alt="Opcion de ropa femenina"
                text="ropa"
                sexo="mujer"
                onClick={handleFilter}
              />
              <OptionCategory
                alt="Opcion de calzado femenino"
                text="calzado"
                sexo="mujer"
                onClick={handleFilter}
              />
            </>
          ) : (
            <>
              <OptionCategory
                alt="Opcion de ropa masculina"
                text="ropa"
                sexo="hombre"
                onClick={handleFilter}
              />
              <OptionCategory
                alt="Opcion de calzado masculino"
                text="calzado"
                sexo="hombre"
                onClick={handleFilter}
              />
            </>
          )}
        </div>
        <ProductCatalog
          ref={ref as RefObject<HTMLDivElement>}
          sexo={sexo}
          filter={filter}
        />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
