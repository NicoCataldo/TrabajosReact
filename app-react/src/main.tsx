import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Componentes/App.tsx";
import { DetalleInstrumento } from "./Componentes/DetalleInstrumento.tsx";
import { Home } from "./Componentes/Home.tsx";
import { DondeEstamos } from "./Componentes/DondeEstamos.tsx";
import { Grilla } from "./Componentes/Grilla.tsx";
import { Agregar } from "./Componentes/Agregar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/App" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/DondeEstamos" element={<DondeEstamos />} />
        <Route
          path="/Detalle/:idinstrumento"
          element={<DetalleInstrumento />}
        />
        <Route path="*" element={<Home />} />
        <Route path="/Grilla" element={<Grilla />} />
        <Route path="/Agregar/:idinstrumento" element={<Agregar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
