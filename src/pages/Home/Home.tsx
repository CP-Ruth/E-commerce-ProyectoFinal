import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import SectionInfo from "./SectionInfo/SectionInfo";
import Card from "./Card/Card";
import SliderProducts from "./SliderProducts/SliderProducts";
/* ------------------ Imagenes ------------------------*/
import ImageHero from "../../assets/images/running-header.png";
import RunMan from "../../assets/images/runner-man.png";
import RunWoman from "../../assets/images/runner-woman.png";
import RunningWoman from "../../assets/images/running_woman.jpg";
import RunningMan from "../../assets/images/running_man.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroImage title="Wildest dream" image={ImageHero}>
          Estamos para equiparte con lo que necesites sin importar cómo sea tu
          camino. Así que salí ahí fuera, corré libre y descubrí la grandeza en
          tu naturaleza.
        </HeroImage>
        <SectionInfo title="¿Qué tipo de corredor sos?">
          <Card title="El marcador de ritmo" image={RunMan}>
            Los corredores corren sin importar el horario. Desde despertarse a
            las 5 AM hasta la sesión en la cinta después del trabajo.
          </Card>
          <Card title="Para tu dia de carrera" image={RunWoman}>
            Correlo, sentílo… o no. Es tu viaje, tus kilómetros, a tu manera.
            Sin importar si te motivás hoy o mañana, estamos acá para cuando
            estés listo.
          </Card>
        </SectionInfo>
        <SliderProducts />
        <SectionInfo>
          <Card title="Running Mujer" image={RunningWoman} />
          <Card title="Running Hombre" image={RunningMan} />
        </SectionInfo>
      </main>
      <Footer />
    </>
  );
};

export default Home;
