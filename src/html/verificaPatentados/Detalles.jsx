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

function DetalleRegistroPatentado({ registro }) {
  return (
    <div className="w-[96%] rounded-lg m-auto">
      <div className="w-full m-auto">
        <Form>
          <div className="row mb-1">
            <div className="col-lg-2">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1 ">
                    <span className="font-semibold">Fecha</span>
                  </InputGroup.Text>
                  <Form.Control disabled value={"XX/XX/XXXX"} />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-2">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <span className="font-semibold">Estado</span>
                  </InputGroup.Text>
                  <Form.Control
                    disabled
                    // value={patente.estado ? patente.estado : null}
                    value={
                      registro.estado == 1
                        ? "Pendiente"
                        : registro.estado == 2
                        ? "Aceptado"
                        : "Rechazado"
                    }
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
                        : null
                    }
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold"></Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1" className="font-semibold">
                    <span className="font-semibold">Nombre</span>
                    {/* <BsPhone></BsPhone> */}
                  </InputGroup.Text>
                  <Form.Control value={registro.nombre} disabled />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-2">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold"></Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1" className="font-semibold">
                    <span className="font-semibold">Cedula</span>
                    {/* <BsPhone></BsPhone> */}
                  </InputGroup.Text>
                  <Form.Control value={registro.cedula} disabled />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold"></Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1" className="font-semibold">
                    <span className="font-semibold">Correo</span>
                    {/* <BsPhone></BsPhone> */}
                  </InputGroup.Text>
                  <Form.Control value={registro.correo} disabled />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold"></Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1" className="font-semibold">
                    <span className="font-semibold">Telefono</span>
                    {/* <BsPhone></BsPhone> */}
                  </InputGroup.Text>
                  <Form.Control value={registro.telefono} disabled />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-semibold"></Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    <span className="font-semibold">Cedula Juridica</span>
                  </InputGroup.Text>
                  <Form.Control value={registro.cedulaJuridica} disabled />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row mb-2"></div>

          <InputGroup>
            <InputGroup.Text>
              <span className="font-semibold">Observaciones</span>
            </InputGroup.Text>
            <Form.Control
              disabled
              value={registro.observaciones ? registro.observaciones : null}
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}

export default DetalleRegistroPatentado;
