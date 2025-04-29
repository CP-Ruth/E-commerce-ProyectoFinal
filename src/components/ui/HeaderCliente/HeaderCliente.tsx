import style from "./HeaderCliente.module.css"
import carrito from "../../../assets/icons/shop.svg";
import { IoMenuOutline } from "react-icons/io5";
export const HeaderCliente = () => {
  return (
    <div className={style.containerHeader}>
      /* si es m */
      {<IoMenuOutline />   }
      <img src="/logo.svg" className={style.headerLogo}/>
      <div className={style.headerOptions}>
        <div className={style.headerNavSearch}>
          <a href="">Home</a>
          <a href="">Mujer</a>
          <a href="">Hombre</a>
        </div>
        <div className={style.headerBuyLogin}>
          <button><img src={carrito} alt="Carrito de compras"/></button>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}
