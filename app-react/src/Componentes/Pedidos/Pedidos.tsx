import { useEffect, useState } from "react";
import Pedido from "../../Entidades/Pedido";
import { getAllPedidos } from "../../Servicios/FuncionesApi";
import { ItemPedidos } from "./ItemPedidos";
import "../styles.css";
import { NavBar } from "../Commons/NavBar";

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const getPedidos = async () => {
    const datos: Pedido[] = await getAllPedidos();
    setPedidos(datos);
  };

  useEffect(() => {
    getPedidos();
  }, []);
  return (
    <>
      <NavBar />
      <div className={pedidos.length < 1 ? "divVisible" : "divInvisible"}>
        <h3 className="PedidosTitulo">No tienes pedidos realizados</h3>
      </div>
      {pedidos.map((ped: Pedido) => (
        <ItemPedidos
          id={ped.id}
          fecha={ped.fecha}
          totalPedido={ped.totalPedido}
          titulo={ped.titulo}
          detalle={ped.detalle}
        ></ItemPedidos>
      ))}
    </>
  );
};
