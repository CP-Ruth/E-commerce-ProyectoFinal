import { useState } from "react";
import { IDetailsProduct, IProduct } from "../types/IDetailsProduct";

const useModal = () => {
  const [productActive, setProductActive] = useState<IDetailsProduct | IProduct>();
  const [openModal, setOpenModal] = useState({
    info: false,
    edit: false,
  });

  const handlerOpenModal = (
    product: IDetailsProduct | IProduct,
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
