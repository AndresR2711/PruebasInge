import React, { useEffect, useState, ReactDOM } from "react";
import { Button } from "react-bootstrap";
import CartaPatente from "../../components/CartaPatente";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEyeSlashFill } from "react-icons/bs";
import "photoswipe/dist/photoswipe.css";
import Spinner from "react-bootstrap/Spinner";
import InformacionDirectorio from "../registroDirectorio/InformacionDirectorio";

export default function MisPatentes({ usuario }) {
  const navigate = useNavigate();
  const [patentes, setPatentes] = useState([]);
  const [patente, setPatente] = useState();
  const [nueva, setNueva] = useState(false);
  const [editar, setEditar] = useState(false);
  const [hide, setHide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [txtError, setTxtError] = useState("");

  function getPatentes() {
    setIsLoading(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

  
    fetch(
      "http://localhost:8000/verificacion/patente/pendientes?cedula=208260483",
      requestOptions
    )
      .then((response) => response.text())
      .then((result)=>JSON.parse(result))
      .then((object) => {
        setPatentes(object);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setPatentes([]);
        setIsLoading(false);
        setTxtError("No se pudieron cargar las patentes");
      });

    return;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/registro/patente/registros/" + usuario.cedula,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((object) => {
        setPatentes(object);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setPatentes([]);
        setIsLoading(false);
        setTxtError("No se pudieron cargar las patentes");
      });
  }

  function eliminar(p) {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/registro/patente/eliminar/" + p.idPatente,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => actualizar())
      .catch((error) => console.log("error", error));
  }
  function actualizar() {
    getPatentes();
  }

  useEffect(() => {
    getPatentes();
  }, []);

  return (
    <div>
      {usuario.usuario.rol != 2 ? (
        <div id="container" className=" h-100">
          <div className="row m-auto text-center text-3xl font-semibold">
            <span className="border-t-2 border-b-2 border-double border-white bg-green-600 text-white">
              Mis Patentes
            </span>
          </div>
          <div className="row m-auto text-center mt-4 mb-4">
            <div className="col-lg-6 m-auto">
              <Button variant="secondary" className="">
                <NavLink
                  className="no-underline m-auto text-white"
                  to={"/profile"}
                >
                  <h1 className="text-base">Regresar al perfil</h1>
                </NavLink>
              </Button>
            </div>
            <div className="col-lg-6 m-auto">
              <Button
                onClick={() => {
                  setPatente(null);
                  setNueva(true);
                  setHide(false);

                  document.getElementById("add").scrollIntoView();
                }}
                className=""
              >
                <h1 className="text-base">Agregar Patente al Directorio</h1>
              </Button>
            </div>

            <div id="2"></div>
          </div>

          {!isLoading ? (
            <div className="container row m-auto h-[75%] w-100 border-t-4 border-gray-700">
              {txtError ? (
                <div className="text-center">
                  <span className="text-red-500">{txtError}</span>
                </div>
              ) : null}
              {patentes.length > 0
                ? patentes.map((p, index) => (
                    <div key={index} className="col-lg-4  h-100 mt-4 ">
                      <CartaPatente patente={p}></CartaPatente>
                      {p.estado == 1 ? (
                        <>
                          <div className="m-auto text-center w-100">
                            <Button
                              disabled
                              className="w-[16rem] m-2"
                              variant="secondary"
                            >
                              <NavLink
                                className="no-underline m-auto text-white"
                                to={"/directorio/" + p.id}
                              >
                                <h1 className="text-base">En Revision</h1>
                              </NavLink>
                            </Button>
                          </div>
                        </>
                      ) : p.estado != "" ? (
                        <div className="m-auto text-center w-100">
                          <Button
                            // onClick={}
                            className="w-[16rem] m-2 text-center"
                            variant="secondary"
                          >
                            <BsEyeSlashFill className="m-auto"></BsEyeSlashFill>
                          </Button>
                          <Button
                            // onClick={()=>navigate("/directorio/"+ p.idp,{state:{p:"1"}})}
                            onClick={() => {
                              setPatente(p);
                              setHide(false);
                              document.getElementById("add").scrollIntoView();
                            }}
                            className="w-[16rem] m-2"
                            variant="success"
                          >
                            <h1 className="text-base">Editar Directorio</h1>
                          </Button>
                        </div>
                      ) : p.estado == 3 ? (
                        <div className="m-auto text-center w-100">
                          <>
                            <div className="top-0 z-10 h-6 border-2 border-black absolute w-7 bg-black"></div>
                            {/* <span className="font-semibold text-red-600">Este registro ha sido rechazado</span> */}
                            <Button
                              onClick={() => {
                                setPatente(p);
                                setNueva(false);
                                setHide(false);
                                document.getElementById("add").scrollIntoView();
                              }}
                              className="w-[16rem] m-2"
                              variant="success"
                            >
                              <h1 className="text-base">Ver</h1>
                            </Button>
                            <Button
                              onClick={() => eliminar(p)}
                              className="w-[16rem] m-2"
                              variant="danger"
                            >
                              <h1 className="text-base">Eliminar</h1>
                            </Button>
                          </>
                        </div>
                      ) : null}
                    </div>
                  ))
                : null}
              <></>
            </div>
          ) : (
            <div className="m-auto text-center font-extrabold text-4xl">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          <div id="add" className="mt-8"></div>
          <div style={{ display: !hide ? "block" : "none" }}>
            {patente || editar ? (
              <div>
                <div className="row h-12 text-center text-3xl font-semibold mb-6 w-full">
                  <span className="border-t-2  bg-gray-600 text-white">
                    {patente.nombre}
                  </span>
                </div>
                <InformacionDirectorio
                  usuario={usuario}
                  patente={patente}
                  cantPatentes={patentes.length}
                  actualizar={actualizar}
                  setHide={setHide}
                  nueva={false}
                ></InformacionDirectorio>
              </div>
            ) : nueva ? (
              <>
                <div>
                  <div className="row h-12 text-center text-3xl font-semibold mb-6 w-full">
                    {nueva ? (
                      <span className="border-t-2  border-white bg-gray-600 text-white">
                        Agregar patente
                      </span>
                    ) : (
                      <span className="border-t-2  bg-gray-600 text-white">
                        {patente.nombre}
                      </span>
                    )}
                  </div>
                  <InformacionDirectorio
                    usuario={usuario}
                    cantPatentes={patentes.length}
                    actualizar={actualizar}
                    setHide={setHide}
                    nueva={true}
                  ></InformacionDirectorio>
                </div>
              </>
            ) : nueva || editar ? (
              <></>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
