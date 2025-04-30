import Button from "../../../components/Button/Button"
import styles from "./Title.module.css"

export const Title = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>ENCUENTRA LO QUE BUSCAS</h2>
        <Button />
    </div>
  )
}
