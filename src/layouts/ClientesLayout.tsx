import { Outlet } from "react-router"
import { HeaderCliente } from "../components/ui/HeaderCliente/HeaderCliente"
import { Footer } from "../components/ui/Footer/Footer"

export const Layout= () => {
    return (
        <>
        <HeaderCliente />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}