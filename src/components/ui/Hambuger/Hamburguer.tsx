import { IoMdClose } from "react-icons/io"
import style from "./Hamburguer.module.css"

export const Hamburguer = () => {
  return (
    <div className={style.menuHamburger}>

        <nav className={style.menuHamburgerNav}>
            <a href="">Inicio</a>
            <a href="">Hombre</a>
            <a href="">Mujer</a>
        </nav>
    </div>
  )
}
