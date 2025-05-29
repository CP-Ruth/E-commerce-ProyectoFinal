import { useEffect } from "react";
import { TableHeadProduct } from "../../components/Table/TableRowHead";
import { useListProducts } from "../../hooks/useListProducts";
import styles from "./AdminProducts.module.css";
import { TableRowProduct } from "../../components/Table/TableRow";
import { MdEdit } from "react-icons/md";
import useModal from "../../hooks/useModal";
import ProductForm from "./ProductForm/ProductForm";
import { IProduct } from "../../types/IDetailsProduct";

const AdminProducts = () => {
  const { products, getAllProducts } = useListProducts();
  const { openModal, handlerOpenModal, productActive } = useModal();

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
        <table className={styles.tableUser}>
          <thead>
            <TableHeadProduct />
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((producto) => (
                <TableRowProduct key={producto.id} producto={producto}>
                  <MdEdit
                    size={30}
                    className={styles.icon}
                    onClick={() => handlerOpenModal(producto, "edit")}
                  />
                </TableRowProduct>
              ))}
          </tbody>
        </table>
      </section>
      {openModal.edit && (
        <ProductForm
          producto={productActive! as IProduct}
          onClose={() => handlerOpenModal(productActive! as IProduct, "edit")}
        />
      )}
    </>
  );
};

export default AdminProducts;
