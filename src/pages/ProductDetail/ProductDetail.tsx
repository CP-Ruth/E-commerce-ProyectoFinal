import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Details from "./Details/Details";
import Photos from "./Photos/Photos";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { IDetailsProduct } from "../../types/IDetailsProduct";
import { getDetailById } from "../../services/detailsService";

const ProductDetail = () => {
  const [activeProdcut, setActiveProdcut] = useState<IDetailsProduct>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getDetailById(Number(id));
      setActiveProdcut(product);
    };
    fetchProduct();
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <button className={styles.comeBack} onClick={() => navigate(-1)}>
            Volver al catalogo
          </button>
      <main className={styles.mainContainer}>
        {activeProdcut && (
          <>
            <Photos photos={activeProdcut?.imagenes || []} />
            <Details product={activeProdcut!} />
          </>
        )}
        {/* <Description /> */}
      </main>
      <div className={styles.foot}>
      <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
