import React from "react";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Footer } from "../../components/Footer";

export default function Login({ setUsuario }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [usuario, setUsuarioInput] = useState("");
  const [contrasenna, setContrasenna] = useState("");
  const [textoError, setTextoError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      usuario: usuario,
      contrasenna: contrasenna,
      rol: null,
      estado: null,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // fetch("http://localhost:8080/usuario/getUsuario", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     if (!result) {
    //       setTextoError("El usuario no existe");
    //     } else {
    //       setUsuario(JSON.parse(result));
    //       navigate("/profile");
    //     }
    //   })
    //   .catch((error) => console.log("error", error));

    if (usuario == "208260483") {
      setUsuario({
        id: 6,
        nombre: "Alejandro Barrantes",
        apellidos: "",
        cedula: "208260483",
        telefono: "83461414",
        direccion: "Costado de la plaza Sarchi Norte",
        correo: "ale13bc@gmail.com",
        estado: 1,
        usuario: { usuario: 7, contrasenna: "2222", rol: 1 },
      });
    } else {
      setUsuario({
        id: 7,
        nombre: "Municipalidad de Sarchi",
        apellidos: "",
        cedula: "12345678",
        telefono: "83461414",
        direccion: "Costado de la plaza Sarchi Norte",
        email: "muni.sarchi@gmail.com",
        estado: 1,
        usuario: { usuario: 7, contrasenna: "2222", rol: 2 },
      });
    }
    navigate("/profile");
    return;
  }

  return (
    <div className="bg-contain bg-[url('src/assets/tripleta.jpg')] h-screen">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
          <MDBCol col="12">
            <MDBCard
              className="bg-gray-900 bg-opacity-90 text-white my-5  mx-auto"
              style={{
                borderRadius: "1rem",
                maxWidth: "400px",
                backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity))",
              }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">
                  Inicio de Sesión
                </h2>
                <p className="text-white-50 mb-5">Ingrese sus credenciales!</p>

                <MDBInput
                  onChange={(e) => setUsuarioInput(e.target.value)}
                  className="bg-dark text-white"
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label=""
                  id="formControlLg"
                  type="email"
                  size="lg"
                  placeholder="Usuario"
                />
                <MDBInput
                  onChange={(e) => setContrasenna(e.target.value)}
                  className="bg-dark text-white"
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label=""
                  id="formControlPs"
                  type="password"
                  size="lg"
                  placeholder="Contraseña"
                />
                {textoError ? (
                  <span className="text-red-600">{textoError}</span>
                ) : null}
                <p className="small mb-3 pb-lg-2">
                  <a className="text-white-50" href="/Olvidaste">
                    Olvidaste la contraseña?
                  </a>
                </p>
                <Button
                  variant="outline-primary"
                  type="submit"
                  outline={true}
                  className="mx-2 px-5 text-white"
                  color="white"
                  size="lg"
                  onClick={(e) => handleSubmit(e)}
                >
                  Iniciar Sesión
                </Button>

                <div>
                  <p className="mb-0">
                    No tienes cuenta?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Registrate
                    </a>
                  </p>
                </div>
                <div>
                  <a href="/" className="text-white-50 fw-bold">
                    Regresar
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
