import { useShallow } from "zustand/shallow";
import { IProduct } from "../types/IDetailsProduct";
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

  const getAllProducts = async () => {
    const token = localStorage.getItem("token");
    const products = await getProducts(token!);

    if (products) {
      setAllProducts(products);
    }
  };

  const createOneProduct = async (product: IProduct) => {
    const token = localStorage.getItem("token");
    const nuevoProducto = await createProduct(product, token!);

    if (nuevoProducto) {
      addProductsList(nuevoProducto);
    }
  };

  const updateOneProduct = async (product: IProduct) => {
    const token = localStorage.getItem("token");
    const productoActualizado = await updateProduct(product, token!);

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
