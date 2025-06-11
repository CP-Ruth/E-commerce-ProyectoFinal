import { useEffect } from "react";
import { TableHeadProduct } from "../../components/Table/TableRowHead";
import { useListProducts } from "../../hooks/useListProducts";
import styles from "./AdminProducts.module.css";
import { TableRowProduct } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import useModal from "../../hooks/useModal";
import ProductForm from "./ProductForm/ProductForm";
import { IProduct } from "../../types/IDetailsProduct";
import ProductInfo from "./ProductInfo/ProductInfo";
import { FaPowerOff, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";

const AdminProducts = () => {
  const { products, getAllProducts, changeActiveProduct } = useListProducts();
  const { openModal, handlerOpenModal, active } = useModal();

  const deleteProduct = (id: number, activo: boolean) => {
    const title = activo ? "desactivar" : "activar";
    Swal.fire({
      title: `¿Estas seguro de ${title} este producto?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b2bec3",
      confirmButtonText: title.charAt(0).toUpperCase() + title.slice(1),
    }).then((result) => {
      if (result.isConfirmed) {
        const message = activo ? "Desactivado" : "Activado";
        changeActiveProduct(id);
        Swal.fire(
          message,
          `El producto ha sido ${message.toLowerCase()}.`,
          "success"
        );
      }
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <section>
        <button
          className={styles.button}
          onClick={() => handlerOpenModal(null, "edit")}
        >
          Añadir Producto
        </button>
        <div className={styles.containerTable}>
          <table className={styles.tableUser}>
            <thead>
              <TableHeadProduct />
            </thead>
            <tbody>
              {products &&
                products.length > 0 &&
                products.map((producto) => (
                  <TableRowProduct key={producto.id} producto={producto}>
                    <FaRegEye
                      size={30}
                      className={styles.icon}
                      onClick={() => handlerOpenModal(producto, "info")}
                    />
                    <MdEdit
                      size={30}
                      className={styles.icon}
                      onClick={() => handlerOpenModal(producto, "edit")}
                    />
                    <FaPowerOff
                      size={30}
                      className={`${styles.icon} ${
                        producto.activo ? styles.active : styles.deactive
                      }`}
                      onClick={() =>
                        deleteProduct(producto.id!, producto.activo!)
                      }
                    />
                  </TableRowProduct>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      {openModal.edit && (
        <ProductForm
          producto={active! as IProduct}
          onClose={() => handlerOpenModal(active! as IProduct, "edit")}
        />
      )}
      {openModal.info && (
        <ProductInfo
          product={active! as IProduct}
          onClose={() => handlerOpenModal(active! as IProduct, "info")}
        />
      )}
    </>
  );
};

export default AdminProducts;
