import { useEffect, useState } from "react";
import { NavBar } from "../Commons/NavBar";
import { getDatosLinea, getDatosTorta } from "../../Servicios/FuncionesApi";
import Chart from "react-google-charts";

export const optionsLine = {
  title: "Compras Vs Ventas",
  curveType: "function",
  legend: { position: "bottom" },
};

export const optionsPie = {
  title: "Cantidad de Articulos Venta",
};

export const ChartsGoogle = () => {
  const [datosChartLine, setDatosChartLine] = useState<any>();
  const [datosChartPie, setDatosChartPie] = useState<any>();

  const getLineChart = async () => {
    const datosBackend = await getDatosLinea();
    console.log(datosBackend);
    setDatosChartLine(datosBackend);
  };

  const getPieChart = async () => {
    const datosBackend = await getDatosTorta();
    console.log(datosBackend);
    setDatosChartPie(datosBackend);
  };

  useEffect(() => {
    getLineChart();
    getPieChart();
  }, []);
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Chart
          chartType="LineChart"
          data={datosChartLine}
          options={optionsLine}
          width="700px"
          height="700px"
        />
        <Chart
          chartType="PieChart"
          data={datosChartPie}
          options={optionsPie}
          width={"700px"}
          height={"700px"}
        />
      </div>
    </>
  );
};
