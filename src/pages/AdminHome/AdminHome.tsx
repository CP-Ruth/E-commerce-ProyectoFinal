import { Outlet } from "react-router";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";

const AdminHome = () => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
};

export default AdminHome;
