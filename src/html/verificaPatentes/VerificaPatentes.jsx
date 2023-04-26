import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import VistaPrevia from "../registroDirectorio/VistaPrevia";
import Detalle from "./Detalles";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import { RegistrosContext } from "../../context/Registros";
import { useContext } from "react";
import InputFiltrar from "../../components/InputFiltrar";

export default function RegistrosPatentes() {
  const { registrosPatentes, getRegistrosPatentes, filtrarRegistrosPatentes } =
    useContext(RegistrosContext);
  const [show, setShow] = useState(false);
  const [registro, setRegistro] = useState();
  const [vistaPrevia, setVistaPrevia] = useState(false);
  const [btnPreviewText, setBtnPreviewText] = useState(
    "Habilitar Vista Previa"
  );
  const [btnPreviewVariant, setBtnPreviewVariant] = useState("success");
  const [imgsPortada, setImgsPortada] = useState([]);
  const [imgsGaleria, setImgsGaleria] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [estado, setEstado] = useState("");
  const [filtro, setFiltro] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getImgsPortada() {
    const urls = [];
    setLoading(true);
    console.log("cargando");
    for (let i = 0; i < registro.cantImgsPortada; i++) {
      urls.push(
        "http://localhost:8080/images/portada/" + registro.idPatente + "/" + i
      );
    }

    async function fetchImagenes() {
      const promesas = urls.map((url) =>
        fetch(url).then((respuesta) => respuesta.blob())
      );
      const blobs = await Promise.all(promesas);
      setImgsPortada(blobs);
      setLoading(false);
      console.log("listo");
    }
    fetchImagenes();
  }

  function getImgsRegulares() {
    const urls = [];
    setLoading(true);
    console.log("cargando");
    for (let i = 0; i < registro.cantImgsGaleria; i++) {
      urls.push(
        "http://localhost:8080/images/galeria/" + registro.idPatente + "/" + i
      );
    }

    async function fetchImagenes() {
      const promesas = urls.map((url) =>
        fetch(url).then((respuesta) => respuesta.blob())
      );
      const blobs = await Promise.all(promesas);
      setImgsGaleria(blobs);
      setLoading(false);
      console.log("listo");
    }
    fetchImagenes();
  }

  function verDeclaracion(id) {
    const registroAux = registrosPatentes.find((d) => d.idPatente == id);
    setRegistro(registroAux);
    document.getElementById("detalles").scrollIntoView();

    setVistaPrevia(false);
    setBtnPreviewText("Habilitar Vista Previa");
    setBtnPreviewVariant("success");
    // setImgsPortada(getImgsPortada());
  }

  function handlePreview() {
    // getImgsPortada();
    vistaPrevia ? setVistaPrevia(false) : setVistaPrevia(true);
    !vistaPrevia ? getImgsPortada() : null;
    !vistaPrevia ? getImgsRegulares() : null;
    btnPreviewText == "Habilitar Vista Previa"
      ? setBtnPreviewText("Deshabilitar Vista Previa")
      : setBtnPreviewText("Habilitar Vista Previa");
    btnPreviewVariant == "success"
      ? setBtnPreviewVariant("warning")
      : setBtnPreviewVariant("success");
  }

  function aceptarRegistro() {
    if (!registro) return;
    setIsAccepting(true);
    registro.estado = 2;
    setRegistro(registro);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(registro),
      redirect: "follow",
    };

    //ENVIA EL REGISTRO DE LA PATENTE
    fetch("http://localhost:8080/registro/patente/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getRegistrosPatentes();
        setIsAccepting(false);
      })
      .catch((error) => console.log("error", error));
  }

  function rechazarRegistro() {
    if (!registro) return;

    setShow(true);
    setIsRejecting(true);
    registro.estado = 3;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(registro),
      redirect: "follow",
    };

    //ENVIA EL RECHAZO DE LA PATENTE
    fetch("http://localhost:8080/registro/patente/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getRegistrosPatentes();
        setIsRejecting(false);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getRegistrosPatentes();
  }, []);

  return (
    <div className="">
      <div className="row w-100 ">
      <div className="">
        <InputFiltrar
          filtrarRegistros={filtrarRegistrosPatentes}
        ></InputFiltrar>
      </div>
      </div>

      <div className="col-lg-12 h-[30rem] overflow-auto">
        <Table striped bordered hover className=" text-center ">
          <thead className="sticky top-0 bg-blue-900 bg-opacity-80 text-white">
            <tr className="">
              <th>{"Nombre de la Empresa".toUpperCase()}</th>
              <th>{"Fecha del Registro".toUpperCase()}</th>
              <th>{"Estado".toUpperCase()}</th>
              <th>{"Opciones".toUpperCase()}</th>
            </tr>
          </thead>
          <tbody>
            {registrosPatentes.length > 0 ? (
              registrosPatentes.map((p, i) => (
                <tr key={i}>
                  <td>
                    <span className="font-semibold ">{p.nombre}</span>
                  </td>
                  <td>
                    <span className="font-semibold ">XX/XX/XXXX</span>
                  </td>
                  <td>
                    <span className="font-semibold ">
                      {p.estado == 1
                        ? "Pendiente"
                        : p.estado == 2
                        ? "Aceptado"
                        : p.estado == 3
                        ? "Rechazado"
                        : "Deshabilitado"}
                    </span>
                  </td>

                  <td>
                    <Button
                      variant="primary"
                      className=""
                      onClick={() => verDeclaracion(p.idPatente)}
                    >
                      Ver Detalles
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <div>"No hay nuevos registros"</div>
            )}
          </tbody>
        </Table>
      </div>

      {/* DETALLES */}
      {registro ? (
        <div id="detalles" className="mt-5 mb-44 ">
          <div className="m-auto text-center font-semibold text-3xl mb-4 bg-gray-800 bg-opacity-70 text-white">
            <span className="">Detalles del Registro</span>
          </div>
          <Detalle registro={registro}></Detalle>
          <div className="text-center text-red-500 mb-4">
            <span>
              (*Para ver las imagenes debe Habilitar la vista previa*)
            </span>
          </div>
          <div className="row m-auto">
            <Button
              className="col-sm-6 m-auto"
              variant={loading ? "secondary" : btnPreviewVariant}
              onClick={() => handlePreview()}
            >
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                btnPreviewText
              )}
            </Button>
            <Button
              onClick={() => setShow(true)}
              className="col-sm-2 m-auto"
              variant="danger"
            >
              {isRejecting ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Rechazar Registro"
              )}
            </Button>
            <Button
              onClick={() => aceptarRegistro()}
              className="col-sm-2 m-auto"
            >
              {isAccepting ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Aceptar Registro"
              )}
            </Button>
          </div>
        </div>
      ) : null}

      {/* VISTA PREVIA */}
      {/* style={{ display: !loading ? "block" : "none" }} */}

      <div id="vistaPrevia">
        {registro && vistaPrevia && !loading ? (
          <VistaPrevia
            nombreEmpresa={registro.nombre}
            correo={registro.correo}
            sitioWeb={registro.sitioWeb}
            direccion1={registro.direccion1}
            // direccion2={direccion2}
            // coordenadas={coordenadas}
            telefono1={registro.telefono1}
            telefono2={registro.telefono2}
            // whatsapp={whatsapp}
            facebook={registro.facebook}
            instagram={registro.instagram}
            descripcion={registro.descripcion}
            palabrasClave={registro.palabrasClaves}
            imgsPortada={imgsPortada}
            imgsRegulares={imgsGaleria}
          ></VistaPrevia>
        ) : null}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Razon del rechazo del registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Remitente:</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={"muni.sarchi.patentes@gmail.com"}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Destinatario:</Form.Label>
              <Form.Control
                type="email"
                placeholder={registro ? registro.correo : "Digite el correo"}
                value={registro ? registro.correo : ""}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observaciones y Razon del rechazo:</Form.Label>
              <Form.Control as="textarea" rows={3} autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              rechazarRegistro();
              handleClose();
            }}
          >
            {isRejecting ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Enviar"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
