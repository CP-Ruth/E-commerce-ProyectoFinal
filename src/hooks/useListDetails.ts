import { useShallow } from "zustand/shallow";
import { useStoreDetails } from "../store/useStoreDetails";
import { IDetailsProduct } from "../types/IDetailsProduct";
import { useStoreUserActive } from "../store/useStoreUserActive";
import { createDetail, deleteDetail, getDetails, updateDetail } from "../services/detailsService";

export const useListDetails = () => {
  const {
    details,
    setAllDetails,
    addDetailsList,
    updateDetailsList,
    deleteDetailsList,
  } = useStoreDetails(useShallow((state) => ({ ...state })));

  const token = useStoreUserActive((state) => state.token);

  const getAllDetails = async () => {
    const details = await getDetails();

    if (details) {
      setAllDetails(details);
    }
  };

  const createOneDetail = async (detail: IDetailsProduct) => {
    const nuevoDetail = await createDetail(detail);

    if (nuevoDetail) {
      addDetailsList(nuevoDetail);
    }
  };

  const updateOneDetail = async (detail: IDetailsProduct) => {
    const detalleActualizado = await updateDetail(detail, token);
    console.log(detalleActualizado);

    if (detalleActualizado) {
      updateDetailsList(detalleActualizado);
    }
  };

  const deleteOneDetail = async (id: number) => {
    const detalleEliminado = await deleteDetail(id, token);

    if (detalleEliminado) {
      deleteDetailsList(id);
    }
  };

  return {
    details,
    getAllDetails,
    createOneDetail,
    updateOneDetail,
    deleteOneDetail,
  };
};
