import { useListProduct } from "../../hooks/useListProduct"
import { useEffect } from "react"
import styles from "./AdminProduct.module.css"
import { TableHeadProduct } from "../../components/Table/TableRowHead"
import { TableRowProduct } from "../../components/Table/TableRow"


const AdminProducts = () => {
  const {products, getAllProducts} = useListProduct()

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
    <section>
      <div></div>
      <table className={styles.tableUser}>
        <thead>
          <TableHeadProduct />
        </thead>
        <tbody>
          {products &&
            products.length > 0 &&
            products.map((producto) => (
              <TableRowProduct key={producto.id} detalle={producto} />
            ))}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default AdminProducts