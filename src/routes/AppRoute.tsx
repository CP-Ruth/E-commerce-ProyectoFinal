import { Route, Routes } from "react-router"
import { Home } from "../components/screen/VistaCliente/Home/Home"


export const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} ></Route>
    </Routes>
  )
}
