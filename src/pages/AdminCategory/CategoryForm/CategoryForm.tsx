import { IoMdClose } from "react-icons/io";
import styles from "./CategoryForm.module.css";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { ICategory } from "../../../types/IDetailsProduct";
import Input from "../../../components/Input/Input";
import useListCategory from "../../../hooks/useListCategory";
import Swal from "sweetalert2";

interface PropsCategory {
  category: ICategory;
  onClose: () => void;
}

const CategoryForm: FC<PropsCategory> = ({ category, onClose }) => {
  const { createOneCategory, updateOneCategory } = useListCategory();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ICategory>({
    nombre: "",
  });

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (category) {
      updateOneCategory(form);
    } else {
      createOneCategory(form);
    }

    Swal.fire({
      title: `Se ha ${category ? "actualizado" : "creado"} correctamente`,
      icon: "success",
    });

    onClose();
  };

  useEffect(() => {
    if (category) {
      setForm(category);
    }
  }, [category]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>
          {category ? "Editar" : "Crear"} categoria
        </h2>
        <div className={styles.formContainer}>
          <Input
            name="nombre"
            value={form.nombre}
            onChange={handlerChange}
            text="Nombre"
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

export default CategoryForm;
