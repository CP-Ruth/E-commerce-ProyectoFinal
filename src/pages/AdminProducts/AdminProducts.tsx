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

const AdminProducts = () => {
  const { products, getAllProducts } = useListProduct();
  const { openModal, productActive, handlerOpenModal } = useModal();

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
                  <MdDeleteOutline size={30} />
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
