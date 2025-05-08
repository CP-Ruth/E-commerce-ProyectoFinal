import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Photos } from "./Photos/Photos";
import { Description } from "./Description/Description";
import { Details } from "./Details/Details";

const ProductDetail = () => {

  const {id}= useParams();
  
  return (
    <>
    <Header />
    <main>
      <h2> Detalle de producto</h2>
      <Photos/>
      <Description/>
      <Details />
    </main>
    <Footer />
    </>
  )
}

export default ProductDetail;