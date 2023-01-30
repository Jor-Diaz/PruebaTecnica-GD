import { Container } from "react-bootstrap";
import imageMain from "media/arquitectura.jpg";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <Container>
      <div class="px-4 py-1 my-3">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={imageMain}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Prueba Técnica </h1>
            <p class="lead">
              👨🏽‍💻 Este es mi desarrollo para el cargo de desarrollador FullStack.
              La imagen adjunta es el diseño de este proyecto, identificando las
              tecnologías utilizadas.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/estaciones">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-primary btn-lg px-4 me-md-2"
                >
                  Ver Estaciones
                </button>
              </Link>
              <Link to="/cache">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Ver Cache
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
