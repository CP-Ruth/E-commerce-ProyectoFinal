import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import HeroImage from "./HeroImage/HeroImage";
import SectionInfo from "./SectionInfo/SectionInfo";
import Card from "./Card/Card";
/* ------------------ Imagenes ------------------------*/
import ImageHero from "../../assets/images/running-header.png";
import RunMan from "../../assets/images/runner-man.png";
import RunWoman from "../../assets/images/runner-woman.png";

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
        <SectionInfo title="¿Que tipo de corredor sos?">
          <Card title="El marcador de ritmo" image={RunMan}>
            Los corredores corren sin importar el horario. Desde despertarse a
            las 5 AM hasta la sesión en la cinta después del trabajo, siempre lo
            hacés posible. Encontrá el equipo que te llevará allí.
          </Card>
          <Card title="Para tu dia de carrera" image={RunWoman}>
            Correlo, sentílo… o no. Es tu viaje, tus kilómetros, a tu manera.
            Sin importar si te motivás hoy o mañana, estamos acá para cuando
            estés listo.
          </Card>
        </SectionInfo>
      </main>
      <Footer />
    </>
  );
};

export default Home;
