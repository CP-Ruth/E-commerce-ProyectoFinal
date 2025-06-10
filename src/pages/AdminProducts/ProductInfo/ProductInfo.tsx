import { FC, useEffect, useState } from "react";
import { IDetailsProduct, IProduct } from "../../../types/IDetailsProduct";
import { getDetailsByProduct } from "../../../services/detailsService";
import styles from "./ProductInfo.module.css";
import { IoMdClose } from "react-icons/io";

interface PropsProductInfo {
  product: IProduct;
  onClose: () => void;
}

const ProductInfo: FC<PropsProductInfo> = ({ product, onClose }) => {
  const [detalles, setDetalles] = useState<IDetailsProduct[]>([]);

  useEffect(() => {
    const fetchDetalles = async () => {
      const detalles = await getDetailsByProduct(product.id!);
      setDetalles(detalles);
    };
    fetchDetalles();
  }, [product]);

  return (
    <div className={styles.modal}>
      <article className={styles.modalInfo}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2>{product.nombre}</h2>
        <div className={styles.details}>
          <p>
            <span>Tipo Producto:</span> {product.tipoProducto}
          </p>
          <div style={{ paddingTop: "10px" }}>
            <span>Variantes: </span>
            {detalles.length > 0 ? detalles.map((detalle) => (
              <div className={styles.detailContainer} key={detalle.id}>
                <div className={styles.detail}>
                  <img
                    src={detalle.imagenes[0].url as string}
                    alt="Imagen del producto"
                  />
                  <p style={{ fontWeight: "lighter" }}>{detalle.color} </p>
                </div>
              </div>
            )) : "No hay variantes"}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductInfo;
