import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagen from "media/perfil.jpeg";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function ContactoBlock() {
  return (
    <div className="mt-3">
      <div className="row featurette">
        <div className="col-md-5 mx-auto ">
          <div className="text-center">
            <img
              src={imagen}
              max-width="60%"
              height="auto"
              className="img-fluid"
              alt="React Bootstrap logo"
            />
            <title>Placeholder</title>
            <rect width="80%" height="80%" fill="#eee"></rect>
          </div>
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Jorge Ariel Díaz Matte
          </h2>
          <p className="mx-auto mt-1 h5">
            <a href="mailto: jdiazmatte@gmail.com">
              <p className="fst-italic">jdiazmatte@gmail.com</p>
            </a>
          </p>
          <h5 className="mt-3 text-muted">
            Ingeniero Civil Informático - USM 2021{" "}
          </h5>
          <h5 className=" text-muted">
            Tesista de Magíster en Ciencias de la Ingenieria Informática - USM{" "}
          </h5>
          <p className="mx-auto fst-italic mb-0 fw-lighter mt-4 h5">
            Más de tres años de experiencia laboral en desarrollo como
            FullStack.
          </p>
          <p className="mx-auto mt-2 h5">
            Lenguajes de Programación Utilizados:
            <ul className="mt-1">
              <li className="fst-italic lead">
                {" "}
                Python - Javascript - C/C++ - Java - SQL - Go
              </li>
            </ul>
          </p>
          <p className="mx-auto mt-1 h5">
            Tecnologías Utilizadas:
            <ul className="mt-1">
              <li className="fst-italic lead">
                {" "}
                Django - ReactJs - Bootstrap - Mysql
              </li>
            </ul>
          </p>
          <p className="mx-auto mt-1 h5">
            Herramientas Utilizadas:
            <ul className="mt-1">
              <li className="fst-italic lead">
                {" "}
                Docker - Nginx - Apache - DigitalOcean - Git
              </li>
            </ul>
          </p>
          <p className="mx-auto mt-1 ">
            <a className=" mx-2" href="https://cl.linkedin.com/in/jdiazmatte">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a className="mx-auto ml-4" href="https://github.com/Jor-Diaz">
              <FontAwesomeIcon icon={faGithubSquare} size="3x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
