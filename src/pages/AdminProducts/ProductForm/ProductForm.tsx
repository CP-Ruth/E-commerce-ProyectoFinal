import { IoMdClose } from "react-icons/io";
import styles from "./ProductForm.module.css";
import { IDetailsProduct } from "../../../types/IDetailsProduct";
import { FC, useEffect } from "react";
import { useFormProduct } from "../../../hooks/useFormProduct";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import RadioInput from "../../../components/RadioInput/RadioInput";

interface PropsProductForm {
  detalle: IDetailsProduct;
  onClose: () => void;
}

const initialForm: IDetailsProduct = {
  producto: {
    nombre: "",
    sexo: "",
    precio_venta: 0,
    precio_compra: 0,
    tipoProducto: "",
    categorias: [
      {
        nombre: "",
      },
    ],
  },
  color: "",
  activo: true,
  imagenes: [],
  stocks: [],
};

const ProductForm: FC<PropsProductForm> = ({ detalle, onClose }) => {
  const {
    form,
    setForm,
    handlerDetailsChange,
    handlerProductChange,
    handleCheckboxChange,
  } = useFormProduct(initialForm);

  useEffect(() => {
    if (detalle) {
      setForm(detalle);
    }
  }, [detalle]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>
          {detalle ? "Editar" : "Crear"} Producto
        </h2>
        <div className={styles.formContainer}>
          <Input
            name="producto"
            value={form.producto.nombre}
            onChange={handlerProductChange}
            text="Producto"
          />
          <Input
            name="color"
            value={form.color}
            onChange={handlerDetailsChange}
            text="Color"
          />
          <Input
            name="precio_compra"
            value={form.producto.precio_compra}
            onChange={handlerProductChange}
            text="Precio Compra"
          />
          <Input
            name="precio_venta"
            value={form.producto.precio_venta}
            onChange={handlerProductChange}
            text="Precio Venta"
          />
          <Select
            name="tipo_producto"
            value={form.producto.tipoProducto}
            onChange={handlerProductChange}
            text="Tipo"
            options={["Calzado", "Ropa"]}
          />
          <Select
            name="sexo"
            value={form.producto.sexo}
            onChange={handlerProductChange}
            text="Sexo"
            options={["Hombre", "Mujer"]}
          />
          <RadioInput
            name="Categoria"
            items={["Deportivo", "Running", "Training", "Futbol"]}
            onChange={handleCheckboxChange}
            categorias={form.producto.categorias}
          />
          <div className={styles.item}>
            <label htmlFor="talle">Talles: </label>
            <div className={styles.talles}>
              <input type="text" placeholder="Talle" />
              <input type="number" placeholder="Cantidad" />
            </div>
            <div className={styles.talles}>
              <input type="text" placeholder="Talle" />
              <input type="number" placeholder="Cantidad" />
            </div>
          </div>
          <div className={styles.item}>
            <label htmlFor="">Imagenes: </label>
            <input type="file" multiple />
          </div>
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
