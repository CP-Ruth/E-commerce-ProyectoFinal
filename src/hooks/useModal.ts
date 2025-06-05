import { useState } from "react";
import {
  ICategory,
  IDetailsProduct,
  IDiscount,
  IProduct,
} from "../types/IDetailsProduct";

const useModal = () => {
  const [active, setActive] = useState<
    IDetailsProduct | IProduct | ICategory | IDiscount | null
  >(null);
  const [openModal, setOpenModal] = useState({
    info: false,
    edit: false,
  });

  const handlerOpenModal = (
    product: IDetailsProduct | IProduct | ICategory | IDiscount | null,
    option: "info" | "edit"
  ) => {
    setActive(product);
    if (option === "info") {
      setOpenModal((state) => ({ ...openModal, info: !state.info }));
    } else {
      setOpenModal((state) => ({ ...openModal, edit: !state.edit }));
    }
  };

  return {
    active,
    openModal,
    handlerOpenModal,
  };
};

export default useModal;
