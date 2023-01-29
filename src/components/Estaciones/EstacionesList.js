import { Table, Pagination, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { post_estaciones_list_page } from "redux/actions/estaciones";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Row from "react-bootstrap/Row";
function EstacionesDetail({
  estaciones_list,
  post_estaciones_list_page,
  count = 136,
}) {
  function ShowDataEstacion(nombre, horario) {
    setShow(true);
    setNombre(nombre);
    setHorario(horario);
  }
  const [active, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [horarioEstacion, setHorario] = useState("");
  const [nombreEstacion, setNombre] = useState("");
  const [paginationItem, setPaginationItems] = useState([]);
  const [codeStateGD, setCodeGD] = useState("");
  const [comunaStateGD, setComunaGD] = useState("");

  const handleClose = () => setShow(false);

  function setPagination(count, active_aux) {
    let items = [];
    for (
      let number = 1;
      number <= parseInt(count / 50) + (parseInt(count % 50) != 0 ? 1 : 0);
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active_aux}
          onClick={(event) => (
            post_estaciones_list_page(
              parseInt(event.target.text) - 1,
              codeStateGD,
              comunaStateGD
            ),
            setCount(parseInt(event.target.text)),
            setPagination(count, parseInt(event.target.text))
          )}
        >
          {number}
        </Pagination.Item>
      );
    }
    setPaginationItems(items);
  }
  useState(() => {
    post_estaciones_list_page(0, "", "");
  }, []);
  useEffect(() => {
    setPagination(count, 1);
  }, [count]);

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

          <Row className="g-2 m-3 ms-auto">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Comuna">
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setComunaGD(event.target.value);
                  }}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Código Linea">
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setCodeGD(event.target.value);
                  }}
                />
              </FloatingLabel>
            </Col>
            <Col md className="m-3 ms-auto ">
              <Button
                aria-label="Floating label select example"
                variant="outline-primary"
                size="lg"
                onClick={(event) => (
                  post_estaciones_list_page(0, codeStateGD, comunaStateGD),
                  setCount(parseInt(event.target.text)),
                  setPagination(count, 1)
                )}
              >
                Filtrar
              </Button>
            </Col>
          </Row>

          <Table className="responsive" striped>
            <thead>
              <tr>
                <th>Código Linea</th>
                <th>Nombre Fantasía</th>
                <th>Dirección</th>
                <th>Comuna</th>
                <th>Ver Horario</th>
              </tr>
            </thead>
            <tbody>
              {estaciones_list.map((estacion) => (
                <tr key={estacion._id}>
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
              <Pagination>{paginationItem}</Pagination>
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
  count: state.estaciones.count,
});

export default connect(mapStateToProps, {
  post_estaciones_list_page,
})(EstacionesDetail);
