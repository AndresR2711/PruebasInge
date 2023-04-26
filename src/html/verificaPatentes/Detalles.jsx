import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { FcNext } from "react-icons/fc";
import { FaTiktok } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import NavigationBar from "../../components/NavBarPatentado";

const style = { color: "blue", fontSize: "1.5em", display: "flex" };

function Detalle({ registro }) {
  let estado = registro.estado
    ? registro.estado == 1
      ? "Pendiente"
      : registro.estado == 2
      ? "Aceptado"
      : registro.estado == 3
      ? "Rechazado"
      : "Deshabilitado"
    : "";
  return (
    <div className=" bg-opacity-20 bg-cover w-[96%] rounded-lg m-auto">
      <div className="w-full m-auto">
        <Form>
          <div className="row mb-2">
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1 ">
                    <span className="font-semibold">Fecha</span>
                  </InputGroup.Text>
                  <Form.Control disabled value={"XX/XX/XXXX"} readOnly />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <span className="font-semibold">Estado</span>
                  </InputGroup.Text>
                  <Form.Control
                    disabled
                    // value={registro.estado ? registro.estado : null}
                    value={estado}
                    readOnly
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <span className="font-semibold">#</span>
                  </InputGroup.Text>
                  <Form.Control
                    disabled
                    value={
                      registro.numeroDeclaracion
                        ? registro.numeroDeclaracion
                        : ""
                    }
                    readOnly
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6 ">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="font-semibold">
                  Nombre de la empresa
                </Form.Label>
                <Form.Control readOnly value={registro.nombre} disabled />
              </Form.Group>
            </div>

            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold">
                  Correo electronico
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={registro.correo ? registro.correo : ""}
                />
              </Form.Group>
            </div>
          </div>

          {/* Addreses */}
          <div className="row mb-2">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="font-semibold">Direccion</Form.Label>
                <Form.Control readOnly disabled value={registro.direccion1} />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold">Direccion 2</Form.Label>
                <Form.Control readOnly value={registro.direccion2} disabled />
              </Form.Group>
            </div>
          </div>

          {/* Phones */}
          <div className="row mb-2">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold">Telefono 1</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsPhone></BsPhone>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    value={registro.telefono1 ? registro.telefono1 : ""}
                    disabled
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold">Telefono 2</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsPhone></BsPhone>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.telefono2 ? registro.telefono2 : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          {/* Social Media */}
          <div className="row mb-2 ">
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <span className="font-semibold">Sitio Web</span>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.sitioWeb ? registro.sitioWeb : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <BsTwitter></BsTwitter>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.twitter ? registro.twitter : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <FaTiktok></FaTiktok>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.tiktok ? registro.tiktok : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsWhatsapp></BsWhatsapp>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.whatsapp ? registro.whatsapp : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsFacebook></BsFacebook>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.facebook ? registro.facebook : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <BsInstagram></BsInstagram>
                  </InputGroup.Text>
                  <Form.Control
                    readOnly
                    disabled
                    value={registro.instagram ? registro.instagram : ""}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <InputGroup>
            <InputGroup.Text>Palabras clave</InputGroup.Text>
            <Form.Control
              readOnly
              disabled
              value={registro.palabrasClaves ? registro.palabrasClaves : ""}
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Descripcion de la empresa</InputGroup.Text>
            <Form.Control
              readOnly
              disabled
              value={registro.descripcion ? registro.descripcion : ""}
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}

export default Detalle;
