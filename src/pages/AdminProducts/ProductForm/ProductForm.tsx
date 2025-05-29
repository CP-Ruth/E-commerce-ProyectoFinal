import { IoMdClose } from "react-icons/io";
import styles from "./ProductForm.module.css";
import { FC, FormEvent, useEffect } from "react";
import Input from "../../../components/Input/Input";
import { useFormProduct } from "../../../hooks/useFormProduct";
import { IProduct } from "../../../types/IDetailsProduct";
import Select from "../../../components/Select/Select";
import RadioInput from "../../../components/RadioInput/RadioInput";
import Swal from "sweetalert2";
import { useListProducts } from "../../../hooks/useListProducts";
import { initialFormProduct } from "../../../utils/initialData";

interface PropsProductForm {
  producto: IProduct;
  onClose: () => void;
}

const ProductForm: FC<PropsProductForm> = ({ producto, onClose }) => {
  const { form, setForm, handlerFormChange, handlerCategoriasChange } =
    useFormProduct(initialFormProduct);
  const { updateOneProduct, createOneProduct } = useListProducts();

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.id) {
      updateOneProduct(form);
    } else {
      createOneProduct(form);
      console.log(form);
    }

    Swal.fire({
      title: `Se ha ${producto ? "actualizado" : "creado"} correctamente`,
      icon: "success",
    });

    onClose();
  };

  useEffect(() => {
    if (producto) {
      setForm(producto);
    }
  }, [producto]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>
          {producto ? "Editar" : "Crear"} Producto
        </h2>
        <div className={styles.formContainer}>
          <Input
            name="nombre"
            value={form.nombre}
            onChange={handlerFormChange}
            text="Nombre"
          />
          <Select
            name="sexo"
            value={form.sexo}
            onChange={handlerFormChange}
            options={["HOMBRE", "MUJER"]}
            text="Sexo"
          />
          <Select
            name="tipoProducto"
            value={form.tipoProducto}
            onChange={handlerFormChange}
            options={["CALZADO", "ROPA"]}
            text="Tipo Producto"
          />
          <RadioInput
            name="Categorias"
            onChange={handlerCategoriasChange}
            categorias={form.categorias}
          />
          <div className={styles.options}>
            <button className={styles.button} onClick={onClose}>
              Cancelar
            </button>
            <button className={styles.button}>Guardar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
