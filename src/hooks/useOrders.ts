import { useShallow } from "zustand/shallow";
import useStoreOrders from "../store/useStoreOrders";
import { getOrders } from "../services/ordersService";
import { useStoreUserActive } from "../store/useStoreUserActive";

export const useOrders = () => {
  const {orders, setOrders} = useStoreOrders(
    useShallow((state) => ({
      ...state,
    }))
  );
   const token = useStoreUserActive((state) => state.token);

  const getAllOrders = async () => {
    const orders = await getOrders(token);

    if (orders) {
      setOrders(orders);
    }
  };

  return {
    orders,
    getAllOrders,
  };
};
