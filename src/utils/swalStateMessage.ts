import Swal from "sweetalert2";

export const swalStateMessage = (
  id: number,
  text: string,
  functionState: (id: number) => void
) => {
  Swal.fire({
    title: `¿Estas seguro de cambiar el estado de este ${text}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#b2bec3",
    confirmButtonText: "¡Si, cambialo!",
  }).then((result) => {
    if (result.isConfirmed) {
      functionState(id);
      Swal.fire("¡Estado Actualizado!", `El estado ha sido actualizado.`, "success");
    }
  });
};
