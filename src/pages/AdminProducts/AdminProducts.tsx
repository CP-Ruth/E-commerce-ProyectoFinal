import { useParams } from "react-router";
import TableHead from "../AdminHome/TableHead/TableHead";

const AdminProducts = () => {
  const { tipo } = useParams();
  const columns = ["Nombre", "Color", "Sexo", "Cantidad", "Estado"];

  return (
    <>
      <TableHead columns={columns} />
      {tipo}
    </>
  );
};

export default AdminProducts;
