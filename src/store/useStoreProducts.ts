import { create } from "zustand";
import { IProduct } from "../types/IProduct";

interface StoreProduct {
  products: IProduct[];
  setAllProducts: (products: IProduct[]) => void;
  addProductList: (product: IProduct) => void;
  updateProductList: (product: IProduct) => void;
  deleteProductList: (id: number) => void;
}

export const useStoreProducts = create<StoreProduct>((set) => ({
  products: [],
  setAllProducts: (products: IProduct[]) => set({ products }),
  addProductList: (product: IProduct) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProductList: (product: IProduct) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === product.id ? product : p)),
    })),
  deleteProductList: (id: number) =>
    set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
}));
