import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const createImage = async (image: File, descripcion: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${URL}/imagenes`,
      { url: image, alt: descripcion },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
