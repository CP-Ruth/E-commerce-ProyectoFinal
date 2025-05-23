import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Photos from "./Photos/Photos";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { IDetailsProduct } from "../../types/IDetailsProduct";
import { getProductById } from "../../services/productService";

const ProductDetail = () => {
  const [activeProdcut, setActiveProdcut] = useState<IDetailsProduct>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(Number(id));
      setActiveProdcut(product);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {activeProdcut && (
          <>
            <Photos photos={activeProdcut?.imagenes || []} />
            <Details product={activeProdcut!} />
          </>
        )}
        <Description />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
