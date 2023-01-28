import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table, Pagination } from "react-bootstrap";

import { connect } from "react-redux";
import { useState } from "react";
import { post_estaciones_list_page } from "redux/actions/estaciones";

function EstacionesDetail({ estaciones_list, post_estaciones_list_page }) {
  function ShowDataEstacion(nombre, horario) {
    setShow(true);
    setNombre(nombre);
    setHorario(horario);
  }
  const [active, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [horarioEstacion, setHorario] = useState("");
  const [nombreEstacion, setNombre] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item
        key={number - 1}
        active={number === active}
        onClick={(event) => (
          post_estaciones_list_page(parseInt(event.target.text) - 1),
          setCount(parseInt(event.target.text))
        )}
      >
        {number}
      </Pagination.Item>
    );
  }
  useState(() => {
    post_estaciones_list_page(0);
  }, []);
  return (
    <>
      {estaciones_list ? (
        <div className="container ms-auto border mt-5">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Horario Estación {nombreEstacion} </Modal.Title>
            </Modal.Header>
            <Modal.Body>{horarioEstacion}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Table className="responsive" striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Código Linea</th>
                <th>Nombre Fantasia</th>
                <th>Dirección</th>
                <th>Comuna</th>
                <th>Ver Horario</th>
              </tr>
            </thead>
            <tbody>
              {estaciones_list.map((estacion) => (
                <tr key={estacion._id}>
                  <td>{estacion._id}</td>
                  <td>{estacion["CODIGO"]}</td>
                  <td>{estacion["NOMBRE FANTASIA"]}</td>
                  <td>{estacion["DIRECCION"]}</td>
                  <td>{estacion["COMUNA"]}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() =>
                        ShowDataEstacion(
                          estacion["NOMBRE FANTASIA"],
                          estacion["HORARIO REFERENCIAL"]
                        )
                      }
                    >
                      Horario
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <Pagination>{items}</Pagination>
            </tfoot>
          </Table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  estaciones_list: state.estaciones.estaciones_list,
});

export default connect(mapStateToProps, {
  post_estaciones_list_page,
})(EstacionesDetail);
