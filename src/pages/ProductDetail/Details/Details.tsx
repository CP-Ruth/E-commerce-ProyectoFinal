import styles from "./Details.module.css";
import {
  IDetailsProduct,
  IRequestColors,
  ITalle,
} from "../../../types/IDetailsProduct";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getDetailsByProduct } from "../../../services/detailsService";

interface PropsDetails {
  product: IDetailsProduct;
}

interface PropsDetailSelected {
  cantidad: number;
  talle: ITalle;
}

export const Details: FC<PropsDetails> = ({ product }) => {
  const [variantes, setVariantes] = useState<IRequestColors[]>();
  const [detailSelected, setDetailSelected] = useState<PropsDetailSelected>({
    cantidad: 1,
    talle: {
      name: "",
    },
  });

  const handlerCount = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailSelected({
      ...detailSelected,
      cantidad: Number(e.target.value),
    });
  };

  const handlerTalle = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailSelected({
      ...detailSelected,
      talle: product.stocks.find(
        (stock) => stock.talle.name === e.target.value
      )!.talle,
    });
  };

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const item = {
      idDetalleProducto: product.id,
      nombre: product.producto.nombre,
      precio: product.precioVenta,
      color: product.color,
      talleId: detailSelected.talle.id,
      talle: detailSelected.talle.name,
      cantidad: detailSelected.cantidad,
      imagen: product.imagenes[0]?.url || "",
    };

    currentCart.push(item); // Agregar el nuevo item
    localStorage.setItem("cart", JSON.stringify(currentCart)); // Guardar el nuevo carrito en el localStorage
  };

  useEffect(() => {
    const getAllVariants = async () => {
      const variantes = await getDetailsByProduct(product.id!);
      setVariantes(variantes);
    };
    getAllVariants();
  }, []);

  return (
    <div className={styles.containerPrincipal}>
      <h2>{product.producto.nombre}</h2>
      <h3>${product.precioVenta}</h3>
      <div className={styles.containerData}>
        <div>
          <p>Color:</p>
          {variantes &&
            variantes?.map((variante, i) => (
              <span key={i}>{variante.color}</span>
            ))}
        </div>
        <div className={styles.talleContainer}>
          <p>Talle:</p>
          <select
            name="talle"
            defaultValue={detailSelected.talle.name}
            onChange={handlerTalle}
          >
            {product.stocks.map((stock) => (
              <option key={stock.talle.name} value={stock.talle.name}>
                {stock.talle.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Cantidad:</p>
          <select
            defaultValue={detailSelected.cantidad}
            onChange={handlerCount}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className={styles.carritoButton}>
        <button onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default Details;
