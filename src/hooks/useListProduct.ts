import { useShallow } from "zustand/shallow";
import { useStoreProducts } from "../store/useStoreProducts";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/productService";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { useStoreUserActive } from "../store/useStoreUserActive";

export const useListProduct = () => {
  const {
    products,
    setAllProducts,
    addProductList,
    updateProductList,
    deleteProductList,
  } = useStoreProducts(useShallow((state) => ({ ...state })));

  const token = useStoreUserActive((state) => state.token);

  const getAllProducts = async () => {
    const productos = await getProducts();

    if (productos) {
      setAllProducts(productos);
    }
  };

  const createOneProduct = async (producto: IDetailsProduct) => {
    const nuevoProducto = await createProduct(producto);

    if (nuevoProducto) {
      addProductList(nuevoProducto);
    }
  };

  const updateOneProduct = async (producto: IDetailsProduct) => {
    const productoActualizado = await updateProduct(producto);

    if (productoActualizado) {
      updateProductList(productoActualizado);
    }
  };

  const deleteOneProduct = async (id: number) => {
    const productoEliminado = await deleteProduct(id, token);

    if (productoEliminado) {
      deleteProductList(id);
    }
  };

  return {
    products,
    getAllProducts,
    createOneProduct,
    updateOneProduct,
    deleteOneProduct,
  };
};
