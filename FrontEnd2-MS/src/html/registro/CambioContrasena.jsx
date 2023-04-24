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





export default function OlvidasteContra({ setUsuario }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [email, setEmailInput] = useState("");
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

 

    navigate("/profile");
    return;
  }

  return (
    
    
    <div className="bg-gradient-to-r from-sky-800 via-cyan-600 to-sky-800 h-screen">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
          <MDBCol col="12" cl>
            <MDBCard
              className="bg-blue-700 bg-opacity-95 text-white my-5  mx-auto shadow-2xl"
              style={{
                borderRadius: "1rem",
                maxWidth: "400px",
                backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity))"
              }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">
                  Recuperacion de 
                  Contraseña
                </h2>
                <p className="">Por favor ingrese su correo electronico</p>

                <MDBInput
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="bg-dark text-white"
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label=""
                  id="formControlLg"
                  type="email"
                  size="lg"
                  placeholder="Correo Electronico"
                />

          
                <Button
                  variant="outline-primary"
                  type="submit"
                  outline={true}
                  className="mx-2 px-5 text-white"
                  color="white"
                  size="lg"
                  onClick={(e) => handleSubmit(e)}
                >
                  Siguiente
                </Button>

                <div className="text-center">
                  <p className="mb-0">
                    Desea Volver Atrás?{" "}
                    <a href="/" className="text-white fw-bold text-2xl hover:bg-sky-700 no-underline rounded-md">
                    <br />
                      Regresar
                    </a>
                  </p>
                </div>
            
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
