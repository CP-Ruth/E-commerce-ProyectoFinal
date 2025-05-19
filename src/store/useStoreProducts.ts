import { create } from "zustand";
import { IDetailsProduct } from "../types/IDetailsProduct";

interface StoreProduct {
  products: IDetailsProduct[];
  setAllProducts: (products: IDetailsProduct[]) => void;
  addProductList: (product: IDetailsProduct) => void;
  updateProductList: (product: IDetailsProduct) => void;
  deleteProductList: (id: number) => void;
}

export const useStoreProducts = create<StoreProduct>((set) => ({
  products: [],
  setAllProducts: (products: IDetailsProduct[]) => set({ products }),
  addProductList: (product: IDetailsProduct) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProductList: (product: IDetailsProduct) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === product.id ? product : p)),
    })),
  deleteProductList: (id: number) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
}));
