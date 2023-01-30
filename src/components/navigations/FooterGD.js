import logo from "media/logo.svg";
import django from "media/django.png";
import { Link } from "react-router-dom";

export default function FooterGD() {
  return (
    <>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <img
                src={django}
                width="60"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </a>
            <p className="text-muted"> Jorge Díaz Matte © 2023</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Prueba Técnica</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/estaciones" className="nav-link p-0 text-muted">
                  Listado Estaciones
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Información</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/cache" className="nav-link p-0 text-muted">
                  Ver Cache
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contacto" className="nav-link p-0 text-muted">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Contacto</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://github.com/Jor-Diaz"
                  className="nav-link p-0 text-muted"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://cl.linkedin.com/in/jdiazmatte"
                  className="nav-link p-0 text-muted"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
