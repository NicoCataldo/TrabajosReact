import { useEffect, useState } from "react";
import Pedido from "../../Entidades/Pedido";
import { getAllPedidos } from "../../Servicios/FuncionesApi";
import { ItemPedidos } from "./ItemPedidos";
import "../styles.css";
import { NavBar } from "../Commons/NavBar";
import ExcelOptions from "./ExcelOptions";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const getPedidos = async () => {
    const datos: Pedido[] = await getAllPedidos();
    setPedidos(datos);
  };

  useEffect(() => {
    getPedidos();
  }, []);

  const generarExcel = () => {
    window.open(
      "http://localhost:9000/api/v1/excel/pedidos"
    );
  };

  return (
    <>
      <NavBar />
      <div className={pedidos.length < 1 ? "divVisible" : "divInvisible"}>
        <h3 className="PedidosTitulo">No tienes pedidos realizados</h3>
      </div>
      <div className="Boton">
          <a
            className="btn btn-primary"
            onClick={(e) => generarExcel()}
            style={{ marginRight: "10px" }}
          >
            Generar Excel
          </a>  
      </div>
      {pedidos.map((ped: Pedido) => (
        ped.activo ? (
          <ItemPedidos
            id={ped.id}
            fecha={ped.fecha}
            totalPedido={ped.totalPedido}
            titulo={ped.titulo}
            detalle={ped.detalle}
          />
        ) : null
      ))}

    </>
  );
};
