import { Outlet } from "react-router";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const AdminHome = () => {
  const { protectRoute } = useAuth();

  useEffect(() => {
    protectRoute();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
};

export default AdminHome;
