import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import {
  BsFacebook,
  BsFillArchiveFill,
  BsInstagram,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import { useState } from "react";
import NavigationBar from "../../components/NavBarPatentado";
import axios, { isCancel, AxiosError } from "axios";
import { uploadImage } from "../../js/uploadActions";
import Alert from "react-bootstrap/Alert";
import { Footer } from "../../components/Footer";
import { AlertModal } from "../../components/AlertModal";
import SpinnerLoading from "../../components/Spinner";
import { RegistrosContext } from "../../context/Registros";
import { useContext } from "react";

const style = { color: "blue", fontSize: "1.5em", display: "flex" };
let timer; // Timer identifier
const waitTime = 500; // Wait time in milliseconds
//https://stackoverflow.com/questions/39663961/how-do-you-send-images-to-node-js-with-axios

function RegistroSistema({ example }) {
  const [smShow, setSmShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let url = "";
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [cedula1, setCedula1] = useState();
  const [cedula2, setCedula2] = useState();
  const [archivo, setArchivo] = useState();
  const [focusCedula, setFocusCedula] = useState(false);
  const [btnDisabled, setbtnDisabled] = useState(false);
  const [txtExiste, setTxtExiste] = useState("");
  const [title, setTitle] = useState("Campos incompletos");
  const [description, setDescription] = useState(
    "Debe llenar todos los campos del formulario antes de enviarlo"
  );
  const [esJuridica, setEsJuridica] = useState(false);

  const { agregarRegistro } = useContext(RegistrosContext);

  const handleEsJuridica = () => {
    esJuridica ? setEsJuridica(false) : setEsJuridica(true);
  };
  const handleUploadChange1 = (event) => {
    let file = event.target.files[0];
    !file ? setCedula1(false) : setCedula1(file);
  };

  const handleUploadChange2 = (event) => {
    let file = event.target.files[0];
    !file ? setCedula2(false) : setCedula2(file);
  };

  const handleUploadChange3 = (event) => {
    let file = event.target.files[0];
    !file ? setArchivo(false) : setArchivo(file);
  };

  const handleUploadCedula = (cedula) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:8080/registro/registros/" + cedula, requestOptions)
      .then(function (response) {
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error("Not 2xx response", { cause: response });
        } else {
          setSmShow(true);
          setTitle("Registro existente");
          setDescription("Ya existe un registro con esta cedula");
          setFocusCedula(true);
          setbtnDisabled(true);
          setTxtExiste("Ya existe un registro con esta cedula");
        }
      })
      .catch(function (err) {
        console.log("no existe");
        setFocusCedula(false);
        setTxtExiste("");
        setbtnDisabled(false);
      });
  };

  function camposLlenos() {
    if (nombre == "" || cedula == "" || correo == "" || telefono == "") {
      return false;
    }
    if (!cedula1 || !cedula2) {
      return false;
    }
    return true;
  }

  const send = (e) => {
    e.preventDefault();
    if (!camposLlenos()) {
      setSmShow(true);
      return;
    }
    setIsLoading(true);

    var formdata = new FormData();
    if (esJuridica) {
      formdata.append("files", archivo, "[PROXY]");
    } else {
      formdata.append("files", cedula1, "cedulaFrontal");
      formdata.append("files", cedula2, "cedulaDetras");
    }

    formdata.append("nombre", nombre);
    formdata.append("apellido", nombre);
    formdata.append("cedula", cedula);
    formdata.append("email", correo);
    formdata.append("telefono", telefono);
    formdata.append("observaciones", observaciones);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://localhost:8000/verificacion/patentado/registro/patentado",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {console.log(result)
        setIsLoading(false);})
      .catch((error) => console.log("error", error));

    return;
    const imageData = new FormData();

    if (!camposLlenos()) {
      setSmShow(true);
      return;
    }

    setIsLoading(true);

    var registro = {
      nombre,
      cedula,
      correo,
      telefono,
      observaciones,
      estado: 1,
    };

    // envia registro
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(registro),
      redirect: "follow",
    };

    fetch("http://localhost:8080/registro/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    //======================================================

    var formdata = new FormData();
    formdata.append("file", cedula1);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/files/cedulaFrontal/" + registro.cedula,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    formdata = new FormData();
    formdata.append("file", cedula2);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/files/cedulaDetras/" + registro.cedula,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="">
      <AlertModal
        title={title}
        description={description}
        smShow={smShow}
        setSmShow={setSmShow}
      ></AlertModal>
      <div className="bg-contain bg-repeat bg-[url('src/assets/tripleta.jpg')]  bg-opacity-30 m-0 bg-local ">
        <div className="">
          <div className="row h-4 w-100 "></div>
          <div className="row z-10 relative col-lg-8 bg-opacity-80  m-auto  bg-gray-900  mb-10 rounded-md ">
            <div className="col-lg-12 m-auto h-100 text-white inline-flex font-normal text-xl text-start">
              <div className="m-auto h-100 w-100 inline-flex ">
                <div className="w-100 m-auto">
                  <Form method="#">
                    <div className="row mb-3 mt-3">
                      <div className="col-lg-6">
                        <Form.Group as={Col} controlId="formGridName">
                          <Form.Label>
                            <span>Nombre del patentado</span>
                            <span className="text-red-600"> *</span>
                          </Form.Label>
                          <Form.Control
                            autoFocus
                            required
                            type="text"
                            placeholder="Nombre del patentado"
                            style={{ backgroundColor: "transparent" }}
                            className="text-white"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </Form.Group>
                      </div>

                      <div className="col-lg-6">
                        <Form.Group as={Col} controlId="formGridId">
                          <Form.Label>
                            Cedula personal/juridica
                            <span className="text-red-600"> * </span>
                          </Form.Label>
                          <Form.Control
                            autoFocus={focusCedula}
                            required
                            type="number"
                            placeholder="Cedula"
                            style={{ backgroundColor: "transparent" }}
                            className="text-white"
                            value={cedula}
                            onChange={(e) => {
                              setCedula(e.target.value);
                              handleUploadCedula(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    {txtExiste ? (
                      <div className="row mb-2">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                          <span className="font-semibold text-red-600">
                            {txtExiste}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    <div className="row mb-3">
                      <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                        <Form.Group>
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="La cedula es juridica"
                            onChange={(e) => {
                              handleEsJuridica();
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    {/* Addreses */}
                    <div className="row">
                      <div className="col-lg-6 ">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>
                            Correo electronico
                            <span className="text-red-600"> *</span>
                          </Form.Label>
                          <Form.Control
                            className="border-double border-black border-x-4 text-white"
                            required
                            type="email"
                            placeholder="Correo electronico"
                            style={{ backgroundColor: "transparent" }}
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                          />
                        </Form.Group>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>
                            Telefono
                            <span className="text-red-600"> *</span>
                          </Form.Label>
                          <InputGroup
                            className="mb-3"
                            style={{ backgroundColor: "transparent" }}
                          >
                            <InputGroup.Text
                              id="basic-addon1"
                              style={{ backgroundColor: "transparent" }}
                            >
                              <BsPhone color="white"></BsPhone>
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="Telefono personal"
                              aria-label="Telefono1"
                              aria-describedby="basic-addon1"
                              type="number"
                              required
                              style={{
                                backgroundColor: "transparent",
                                color: "white",
                                font: "bold",
                              }}
                              className="text-white placeholder-white font-bold"
                              value={telefono}
                              onChange={(e) => setTelefono(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    {/* OBSERVACIONES */}
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>Observaciones</Form.Label>
                          <InputGroup
                            className="mb-3"
                            style={{ backgroundColor: "transparent" }}
                          >
                            <InputGroup.Text
                              id="basic-addon1"
                              style={{ backgroundColor: "transparent" }}
                            ></InputGroup.Text>
                            <Form.Control
                              placeholder="Observaciones"
                              aria-label="observaciones"
                              aria-describedby="basic-addon1"
                              type="text"
                              required
                              style={{
                                backgroundColor: "transparent",
                                color: "white",
                                font: "bold",
                              }}
                              className="text-white placeholder-white font-bold"
                              value={observaciones}
                              onChange={(e) => setObservaciones(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </div>

                      {/* Phones */}
                    </div>

                    {!esJuridica ? (
                      <>
                        <div className="mb-3">
                          <p className="text-center font-normal mb-4">
                            Imagen frontal de su cédula:
                            <span className="text-red-600"> *</span>
                          </p>
                          <input
                            className="form-control d-lg-flex justify-content-lg-center bg-[var(--bs-light)] text-white"
                            type="file"
                            name="Imagen de su cédula"
                            multiple=""
                            accept="image/*"
                            id="img-cedula"
                            required
                            onChange={handleUploadChange1}
                            style={{ backgroundColor: "transparent" }}
                          ></input>
                        </div>
                        <div className="mb-3">
                          <p className="text-center font-normal mb-4">
                            Imagen trasera de su cédula:
                            <span className="text-red-600"> *</span>
                          </p>
                          <input
                            className="form-control d-lg-flex justify-content-lg-center bg-[var(--bs-light)] text-white"
                            type="file"
                            name="Imagen de su cédula"
                            multiple=""
                            accept="image/*"
                            id="img-cedula"
                            required
                            onChange={handleUploadChange2}
                            style={{ backgroundColor: "transparent" }}
                          ></input>
                        </div>
                      </>
                    ) : (
                      <div className="mb-3">
                        <p className="text-center font-normal mb-4">
                          Adjunte el documento de la cedula juridica
                          <span className="text-red-600"> *</span>
                        </p>
                        <input
                          className="form-control d-lg-flex justify-content-lg-center bg-[var(--bs-light)] text-white"
                          type="file"
                          name="Archivos necesarios"
                          // multiple
                          accept="application/pdf"
                          id="img-cedula"
                          required
                          onChange={handleUploadChange3}
                          style={{ backgroundColor: "transparent" }}
                        ></input>
                      </div>
                    )}

                    <div className="text-right mb-4">
                      <Button variant="link">
                        <a href="/" className="no-underline text-white">
                          Regresar
                        </a>
                      </Button>
                      <Button
                        disabled={btnDisabled}
                        onClick={(e) => send(e)}
                        className="mt-8 m-auto"
                        variant="primary"
                        type="submit"
                      >
                        Enviar Formulario
                      </Button>
                    </div>
                    <Alert
                      show={show}
                      variant="primary"
                      onClose={() => setShow(false)}
                      dismissible
                    >
                      <Alert.Heading>Datos enviados</Alert.Heading>
                      <p>Datos enviados</p>
                    </Alert>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row h-44"></div>
        <div
          style={{ display: isLoading ? "table" : "none" }}
          className="bg-cover bg-slate-600 absolute z-10 h-100 w-100 top-0 left-0 bg-opacity-50"
        >
          <div className="table-cell align-middle text-center">
            <SpinnerLoading></SpinnerLoading>
          </div>
        </div>
        {/* <Footer>

      </Footer> */}
      </div>
    </div>
  );
}

export default RegistroSistema;

/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */
