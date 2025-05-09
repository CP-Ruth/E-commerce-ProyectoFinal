import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Photos } from "./Photos/Photos";
import { Description } from "./Description/Description";
import { Details } from "./Details/Details";
import styles from "./ProductDetail.module.css"


const ProductDetail = () => {

  const {id}= useParams();
  
  return (
    <div className={styles.pageContainer}>

      <Header />
      <main className={styles.mainContainer}>
        <Photos/>
        <Details />
        <Description/>
      </main>
      <Footer />

    </div>


  )
}

export default ProductDetail;