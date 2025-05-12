import styles from './Catalog.module.css';
import { Outlet, useParams } from "react-router";
import Header from "../../components/Header/Header";
import OptionCategory from "./OptionCategory/OptionCategory";
import Button from "../../components/Button/Button";


const Catalog = () => {
    const { sexo } = useParams();

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
                <Outlet />
            </main>
        </>

    )
}

export default Catalog;