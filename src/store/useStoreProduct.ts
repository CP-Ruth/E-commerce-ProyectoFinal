import { create } from "zustand";
import { IProduct } from "../types/IDetailsProduct";

interface StoreProduct {
  products: IProduct[];
  setAllProducts: (products: IProduct[]) => void;
  addProductsList: (product: IProduct) => void;
  updateProductsList: (product: IProduct) => void;
}

export const useStoreProduct = create<StoreProduct>((set) => ({
  products: [],
  setAllProducts: (products: IProduct[]) => set({ products }),
  addProductsList: (product: IProduct) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProductsList: (product: IProduct) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === product.id ? product : p)),
    })),
}));
