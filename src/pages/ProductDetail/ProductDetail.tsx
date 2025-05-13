import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Photos from "./Photos/Photos";
import styles from "./ProductDetail.module.css"
const ProductDetail = () => {

  const {id}= useParams();
  
  return (
    <>
    <Header />
    <main className={styles.mainContainer}>
        <Photos />
        <Details />
        <Description />
      </main>
    <Footer />
    </>
  )
}

export default ProductDetail;