import { useParams } from "react-router";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const ProductDetail = () => {

  const {idProduct}= useParams();
  
  return (
    <>

    <Header />
    <main>

    </main>
    <Footer />
    </>
  )
}