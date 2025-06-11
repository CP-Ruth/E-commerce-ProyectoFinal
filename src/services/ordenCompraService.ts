import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const editOrdenCompra = async (id: number) => {
  try {
    const response = await axios.put(`${URL}/ordenes_compras/usuario/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    console.log(error);
  }
};
