import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { FcNext } from "react-icons/fc";
import { FaTiktok } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsPhone, BsWhatsapp, BsYoutube, BsTwitter } from "react-icons/bs";
import NavigationBar from "../../components/NavBarPatentado";

const style = { color: "blue", fontSize: "1.5em", display: "flex" };

function RegistroDirectorio(props) {
  return (
    <div className="container bg-opacity-20 bg-cover w-full rounded-lg">
      <div className="w-full m-auto">
        <Form>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="font-bold">
                  Nombre de la empresa<span className="text-red-600"> *</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre de la empresa"
                  onChange={(e) => props.setnombreEmpresa(e.target.value)}
                  defaultValue={props.nombreEmpresa }
                />
              </Form.Group>
            </div>

            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-bold">
                  Correo electronico<span className="text-red-600"> *</span>
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Correo electronico"
                  onChange={(e) => props.setCorreo(e.target.value)}
                  defaultValue={props.correo}
                />
              </Form.Group>
            </div>
          </div>

          {/* Addreses */}
          <div className="row">
            <div className="col-lg-12">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="font-bold">
                  Direccion<span className="text-red-600"> *</span>
                </Form.Label>
                <Form.Control
                  className="border-double border-black border-x-4"
                  required
                  type="text"
                  placeholder="Direccion de la empresa"
                  onChange={(e) => props.setDireccion(e.target.value)}
                  defaultValue={props.direccion}
                />
              </Form.Group>
            </div>
            {/* <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-bold">Direccion 2</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Department "
                  onChange={(e) => props.setDireccion(e.target.value)}
                  defaultValue={ props.direccion }
                />
              </Form.Group>
            </div> */}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="font-bold">
                  Sitio web de la empresa
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Sitio web de la empresa"
                  onChange={(e) => props.setSitioWeb(e.target.value)}
                  defaultValue={props.sitioWeb }
                />
              </Form.Group>
            </div>
          </div>

          {/* Phones */}
          <div className="row">
            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-bold">
                  Telefono 1<span className="text-red-600"> *</span>
                </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsPhone></BsPhone>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Telefono 1"
                    aria-label="Telefono1"
                    aria-describedby="basic-addon1"
                    type="number"
                    onChange={(e) => props.setTelefono1(e.target.value)}
                    defaultValue={ props.telefono1 }
                    required
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-6">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="font-bold">Telefono 2</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsPhone></BsPhone>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Telefono 2"
                    aria-label="Telefono1"
                    aria-describedby="basic-addon1"
                    onChange={(e) => props.setTelefono2(e.target.value)}
                    type="number"
                    defaultValue={ props.telefono2 }
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 font-bold">
              <InputGroup className="mb-3 font-bold">
                <Form.Control
                  value={"Categoria a la que pertenece y se puede encontrar su empresa:"}
                  disabled
                />
              </InputGroup>
            </div>
            <div className="col-lg-6">
              <>
                <Form.Select onChange={(e)=>{
                    props.setCategoria(e.target.value)
                    console.log(e.target.value)
                  }} >
                  <option value={0} >Seleccione una opcion</option>
                  <option selected={"Bienestar"==props.categoria}>Bienestar</option>
                  <option selected={"Comercio"==props.categoria}>Comercio</option>
                  <option selected={"Automotriz"==props.categoria}>Automotriz</option>
                  <option selected={"Hospedaje"==props.categoria}>Hospedaje</option>
                  <option selected={"Servicios Financieros"==props.categoria}>Servicios Financieros</option>
                  <option selected={"Veterinaria"==props.categoria}>Veterinaria</option>
                  <option selected={"Tecnologia"==props.categoria}>Tecnologia</option>
                  <option selected={"Turismo"==props.categoria}>Turismo</option>
                </Form.Select>
              </>
            </div>
          </div>

          {/* Social Media */}
          <div className="row">
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsWhatsapp></BsWhatsapp>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Whatsapp"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setWhatsapp(e.target.value)}
                    required
                    defaultValue={ props.whatsapp }
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsFacebook></BsFacebook>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Facebook"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setFacebook(e.target.value)}
                    defaultValue={ props.facebook }
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsInstagram></BsInstagram>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Instagram"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setInstagram(e.target.value)}
                    defaultValue={ props.instagram }
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsTwitter></BsTwitter>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Twitter"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setTwitter(e.target.value)}
                    required
                    defaultValue={ props.twitter }
                  />
                </InputGroup>
              </Form.Group>
            </div>

            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <BsYoutube></BsYoutube>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Youtube"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setYoutube(e.target.value)}
                    defaultValue={ props.youtube }
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group as={Col} controlId="formGridPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaTiktok ></FaTiktok>
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Url de Tiktok"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(e) => props.setTiktok(e.target.value)}
                    defaultValue={ props.tiktok }
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <InputGroup>
            <InputGroup.Text>Palabras clave</InputGroup.Text>
            <Form.Control
              defaultValue={ props.palabrasClave }
              onChange={(e) => props.setPalabrasClave(e.target.value)}
              required
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>Descripcion de la empresa</InputGroup.Text>
            <Form.Control
              defaultValue={ props.descripcion }
              onChange={(e) => props.setDescripcion(e.target.value)}
              required
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Form>
      </div>
    </div>
  );
}

export default RegistroDirectorio;
