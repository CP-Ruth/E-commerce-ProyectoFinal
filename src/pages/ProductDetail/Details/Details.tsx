import styles from "./Details.module.css";
import {
  IDetailsProduct,
  IRequestColors,
  ITalle,
} from "../../../types/IDetailsProduct";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getDetailsByProduct } from "../../../services/detailsService";
import Swal from "sweetalert2";

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
      name: product.stocks[0].talle.name,
    },
  });
  const [stockDisponible, setStockDisponible] = useState<number>(0);

  //corroboramos el desceunto
  const descuento = product.descuento ? product.descuento.porcentaje : 0;
  const precioProductoConDescuento = product.precioVenta - (product.precioVenta * descuento);

  const [stockDisponible, setStockDisponible] = useState<number>(0);

  //corroboramos el desceunto
  const descuento = product.descuento ? product.descuento.porcentaje : 0;
  const precioProductoConDescuento =
    product.precioVenta - product.precioVenta * descuento;

  const handlerCount = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailSelected({
      ...detailSelected,
      cantidad: Number(e.target.value),
    });
  };

  const handlerTalle = (e: ChangeEvent<HTMLSelectElement>) => {
    const talleSeleccionado = product.stocks.find(
      (stock) => stock.talle.name === e.target.value
    )!;

    setDetailSelected({
      ...detailSelected,
      talle: talleSeleccionado.talle,
    });

    setStockDisponible(talleSeleccionado.stock);
  };
  useEffect(() => {
    setStockDisponible(product.stocks[0].stock); // stock del talle por defecto
  }, [product]);

  console.log("stock Disponible: ", stockDisponible);

  useEffect(() => {
    setStockDisponible(product.stocks[0].stock); // stock del talle por defecto
  }, [product]);

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const item = {
      idDetalleProducto: product.id,
      nombre: product.producto.nombre,
      precioV: product.precioVenta,
      precioDesc: precioProductoConDescuento,
      color: product.color,
      talleId: detailSelected.talle.id,
      talle: detailSelected.talle.name,
      cantidad: detailSelected.cantidad,
      imagen: product.imagenes[0]?.url || "",
    };

    //Buscamos duplicados antes de agregar al carritoAdd commentMore actions
    const existeDuplicado = currentCart.findIndex(
      (p: any) =>
        p.idDetalleProducto === item.idDetalleProducto &&
        p.talleId === item.talleId
    );

    if (existeDuplicado !== -1) {
      currentCart[existeDuplicado].cantidad += item.cantidad;
    } else {
      currentCart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart)); // Guardar el nuevo carrito en el localStorage

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
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
      {descuento ? (
        <>
          <p>Este producto tiene {product.descuento?.nombre} de descuento</p>
          <h4>
            <s>${product.precioVenta}</s>
          </h4>
          <h3>${precioProductoConDescuento}</h3>
        </>
      ) : (
        <h3>${product.precioVenta}</h3>
      )}
      
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
            required
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
          {/* <select
            defaultValue={detailSelected.cantidad}
            onChange={handlerCount}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </select> */}
          {stockDisponible > 0 ? (
            <select value={detailSelected.cantidad} onChange={handlerCount}>
              {Array.from({ length: Math.min(stockDisponible, 4) }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          ) : (
            <p style={{ color: "red" }}>Sin stock disponible por el momento</p>
          )}
        </div>
      </div>
      <div className={styles.carritoButton}>
        <button
          onClick={handleAddToCart}
          disabled={stockDisponible === 0}
          className={stockDisponible === 0 ? styles.botonDeshabilitado : ""}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default Details;
