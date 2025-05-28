import { IoMdClose } from "react-icons/io";
import styles from "./DetailForm.module.css";
import {
  IDetailsProduct,
  IImage,
  IStock,
  ITalle,
} from "../../../types/IDetailsProduct";
import { FC, FormEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import { useFormDetails } from "../../../hooks/useFormDetails";
import Swal from "sweetalert2";
import { useListDetails } from "../../../hooks/useListDetails";
import { getTalles } from "../../../services/tallesService";

interface PropsDetailForm {
  detalle: IDetailsProduct;
  onClose: () => void;
}

const initialForm: IDetailsProduct = {
  producto: {
    nombre: "",
    sexo: "",
    tipoProducto: "",
    categorias: [],
  },
  precioVenta: 0,
  precioCompra: 0,
  color: "",
  activo: true,
  imagenes: [],
  stocks: [],
};

const DetailForm: FC<PropsDetailForm> = ({ detalle, onClose }) => {
  const {
    form,
    setForm,
    handlerDetailsChange,
    handlerStockChange,
    handlerTalleChange,
    handlerImageChange,
  } = useFormDetails(initialForm);
  const { updateOneDetail } = useListDetails();
  const [talles, setTalles] = useState<ITalle[]>([])

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateOneDetail(form);
    console.log(form);
    Swal.fire({
      title: "Se ha actualizado correctamente",
      icon: "success",
    });
    onClose();
  };

  useEffect(() => {
    if (detalle) {
      if (detalle.stocks.length === 1) {
        detalle.stocks.push({
          talle: { name: "" },
          stock: 0,
        });
      }
      setForm(detalle);
    }
  }, [detalle]);

  useEffect(() => {
    const fetchTalles = async () => {
      const talles = await getTalles();
      setTalles(talles);
      console.log(talles);
    };
    fetchTalles();
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <IoMdClose className={styles.close} size={30} onClick={onClose} />
        <h2 className={styles.title}>
          {detalle ? "Editar" : "Crear"} Producto
        </h2>
        <div className={styles.formContainer}>
          <Input
            name="color"
            value={form.color}
            onChange={handlerDetailsChange}
            text="Color"
          />
          <Input
            name="precioCompra"
            value={form.precioCompra}
            onChange={handlerDetailsChange}
            text="Precio Compra"
          />
          <Input
            name="precioVenta"
            value={form.precioVenta}
            onChange={handlerDetailsChange}
            text="Precio Venta"
          />
          <div className={styles.item}>
            <label htmlFor="talle">Talles: </label>
            {form.stocks.map((stock: IStock, index: number) => (
              <div key={index} className={styles.talles}>
                <select name="talle">
                  {talles.length > 0 &&
                    talles.map((talle: ITalle, index: number) => (
                      <option key={index} value={talle.name}>
                        {talle.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  placeholder="Cantidad"
                  value={stock.stock}
                  onChange={(e) => handlerStockChange(e, index)}
                />
              </div>
            ))}
          </div>
          <div className={styles.item}>
            <label htmlFor="">Imagenes: </label>
            <div>
              {form.imagenes.map((imagen: IImage, index: number) => (
                <div className={styles.images}>
                  <img key={index} src={imagen.url} alt="" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlerImageChange(e, index)}
                  />
                </div>
              ))}
            </div>
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

export default DetailForm;
