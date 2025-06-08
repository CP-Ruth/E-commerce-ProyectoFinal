import { create } from "zustand";
import { IOrderPay } from "../types/IOrder";

interface StoreOrders {
  orders: IOrderPay[];
  setOrders: (orders: IOrderPay[]) => void;
}

const useStoreOrders = create<StoreOrders>((set) => ({
  orders: [],
  setOrders: (orders: IOrderPay[]) => set({ orders }),
}));

export default useStoreOrders;
