import { useCarrito } from "../../hooks/useCarrito.tsx";
import Instrumento from "../../../Entidades/Instrumento";
import ItemCarrito from "./ItemCarrito.tsx";
import { Button } from "@mui/material";
import Pedido from "../../../Entidades/Pedido.ts";
import { useEffect, useState } from "react";
import DetallePedido from "../../../Entidades/DetallePedido.ts";
import {
  getAllInstrumentos,
  saveDetallePedido,
  savePedido,
} from "../../../Servicios/FuncionesApi.ts";

export const Carrito = () => {
  const { cart, limpiarCarrito } = useCarrito();
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [instrumentosCoincidentes, setInstrumentosCoincidentes] = useState<
    Instrumento[]
  >([]);
  const pedido = new Pedido();
  const detalles: DetallePedido[] = [];

  const getInstrumentos = async () => {
    const datos: Instrumento[] = await getAllInstrumentos();
    setInstrumentos(datos);
  };

  const Envios = () => {
    EncontrarCoincidencias();
    CrearDetalle();
    CrearPedidos();
  };

  const encontrarInstrumentosComunes = (
    instrumentos: Instrumento[],
    cart: Instrumento[]
  ): Instrumento[] => {
    return cart.filter((instrumento) =>
      instrumentos.some(
        (instrumentoItem) => instrumentoItem.id === instrumento.id
      )
    );
  };
  const EncontrarCoincidencias = () => {
    const instrumentosCoincidentes = encontrarInstrumentosComunes(
      instrumentos,
      cart
    );
    setInstrumentosCoincidentes(instrumentosCoincidentes);
  };

  const CrearDetalle = () => {
    instrumentosCoincidentes.forEach((instrumento: Instrumento) => {
      const detalle = new DetallePedido();
      detalle.cantidad = instrumento.cantidad;
      detalle.instrumento = instrumento;
      detalles.push(detalle);
      console.log(detalle);
      saveDetallePedido(detalle);
    });
  };

  const CrearPedidos = () => {
    pedido.fecha = new Date();
    pedido.totalPedido = SacarTotal();
    detalles.forEach((detal: DetallePedido) => {
      pedido.detalles.push(detal);
    });
    console.log(pedido);
    EnviarPedido();
  };

  const EnviarPedido = () => {
    if (pedido.fecha == undefined) {
      return;
    }
    if (pedido.id == undefined) {
      return;
    }
    if (pedido.detalles == undefined) {
      return;
    }
    if (pedido.totalPedido == undefined || pedido.totalPedido == 0) {
      return;
    }
    console.log("Pedido enviado");
    alert("Pedido " + pedido.id + " enviado con éxito");
    savePedido(pedido);
    limpiarCarrito;
  };

  function SacarTotal() {
    let resultado: number = 0;
    instrumentosCoincidentes.forEach((instru: Instrumento) => {
      resultado += instru.precio;
    });
    return resultado;
  }

  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <>
      <div
        style={{
          maxHeight: "20px",
          marginTop: "60px",
          display: "flex",
        }}
      >
        <p style={{ margin: 0 }}>Carrito de compras</p>
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: "auto" }}
          onClick={limpiarCarrito}
        >
          Vaciar carrito
        </Button>
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: "auto" }}
          onClick={Envios}
        >
          Enviar Pedido
        </Button>
      </div>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((instru: Instrumento) => (
          <ItemCarrito
            key={instru.id}
            id={instru.id}
            instrumento={instru.instrumento}
            marca={instru.marca}
            modelo={instru.modelo}
            imagen={instru.imagen}
            precio={instru.precio}
            costoEnvio={instru.costoEnvio}
            cantidadVendida={instru.cantidadVendida}
            descripcion={instru.descripcion}
            InstrumentoObject={instru}
            cantidad={instru.cantidad}
          ></ItemCarrito>
        ))
      )}
    </>
  );
};
