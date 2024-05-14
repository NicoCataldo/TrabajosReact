import { SetStateAction, useEffect, useState } from "react";
import Instrumento from "../../Entidades/Instrumento";
import { getAllInstrumentos } from "../../Servicios/FuncionesApi";
import { NavBar } from "./NavBar";
import "./styles.css";

export const Grilla = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  {
    /*Nota: Primero correr Json server con npm run server*/
  }
  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };
  const deletePlato = async (idInstru: string) => {};

  useEffect(() => {
    getInstrumentos();
  }, []);

  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const handleChangeCategoria = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategoriaFiltro(e.target.value);
  };

  const filteredInstrumentos = categoriaFiltro
    ? instrumentos.filter(
        (instrumento) => instrumento.marca === categoriaFiltro
      )
    : instrumentos;

  return (
    <>
      <NavBar />
      <div className="Busqueda">
        <div className="Boton">
          <a className="btn btn-primary" href={`/Agregar/0`}>
            Agregar
          </a>
        </div>
        <select value={categoriaFiltro} onChange={handleChangeCategoria}>
          <option value="">Todas las categorías</option>
          {/* Aquí deberías generar opciones para cada categoría única de tus instrumentos */}
          {Array.from(
            new Set(instrumentos.map((instrumento) => instrumento.marca))
          ).map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>
      <div className="Grilla">
        <div className="row">
          <div className="col">
            <b>ID</b>
          </div>
          <div className="col">
            <b>Nombre</b>
          </div>
          <div className="col">
            <b>Marca</b>
          </div>
          <div className="col">
            <b>Modelo</b>
          </div>
          <div className="col">
            <b>Precio</b>
          </div>
          <div className="col">
            <b>Envio</b>
          </div>
          <div className="col">
            <b>Modificar</b>
          </div>
          <div className="col">
            <b>Eliminar</b>
          </div>
        </div>
        {filteredInstrumentos.map((intru: Instrumento) => (
          <div className="row" key={intru.id}>
            <div className="col">{intru.id}</div>
            <div className="col">{intru.instrumento}</div>
            <div className="col">{intru.marca}</div>
            <div className="col">{intru.modelo}</div>
            <div className="col">{intru.precio}</div>
            <div className="col">{intru.costoEnvio}</div>
            <div className="col">
              <a
                className="btn btn-info"
                style={{ marginBottom: 10 }}
                href={`/Agregar/` + intru.id}
              >
                Modificar
              </a>
            </div>
            <div className="col">
              <a
                className="btn btn-danger"
                style={{ marginBottom: 10 }}
                onClick={(e) => deletePlato(intru.id)}
              >
                Eliminar
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
