function NavBarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto" href="#">
          Título Centrado
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Enlace 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Enlace 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Enlace 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponent;