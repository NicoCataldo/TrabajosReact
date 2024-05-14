export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DondeEstamos">
                Donde Estamos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/App">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Grilla">
                Grilla de Productos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
