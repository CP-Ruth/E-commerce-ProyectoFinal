
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Description.module.css"
import { create } from "zustand";


const Description = () => {

    type AccordionState = {
        isOpen: boolean;
        toggle: () => void;
    };

    const useAccordionStore = create<AccordionState>((set) => ({
        isOpen: false,
        toggle: () => set((state) => ({ isOpen: !state.isOpen }))
    }));

    const { isOpen, toggle } = useAccordionStore();
    return (
        <div className={styles.principalContainer}>
            <button className={styles.buttonAccordion} onClick={toggle}>
                <strong>Descripción</strong>
                {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
            <hr />
            {isOpen && (

                <div className={styles.accordionContent} >
                    <div>
                        <strong>DETALLES</strong>
                        <ul>
                            <li>Horma estándar</li>
                            <li>Exterior de malla técnica</li>
                            <li>Altura de la suela: 39 mm / 29 mm</li>
                            <li>Peso: 250 g (talla 8 del Reino Unido)</li>
                            <li>Drop del talón a los dedos: 10 mm</li>
                            <li>Recomendado para: pronadores neutros</li>
                        </ul>
                    </div>

                    <div>
                        <strong>COMPOSICIÓN Y MATERIALES</strong>
                        <ul>
                            <li>Exterior: 27% Sintético, 73% Textil</li>
                            <li>Entresuela: 100% Sintético</li>
                            <li>Suela: 100% Goma</li>
                            <li>Plantilla: 100% Textil</li>
                            <li>Forro: 100% Textil</li>
                        </ul>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Description