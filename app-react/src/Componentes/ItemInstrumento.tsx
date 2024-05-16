type InstrumentoParams = {
  id: number;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: number;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
};

function ItemInstrumento(args: InstrumentoParams) {
  const text =
    args.costoEnvio === "G"
      ? "Envio gratis a todo el pais"
      : `Costo de envio al interior de Argentina $${args.costoEnvio}`;

  return (
    <>
      <div className="card mb-3" style={{ width: "600px", marginTop: "60px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={args.imagen}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{args.instrumento}</h5>
              <h5 className="card-text">${args.precio}</h5>
              <p className="card-text">
                <small className="text-body-secondary">{text}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {args.cantidadVendida} vendidos
                </small>
              </p>
              <a href={`Detalle/${args.id}`} className="btn btn-primary">
                Ver Detalle
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInstrumento;
