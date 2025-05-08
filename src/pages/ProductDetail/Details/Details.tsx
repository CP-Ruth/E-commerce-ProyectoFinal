import { FaCircle } from "react-icons/fa"

export const Details = () => {
  return (
    <div>
      <h2>NombreZapatilla</h2>
      <h3>$$$</h3>
      <div>
        <p>Articulo:</p>
        <p>Color: <FaCircle /></p>//cambio de color segun el color de la zapatilla?
        <p>Talle:</p>
        <p>Cantidad:</p>
        <select >
          <option value="">1</option>
        </select>
      </div>
      <button>AGREGAR AL CARRITO</button>
    </div>
  )
}
