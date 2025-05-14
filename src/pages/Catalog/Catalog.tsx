import styles from './Catalog.module.css';
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import OptionCategory from "./OptionCategory/OptionCategory";
import Button from "../../components/Button/Button";
import ProductCatalog from '../ProductCatalog/ProductCatalog';
import Footer from '../../components/Footer/Footer';
import { useRef, useState } from 'react';


const Catalog = () => {
    const { sexo } = useParams();
    const catalogRef = useRef<HTMLDivElement>(null);

    const [filtro, setFiltro] = useState<{
        categoria: string | null;
        sexo: string | undefined;
    }>();

    // Hacer una función para hacer scroll para el boton VER TODO
    return (
        <>
            <Header />
            <main className={styles.containerMain}>
                <h2 className={styles.title}>Encuentra lo que buscas</h2>
                <Button text="Ver todo" />
                <div className={styles.containerOptions}>
                    {sexo && sexo === "mujer" ? (
                        <>
                            <OptionCategory
                                alt="Opcion de ropa femenina"
                                text="ropa"
                                sexo="mujer"
                            />
                            <OptionCategory

                                alt="Opcion de calzado femenino"
                                text="calzado"
                                sexo="mujer"
                            />
                        </>
                    ) : (
                        <>
                            <OptionCategory
                                alt="Opcion de ropa masculina"
                                text="ropa"
                                sexo="hombre"
                            />
                            <OptionCategory
                                alt="Opcion de calzado masculino"
                                text="calzado"
                                sexo="hombre"
                            />
                        </>
                    )}
                </div>
                <ProductCatalog />
            </main>
            <Footer />
        </>

    )
}

export default Catalog;