import { create } from "zustand";
import { ICategory } from "../types/IDetailsProduct";

interface CategoryState {
  categorias: ICategory[];
  setAllCategories: (categorias: ICategory[]) => void;
  addCategory: (category: ICategory) => void;
  updateCategory: (category: ICategory) => void;
}

export const useStoreCategory = create<CategoryState>((set) => ({
  categorias: [],
  setAllCategories: (categorias: ICategory[]) => {
    set(() => ({
      categorias: categorias,
    }));
  },
  addCategory: (category: ICategory) => {
    set((state) => ({
      categorias: [...state.categorias, category],
    }));
  },
  updateCategory: (category: ICategory) => {
    set((state) => ({
      categorias: state.categorias.map((c) =>
        c.id === category.id ? category : c
      ),
    }));
  }
}));
