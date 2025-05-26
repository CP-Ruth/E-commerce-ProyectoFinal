import { useListProduct } from "../../hooks/useListProduct";
import { useEffect } from "react";
import styles from "./AdminProduct.module.css";
import { TableHeadProduct } from "../../components/Table/TableRowHead";
import { TableRowProduct } from "../../components/Table/TableRow";
import ProductInfo from "./ProductInfo/ProductInfo";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import ProductForm from "./ProductForm/ProductForm";
import Swal from "sweetalert2";

const AdminProducts = () => {
  const { products, getAllProducts } = useListProduct();
  const { openModal, productActive, handlerOpenModal } = useModal();

  const deleteProduct = () => {
    Swal.fire({
      title: "¿Estas seguro de desactivar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b2bec3",
      confirmButtonText: "Desactivar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Desactivado!",
          "El producto ha sido desactivado.",
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
        <table className={styles.tableUser}>
          <thead>
            <TableHeadProduct />
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((producto) => (
                <TableRowProduct key={producto.id} detalle={producto}>
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
                  <MdDeleteOutline
                    className={styles.icon}
                    size={30}
                    onClick={deleteProduct}
                  />
                </TableRowProduct>
              ))}
          </tbody>
        </table>
      </section>
      {openModal.info && (
        <ProductInfo
          detalle={productActive!}
          onClose={() => handlerOpenModal(productActive!, "info")}
        />
      )}
      {openModal.edit && (
        <ProductForm
          detalle={productActive!}
          onClose={() => handlerOpenModal(productActive!, "edit")}
        />
      )}
    </>
  );
};

export default AdminProducts;
