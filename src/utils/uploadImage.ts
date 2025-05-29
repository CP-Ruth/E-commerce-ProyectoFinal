export const imageUploader = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "imagenes");
  data.append("cloud_name", "dk93fowya");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dk93fowya/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();
    return result.secure_url;
  } catch (err) {
    console.error("Error al subir la imagen:", err);
  }
};
