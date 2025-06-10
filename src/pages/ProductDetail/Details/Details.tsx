import styles from "./Details.module.css";
import {
  IDetailsProduct,
  IRequestColors,
  ITalle,
} from "../../../types/IDetailsProduct";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getColoresByProduct } from "../../../services/detailsService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

// Props que espera el componente
interface PropsDetails {
  product: IDetailsProduct;
}

// Estado local del talle y cantidad seleccionados
interface PropsDetailSelected {
  cantidad: number;
  talle: ITalle;
}

export const Details: FC<PropsDetails> = ({ product }) => {
  const [variantes, setVariantes] = useState<IRequestColors[]>();
  const [stockDisponible, setStockDisponible] = useState<number>(0);
  // Stock real después de restar lo que ya está en el carrito
  const [stockEfectivo, setStockEfectivo] = useState<number>(0);
  // Estado inicial con el primer talle disponible
  const [detailSelected, setDetailSelected] = useState<PropsDetailSelected>({
    cantidad: 1,
    talle: {
      id: product.stocks[0].talle.id,
      name: product.stocks[0].talle.name,
    },
  });

  const navigate = useNavigate();
  //corroboramos el desceunto
  const descuento = product.descuento?.activo
    ? product.descuento.porcentaje
    : 0;
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

  const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

  const handleAddToCart = () => {
    const item = {
      idDetalleProducto: product.id,
      nombre: product.producto.nombre,
      precioV: product.precioVenta,
      precioDesc: descuento > 0 ? precioProductoConDescuento : 0,
      color: product.color,
      talleId: detailSelected.talle.id,
      talle: detailSelected.talle.name,
      cantidad: detailSelected.cantidad,
      imagen: product.imagenes[0]?.url || "",
    };

    //Buscamos duplicados con el mismo talle antes de agregar al carrito
    const existeDuplicado = currentCart.findIndex(
      (p: any) =>
        p.idDetalleProducto === item.idDetalleProducto &&
        p.talleId === item.talleId
    );

    if (existeDuplicado !== -1) {
      const cantidadActual = currentCart[existeDuplicado].cantidad;
      const nuevaCantidad = cantidadActual + item.cantidad;

      if (nuevaCantidad > stockDisponible) {
        return Swal.fire({
          icon: "error",
          title: "No hay suficiente stock disponible",
          text: `Ya tienes ${cantidadActual} en el carrito y solo hay ${stockDisponible} en stock.`,
        });
      }

      currentCart[existeDuplicado].cantidad = nuevaCantidad;
    } else {
      if (item.cantidad > stockDisponible) {
        return Swal.fire({
          icon: "error",
          title: "No hay suficiente stock disponible",
          text: `Solo hay ${stockDisponible} unidades disponibles.`,
        });
      }
      currentCart.push(item);
    }

    // Guardar el nuevo carrito en el localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));

    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    const getAllVariants = async () => {
      const variantes = await getColoresByProduct(product.id!);
      setVariantes(variantes);
    };
    getAllVariants();
  }, []);

  useEffect(() => {
    setStockDisponible(product.stocks[0].stock); // stock del talle por defecto
  }, [product]);

  useEffect(() => {
    const productoEnCarrito = currentCart.find(
      (p: any) =>
        p.idDetalleProducto === product.id &&
        p.talleId === detailSelected.talle.id
    );

    const cantidadEnCarrito = productoEnCarrito
      ? productoEnCarrito.cantidad
      : 0;

    setStockEfectivo(stockDisponible - cantidadEnCarrito);
  }, [stockDisponible, detailSelected.talle, product.id]);

  return (
    <>
      <button className={styles.comeBack} onClick={() => navigate(-1)}>
        Volver al catalogo
      </button>
      <div className={styles.containerPrincipal}>
        <h2 style={{textAlign: "start"}}>{product.producto.nombre}</h2>
        {descuento > 0 ? (
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
            {stockEfectivo > 0 ? (
              <select value={detailSelected.cantidad} onChange={handlerCount}>
                {Array.from(
                  { length: Math.min(stockDisponible, 4) },
                  (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  )
                )}
              </select>
            ) : (
              <p style={{ color: "red" }}>
                Sin stock disponible por el momento
              </p>
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
    </>
  );
};

export default Details;
