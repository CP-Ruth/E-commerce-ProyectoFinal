import { FaPlus } from "react-icons/fa"
import { useAccordionStore } from "../../../store/useAccordionStore";

export const Description = () => {
    const {isOpen, toggle}=useAccordionStore();
    return (
        <div className="principalContainer">
            <button className="buttonAccordion" onClick={toggle}>
                <strong>Descripción</strong>
                <FaPlus />
            </button>
            <hr />
            {isOpen && (

            <div className="accordionContent">
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
