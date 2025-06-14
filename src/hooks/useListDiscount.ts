import { useShallow } from "zustand/shallow";
import { useStoreDiscount } from "../store/useStoreDiscount";
import { useStoreUserActive } from "../store/useStoreUserActive";
import {
  createDiscount,
  getDescuentos,
  updateDiscount,
} from "../services/descuentoService";
import { IDiscount } from "../types/IDetailsProduct";

export const useListDiscount = () => {
  const {
    descuentos,
    setAllDescuentos,
    addDescuento,
    updateDescuento,
  } = useStoreDiscount(
    useShallow((state) => ({
      ...state,
    }))
  );
  const token = useStoreUserActive((state) => state.token);

  const getAllDiscounts = async () => {
    const descuentos = await getDescuentos();

    if (descuentos) {
      setAllDescuentos(descuentos);
    }
  };

  const createOneDiscount = async (discount: IDiscount) => {
    const nuevoDescuento = await createDiscount(discount, token);

    if (nuevoDescuento) {
      addDescuento(nuevoDescuento);
    }
  };

  const updateOneDiscount = async (discount: IDiscount) => {
    const descuentoActualizado = await updateDiscount(discount, token);

    if (descuentoActualizado) {
      updateDescuento(descuentoActualizado);
    }
  };

  return {
    descuentos,
    getAllDiscounts,
    createOneDiscount,
    updateOneDiscount,
  };
};
