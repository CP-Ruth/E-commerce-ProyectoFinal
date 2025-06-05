import styles from "./DiscountForm.module.css";
import { IoMdClose } from "react-icons/io";
import Input from "../../../components/Input/Input";
import { IDiscount } from "../../../types/IDetailsProduct";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useListDiscount } from "../../../hooks/useListDiscount";

interface PropsDiscountForm {
  discount?: IDiscount;
  onClose: () => void;
}

const initialFormDiscount: IDiscount = {
  nombre: "",
  porcentaje: 0,
  fechaInicio: "",
  fechaFin: "",
  activo: true,
};

const DiscountForm: FC<PropsDiscountForm> = ({ discount, onClose }) => {
  const { createOneDiscount, updateOneDiscount } = useListDiscount();
  const [discountForm, setDiscountForm] = useState(initialFormDiscount);
  const [loading, setLoading] = useState(false);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscountForm({
      ...discountForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (discount) {
      updateOneDiscount(discountForm);
    } else {
      createOneDiscount(discountForm);
    }

    Swal.fire({
      title: `Se ha ${discount ? "actualizado" : "creado"} correctamente`,
      icon: "success",
    });

    onClose();
  };

  useEffect(() => {
    if (discount) {
      setDiscountForm(discount);
    }
  }, [discount]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>
          {discount ? "Editar" : "Crear"} descuento
        </h2>
        <div className={styles.formContainer}>
          <Input
            name="nombre"
            value={discountForm.nombre}
            onChange={handlerChange}
            text="Nombre"
          />
          <Input
            name="porcentaje"
            type="number"
            value={discountForm.porcentaje}
            onChange={handlerChange}
            text="Porcentaje"
          />
          <Input
            name="fechaInicio"
            type="date"
            value={discountForm.fechaInicio}
            onChange={handlerChange}
            text="Fecha inicio"
          />
          <Input
            name="fechaFin"
            type="date"
            value={discountForm.fechaFin}
            onChange={handlerChange}
            text="Fecha fin"
          />
        </div>
        <div className={styles.options}>
          {loading ? (
            <p>Guardando...</p>
          ) : (
            <>
              <button className={styles.button} onClick={onClose}>
                Cancelar
              </button>
              <button className={styles.button}>Guardar</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default DiscountForm;
