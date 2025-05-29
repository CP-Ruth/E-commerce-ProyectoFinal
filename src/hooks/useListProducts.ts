import { useShallow } from "zustand/shallow";
import { IProduct } from "../types/IDetailsProduct";
import { useStoreUserActive } from "../store/useStoreUserActive";
import { useStoreProduct } from "../store/useStoreProduct";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../services/productService";

export const useListProducts = () => {
  const {
    products,
    addProductsList,
    updateProductsList,
    setAllProducts,
  } = useStoreProduct(useShallow((state) => ({ ...state })));

  const token = useStoreUserActive((state) => state.token);

  const getAllProducts = async () => {
    const products = await getProducts(token);

    if (products) {
      setAllProducts(products);
    }
  };

  const createOneProduct = async (product: IProduct) => {
    const nuevoProducto = await createProduct(product, token);

    if (nuevoProducto) {
      addProductsList(nuevoProducto);
    }
  };

  const updateOneProduct = async (product: IProduct) => {
    const productoActualizado = await updateProduct(product, token);

    if (productoActualizado) {
      updateProductsList(productoActualizado);
    }
  };

  return {
    products,
    getAllProducts,
    createOneProduct,
    updateOneProduct,
  };
};
