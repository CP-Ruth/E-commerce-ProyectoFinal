import axios from "axios";

const URL = "http://localhost:8080/api/v1";

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
