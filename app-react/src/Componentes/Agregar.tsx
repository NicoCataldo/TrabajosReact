import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import "./styles.css";
import Instrumento from "../../Entidades/Instrumento";
import { useEffect, useState } from "react";
import {
  getAllInstrumentos,
  getOneInstrumento,
} from "../../Servicios/FuncionesApi";
export const Agregar = () => {
  const { idinstrumento } = useParams();
  const [instru, setInstrumento] = useState<Instrumento>(new Instrumento());
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  const getInstrumento = async () => {
    if (Number(idinstrumento) !== 0) {
      let instrumentoSelect: Instrumento = await getOneInstrumento(
        Number(idinstrumento)
      );
      setInstrumento(instrumentoSelect);
    } else {
      let instrumentoSelect: Instrumento = new Instrumento();
      setInstrumento(instrumentoSelect);
    }
  };

  useEffect(() => {
    getInstrumento();
    getInstrumentos();
  }, []);

  return (
    <>
      <NavBar />
      <div className="Formulario-Instrumento">
        <h3>Cargar un nuevo instrumento</h3>
        <div className="mb-3" style={{ width: "600px" }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Instrumento
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre del instrumento"
            defaultValue={instru?.instrumento}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese la marca"
            defaultValue={instru?.marca}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el modelo"
            defaultValue={instru?.modelo}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Url de la imagen"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el precio"
            defaultValue={instru?.precio}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Costo de envio
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ingrese el costo de envio"
            defaultValue={instru?.costoEnvio}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Breve descripcion"
            defaultValue={instru?.descripcion}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Categoría
          </label>
          <select className="form-select" aria-label="Default select example">
            if (Number(idinstrumento) !== 0){" "}
            {<option value="">{instru?.marca}</option>} else{" "}
            {<option value="">Seleccione una categoría</option>}
            {Array.from(new Set(instrumentos.map((istru) => istru.marca))).map(
              (marca) => (
                <option key={marca} value={marca}>
                  {marca}
                </option>
              )
            )}
          </select>
        </div>
        <div className="BotonAgregar">
          <a className="btn btn-primary" href={`/Agregar/0`}>
            Agregar
          </a>
        </div>
      </div>
    </>
  );
};
