import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { ImageContext } from "../../context/ImageContext";
import InputFiltrar from "../../components/InputFiltrar";
import TableRowUser from "../../components/TableRow";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { RegistrosContext } from "../../context/Registros";
import DetalleRegistroPatentado from "./Detalles";
import ScrollButton from "../../components/ScrollButton";
import ToastStart from "../../components/Toast";
import { RViewer, RViewerTrigger } from "react-viewerjs";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

export default function Verificaciones({}) {
  const {
    registrosPatentados,
    getRegistrosPatentados,
    filtrarRegistrosPatentados,
  } = useContext(RegistrosContext);
  const { modal } = useContext(ImageContext);
  const [show, setShow] = useState(false);
  const [estado, setEstado] = useState(false);
  const [email, setEmail] = useState("");
  const [registros, setRegistros] = useState();
  const [registro, setRegistro] = useState();
  const [showToast, setShowToast] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [imgsCedulas, setImgsCedulas] = useState([]);
  const [urlsImgsCedulas, setUrlImgsCedulas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getImgsCedulas() {
    // fetch(
    //   "http://localhost:8080/files/cedulaFrontal/" + registro.cedula,
    //   requestOptions
    // )
    //   .then((response) => response.blob())
    //   .then((result) => setCedula1(result))
    //   .catch((error) => console.log("error", error));

    // fetch(
    //   "http://localhost:8080/files/cedulaDetras/" + registro.cedula,
    //   requestOptions
    // )
    //   .then((response) => response.blob())
    //   .then((result) => setCedula2(result))
    //   .catch((error) => console.log("error", error));

    let urls = [];
    urls.push("http://localhost:8080/files/cedulaFrontal/" + registro.cedula);
    urls.push("http://localhost:8080/files/cedulaDetras/" + registro.cedula);

    async function fetchImagenesCedula() {
      const promesas = urls.map((url) =>
        fetch(url, requestOptions).then((respuesta) => respuesta.blob())
      );
      const blobs = await Promise.all(promesas);
      console.log(blobs);
      setImgsCedulas(blobs);
      setUrlImgsCedulas(imgsCedulas.map((blob) => URL.createObjectURL(blob)));
      setLoading(false);
      console.log("listo");
    }
    fetchImagenesCedula();
  }

  useEffect(() => {
    getRegistrosPatentados();
  }, []);

  useEffect(() => {
    registro ? getImgsCedulas() : null;
  }, [registro]);

  function verRegistro(cedula) {
    const registroAux = registrosPatentados.find((r) => r.cedula == cedula);
    setRegistro(registroAux);
    document.getElementById("detalles").scrollIntoView();
  }

  function rechazar() {
    // setEmail(registro.correo);
    // handleShow();

    if (!registro) return;

    // setShow(true)
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
    fetch("http://localhost:8080/registro/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getRegistrosPatentados();
        setIsRejecting(false);
        setTitulo("Proceso exitoso");
        setTexto("El registro ha sido rechazado con exito");
        setShowToast(true);
        // document.getElementById("container").scrollIntoView()
        setRegistro(null);
      })
      .catch((error) => console.log("error", error));
  }

  function aceptar() {
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
    fetch("http://localhost:8080/registro/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getRegistrosPatentados();
        setIsAccepting(false);
        setTitulo("Proceso exitoso");
        setTexto("El registro ha sido aceptado con exito");
        setShowToast(true);
        // document.getElementById("container").scrollIntoView()
        setRegistro(null);
      })
      .catch((error) => console.log("error", error));

    agregarPatentado();
  }

  function agregarPatentado() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      usuario: registro.cedula,
      nombre: registro.nombre,
      cedula: registro.cedula,
      correo: registro.correo,
      telefono: registro.telefono,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/usuario/registrar/patentado", requestOptions)
      .then((response) => response.text())
      .then((result) => {})
      .catch((error) => console.log("error", error));
  }

  return (
    <div id="" className="mr-2 ml-2 h-100">
      <ToastStart
        setShowToast={setShowToast}
        showToast={showToast}
        titulo={titulo}
        descripcion={texto}
      ></ToastStart>
      <div className="">
        <InputFiltrar
          filtrarRegistros={filtrarRegistrosPatentados}
        ></InputFiltrar>
      </div>
      <div className="h-[26rem] overflow-auto">
        <Table striped bordered hover className="overflow-auto text-center">
          <thead className="sticky top-0 bg-blue-900 bg-opacity-80 text-white">
            <tr className="">
              <th>Cedula</th>
              <th>Nombre Completo</th>
              <th>Telefono</th>
              <th>Correo electronico</th>
              <th>Estado</th>
              {/* <th>Archivos adjuntos</th> */}
              {/* <th>Direccion de la empresa</th> */}
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {registrosPatentados
              ? registrosPatentados.map((reg, i) => (
                  <tr className="text-center border-2" key={i}>
                    <TableRowUser
                      key={reg.id}
                      registro={reg}
                      i={i}
                      rechazar={rechazar}
                      estado={estado}
                      verRegistro={verRegistro}
                    ></TableRowUser>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
      {/* <div className="w-full text-center">
        <Button>Guardar</Button>
      </div> */}

      {/* DETALLES */}
      <div id="detalles" className="mt-5 mb-8">
        {registro ? (
          <>
            <div className="m-auto text-center font-semibold text-3xl mb-4 bg-gray-800 bg-opacity-70 text-white">
              <span className="">Detalles del Registro</span>
            </div>
            <DetalleRegistroPatentado
              registro={registro}
            ></DetalleRegistroPatentado>
            <div className="text-center mb-5">
              <span className="text-2xl">Imagenes de la cedula</span>
              <RViewer
                imageUrls={imgsCedulas.map((blob) => URL.createObjectURL(blob))}
              >
                <div className="row h-[2rem]">
                  {imgsCedulas
                    .map((blob) => URL.createObjectURL(blob))
                    .map((img, index) => (
                      <div className="col-lg-6 m-auto h-100">
                        <RViewerTrigger index={index}>
                          {/* <img src={img} className="h-100 w-96 m-auto"></img> */}
                          <Button>Ver Cedula {index==0?"Frontal":"Detras"}</Button>
                        </RViewerTrigger>
                      </div>
                    ))}
                </div>
              </RViewer>
            </div>
            <div className="border-4 border-gray-600 mb-4"></div>
            <div className="row m-auto">
              <Button className="col-sm-2 m-auto" variant="secondary">
                Eliminar Registro
              </Button>
              <Button
                onClick={() => rechazar()}
                className="col-sm-2 m-auto"
                variant="danger"
              >
                Rechazar Registro
              </Button>
              <Button onClick={() => aceptar()} className="col-sm-2 m-auto">
                Aceptar Registro
              </Button>
            </div>
          </>
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
              <Form.Control type="email" placeholder="" value={email} />
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
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
