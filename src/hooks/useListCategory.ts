import { useShallow } from "zustand/shallow";
import { useStoreCategory } from "../store/useStoreCategory";
import { ICategory } from "../types/IDetailsProduct";
import {
  createCategory,
  getCategorias,
  modifyCategory,
} from "../services/categoriaService";
import { useStoreUserActive } from "../store/useStoreUserActive";

const useListCategory = () => {
  const { categorias, setAllCategories, addCategory, updateCategory } =
    useStoreCategory(useShallow((state) => ({ ...state })));
  const token = useStoreUserActive((state) => state.token);

  const getAllCategories = async () => {
    const categorias = await getCategorias();

    if (categorias) {
      setAllCategories(categorias);
    }
  };

  const createOneCategory = async (category: ICategory) => {
    const nuevaCategoria = await createCategory(category, token);

    if (nuevaCategoria) {
      addCategory(nuevaCategoria);
    }
  };

  const updateOneCategory = async (category: ICategory) => {
    const categoriaActualizada = await modifyCategory(category, token);

    if (categoriaActualizada) {
      updateCategory(categoriaActualizada);
    }
  };

  return {
    categorias,
    getAllCategories,
    createOneCategory,
    updateOneCategory,
  };
};

export default useListCategory;
