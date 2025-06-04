import styles from "./Details.module.css";
import { IDetailsProduct, ITalle } from "../../../types/IDetailsProduct";
import { FC, useState } from "react";

interface PropsDetails {
  product: IDetailsProduct;
}

export const Details: FC<PropsDetails> = ({ product }) => {
  //console.log(product);
  const [selectedTalleId, setSelectedTalleId] = useState<ITalle>();
  const [cantidad, setCantidad] = useState<number>(1);


  const handleAddToCart = () => {
    if (!selectedTalleId) {
      alert("Selecciona un talle");
      return;
    }

    //Item es el objeto que le vamos a pasar al carrito
    const item = {
      idDetalleProducto: product.id,
      nombre: product.producto.nombre,
      precio: product.precioVenta,
      color: product.color,
      talleId: selectedTalleId.id,
      talle: selectedTalleId.name,
      cantidad: cantidad,
      imagen: product.imagenes[0]?.url || "",
    };

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    currentCart.push(item); // Agregar el nuevo item

    localStorage.setItem("cart", JSON.stringify(currentCart)); // Guardar el nuevo carrito en el localStorage
  };

  return (
    <div className={styles.containerPrincipal}>
      <h2>{product.producto.nombre}</h2>
      <h3>${product.precioVenta}</h3>

      <p>Color: <b>{product.color}</b></p>

      <p>Talle:</p>
      <div className={styles.talleContainer}>
        {product.stocks.map((stock) => (
          <button
            key={stock.id}
            className={selectedTalleId === stock.talle.id ? styles.selected : ""}
            onClick={() => setSelectedTalleId(stock.talle)}
          >
            {stock.talle.name}
          </button>
        ))}
      </div>

      <p>Cantidad:</p>
      <select className={styles.cantidadContainer} value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))}>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>


      <button onClick={handleAddToCart} className={styles.carritoButton}>AGREGAR AL CARRITO</button>

    </div>
  );
};

export default Details;
