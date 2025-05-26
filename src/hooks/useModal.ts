import { useState } from "react";
import { IDetailsProduct } from "../types/IDetailsProduct";

const useModal = () => {
  const [productActive, setProductActive] = useState<IDetailsProduct>();
  const [openModal, setOpenModal] = useState({
    info: false,
    edit: false,
  });

  const handlerOpenModal = (
    product: IDetailsProduct,
    option: "info" | "edit"
  ) => {
    setProductActive(product);
    if (option === "info") {
      setOpenModal((state) => ({ ...openModal, info: !state.info }));
    } else {
      setOpenModal((state) => ({ ...openModal, edit: !state.edit }));
    }
  };

  return {
    productActive,
    openModal,
    handlerOpenModal
  }
};

export default useModal;
