import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const style = {
  color: "black",
  fontSize: "3.5em",
};

function NavigationBarAdmin() {
  return (
    <div id="container">
      <Navbar
        //bg-[url('./assets/curls.png')]
        className="h-[5rem] bg-[url('./assets/curls.png')] bg-center w-100 bg-cover rounded-xl font-bold bg-opacity-10"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        // style={{marginTop:"-70px"}}
        //style={{backgroundImage: `url('src\assets\curls.png')`}}
      >
        <Container className="bg-cover h-100 rounded-xl font-bold bg-gray-400 bg-opacity-60">
          <Navbar.Brand className="text-black" href="#home">
            Municipalidad de Sarchi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link to="/" href="#features">Inicio</Nav.Link> */}
              {/* <NavLink className="no-underline m-auto" to="/">
                <AiFillHome color="black" size={30}></AiFillHome>
              </NavLink> */}
              {/* <NavLink className="no-underline m-auto" to="/registroSistema" >Registro Sistema</NavLink> */}
              {/* <NavLink className="text-black no-underline m-auto" to="/registroDirectorio" >Registro Directorio</NavLink>  */}
              {/* <NavLink to="#pricing">Pricing</NavLink>  */}
              <NavDropdown title="Acciones" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    className="text-black no-underline m-auto"
                    to="/verificaciones"
                  >
                    Listar Registros de patentados
                  </NavLink>{" "}
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <NavLink
                    className="text-black no-underline m-auto"
                    to="/registrosPatentes"
                  >
                    Listar Registros de patentes
                  </NavLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    className="text-black no-underline m-auto"
                    to="/declaraciones"
                  >
                    Listar declaraciones
                  </NavLink>{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                title={<BiUserCircle style={style}></BiUserCircle>}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink className="no-underline" to="/profile">Ver perfil</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="CambiarContrasena">
                  Cambiar contrasena
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="no-underline" to="/login">Cerrar Sesion</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBarAdmin;
