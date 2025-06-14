import { IoMdClose } from "react-icons/io";
import styles from "./DetailForm.module.css";
import {
  IDetailsProduct,
  IDiscount,
  IImage,
  IProduct,
  IStock,
  ITalle,
} from "../../../types/IDetailsProduct";
import { FC, FormEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import { useFormDetails } from "../../../hooks/useFormDetails";
import Swal from "sweetalert2";
import { useListDetails } from "../../../hooks/useListDetails";
import { getTalles } from "../../../services/tallesService";
import { imageUploader } from "../../../utils/uploadImage";
import { createImage } from "../../../services/imageService";
import { initialFormDetail } from "../../../utils/initialData";
import noImage from "../../../assets/images/no-photography.webp";
import { useListProducts } from "../../../hooks/useListProducts";
import Select from "../../../components/Select/Select";
import { getDescuentos } from "../../../services/descuentoService";

interface PropsDetailForm {
  detalle: IDetailsProduct;
  onClose: () => void;
}

const DetailForm: FC<PropsDetailForm> = ({ detalle, onClose }) => {
  const {
    form,
    setForm,
    handlerDetailsChange,
    handlerStockChange,
    handlerTalleChange,
    handlerImageChange,
    handlerProductChange,
    handlerDiscountChange,
  } = useFormDetails(initialFormDetail);
  const { updateOneDetail, createOneDetail } = useListDetails();
  const { products } = useListProducts();

  const [talles, setTalles] = useState<ITalle[]>([]);
  const [descuentos, setDescuentos] = useState<IDiscount[]>([]);
  const [loading, setLoading] = useState(false);

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const imagenCloud = form.imagenes.map((imagen, index) => {
      if (detalle) {
        return imagen.url !== detalle.imagenes[index].url
          ? imageUploader(imagen.url as File)
          : imagen;
      } else {
        return imagen.url ? imageUploader(imagen.url as File) : imagen;
      }
    });

    const imagenCloudArray: IImage[] = await Promise.all(imagenCloud);

    const upload = imagenCloudArray.map((imagen) =>
      typeof imagen === "string"
        ? createImage(imagen as File, form.producto.nombre)
        : imagen
    );

    const uploadArray = await Promise.all(upload);
    console.log(uploadArray);
    form.imagenes = uploadArray;

    const newForm = form

    if (form.stocks[1].talle.name === "") {
      newForm.stocks.pop()
    }

    if (newForm.id) {
      updateOneDetail(newForm);
    } else {
      createOneDetail(newForm);
    }

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
      const path =
        (detalle && detalle.producto.tipoProducto) ||
        form.producto.tipoProducto;
      const talles = await getTalles(path);
      setTalles(talles);
    };

    const fetchDiscount = async () => {
      const descuentos = await getDescuentos();
      setDescuentos(descuentos);
    };

    fetchTalles();
    fetchDiscount();
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
            type="number"
            value={form.precioCompra}
            onChange={handlerDetailsChange}
            text="Precio Compra"
          />
          <Input
            name="precioVenta"
            type="number"
            value={form.precioVenta}
            onChange={handlerDetailsChange}
            text="Precio Venta"
          />
          {!detalle && products && products.length > 0 && (
            <Select
              name="producto"
              value={form.producto.nombre}
              onChange={(e) => handlerProductChange(e, products)}
              text="Producto"
              options={products.map((producto: IProduct) => producto.nombre)}
            />
          )}
          <Select
            name="descuento"
            value={form.descuento?.nombre || ""}
            onChange={(e) => handlerDiscountChange(e, descuentos)}
            text="Descuento"
            options={descuentos.map((descuento: IDiscount) => descuento.nombre)}
          />
          <div className={styles.item}>
            <label htmlFor="talle">Talles: </label>
            {form.stocks.map((stock: IStock, index: number) => (
              <div key={index} className={styles.talles}>
                <select
                  name="talle"
                  value={stock.talle.name}
                  onChange={(e) => handlerTalleChange(e, index, talles)}
                >
                  <option value="">Seleccionar talle</option>
                  {talles.length > 0 &&
                    talles.map((talle: ITalle, index: number) => {
                      if (form.producto.tipoProducto === "CALZADO") {
                        if (talle.name.match(/^[0-9]/)) {
                          return (
                            <option key={index} value={talle.name}>
                              {talle.name}
                            </option>
                          );
                        }
                      } else {
                        if (talle.name.match(/^[A-Z]/)) {
                          return (
                            <option key={index} value={talle.name}>
                              {talle.name}
                            </option>
                          );
                        }
                      }
                    })}
                </select>
                <input
                  type="text"
                  placeholder="Cantidad"
                  value={stock.stock}
                  onChange={(e) => handlerStockChange(e, index)}
                  required
                />
              </div>
            ))}
          </div>
          <div className={styles.item}>
            <label htmlFor="">Imagenes: </label>
            <div>
              {form.imagenes.map((imagen: IImage, index: number) => (
                <div className={styles.images} key={index}>
                  <img
                    key={index}
                    src={(imagen.url as string) || noImage}
                    alt=""
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlerImageChange(e, index)}
                    required={detalle ? false : true}
                  />
                </div>
              ))}
            </div>
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
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
