import { useShallow } from "zustand/shallow";
import { useStoreProducts } from "../store/useStoreProducts";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../services/productService";
import { IProduct } from "../types/IProduct";

export const useListProduct = () => {
  const {
    products,
    setAllProducts,
    addProductList,
    updateProductList,
    deleteProductList,
  } = useStoreProducts(useShallow((state) => ({ ...state })));

  const getAllProducts = async () => {
    const productos = await getProducts();

    if (productos) {
      setAllProducts(productos);
    }
  };

  const createOneProduct = async (producto: IProduct) => {
    const nuevoProducto = await createProduct(producto);

    if (nuevoProducto) {
      addProductList(nuevoProducto);
    }
  };

  const updateOneProduct = async (producto: IProduct) => {
    const productoActualizado = await updateProduct(producto);

    if (productoActualizado) {
      updateProductList(productoActualizado);
    }
  };

  const deleteOneProduct = async (id: number) => {
    const productoEliminado = await deleteProduct(id);

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
