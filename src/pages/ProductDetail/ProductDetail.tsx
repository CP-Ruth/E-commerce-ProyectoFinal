import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ProductDetail = () => {

  const {id}= useParams();
  
  return (
    <>
    <Header />
    <main>
<h2> Detalle de producto</h2>
    </main>
    <Footer />
    </>
  )
}

export default ProductDetail;