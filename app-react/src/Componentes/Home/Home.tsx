import { NavBar } from "../Commons/NavBar";
import "../styles.css";
export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="Instrumentos"></div>
      <div>
        <h1>Tienda Angus</h1>
        <div className="Imagen">
          <img src="https://www.malaga8.com/img/cms/custom-shop.jpg" alt="" />
        </div>
        <div className="Descripcion">
          <h2>
            Tienda Hendrix es una tienda de instrumentos musicales con ya más de
            15 años de experiencia. Tenemos el conocimiento y la capacidad como
            para informarte acerca de las mejores elecciones para tu compra
            musical.
          </h2>
        </div>
      </div>
    </>
  );
};
