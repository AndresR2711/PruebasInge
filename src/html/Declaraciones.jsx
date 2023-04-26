import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaPencilAlt } from "react-icons/fa";
import {HiOutlineDownload,HiOutlineEye} from "react-icons/hi";
import { decl } from "postcss";

const declaracionesData = [
  {
    id: 1,
    estado: 1,
    numDeclaracion: "34522",
    nombreEmpresa: "Muebleria Sarchi",
    cedJuridica: "2345950301",
    patentado: { nombre: "Freddy Mora" },
    documentos: ["declaracion_jurada.pdf"],
    respuesta: "",
    descripcion: "",
  },
  {
    id: 2,
    estado: 1,
    numDeclaracion: "12321",
    nombreEmpresa: "Muebleria Salazar",
    cedJuridica: "03888123",
    patentado: { nombre: "Leonardo Salazar" },
    documentos: ["declaracion_jurada.pdf"],
    respuesta: "",
    descripcion: "",
  },
  {
    id: 3,
    estado: 1,
    numDeclaracion: "79936",
    nombreEmpresa: "Rest Los Ranchos",
    cedJuridica: "224240872",
    patentado: { nombre: "Gerardo Rivera" },
    documentos: ["declaracion_jurada.pdf"],
    respuesta: "",
    descripcion: "",
  },
  {
    id: 4,
    estado: 1,
    numDeclaracion: "56342",
    nombreEmpresa: "Rivera's Sport Bar",
    cedJuridica: "735351736",
    patentado: { nombre: "Gerardo Rivera" },
    documentos: ["declaracion_jurada.pdf","declaracion_jurada.pdf22222222222222222222222222222222222222222222222222222222222222222222222222"],
    respuesta: "",
    descripcion: "",
  },
  {
    id: 5,
    estado: 1,
    numDeclaracion: "56342",
    nombreEmpresa: "Rivera's Sport Bar",
    cedJuridica: "735351736",
    patentado: { nombre: "Gerardo Rivera" },
    documentos: ["declaracion_jurada.pdf","declaracion_jurada2.pdf","declaracion_jurada.pdf","declaracion_jurada2.pdf","declaracion_jurada.pdf","declaracion_jurada2.pdf"],
    respuesta: "",
    descripcion: "",
  },
];

export default function Declaraciones() {
  const [declaraciones, setDeclaraciones] = useState(declaracionesData);
  const [declaracion, setDeclaracion] = useState();

  function verDeclaracion(id) {
    const declaracionAux = declaraciones.find((d) => d.id == id);
    console.log(declaracionAux);
    setDeclaracion(declaracionAux);
    document.getElementById("detalle").scrollIntoView();
  }

  return (
    <div className=" bg-cover">
      <div className="row w-100 h-100 m-auto">
        <div className="col-lg-6 ">
          <div className="w-96">
            <InputGroup
              //   onChange={(e) => filtrarData(e.target.value)}
              className="m-3 w-96"
            >
              <Form.Control
                placeholder="Filtrar por nombre o cedula"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <select
                //   onChange={(e) => filtrarDataEstado(e.target.value)}
                className="font-bold text-gray-700 text-center"
              >
                <option value={"Todos"}>Todos</option>
                <option value={"Aceptado"}>Aceptado</option>
                <option value={"Rechazado"}>Rechazado</option>
                <option value={"Pendiente"}>Pendiente</option>
              </select>
            </InputGroup>
          </div>

          {/* Div listado de declaraciones */}
          <div className="overflow-y-auto h-[36rem] w-100 ">
            {console.log(declaraciones)}
            {declaraciones.map((d) => (
              <div
                key={d.id}
                className="w-[100%] m-auto  mt-1 inline-flex bg-white border-b-2 border-gray-500"
              >
                <div className="w-[80%] h-[8rem]">
                  <div>
                    <span className="font-bold">Numero de declaracion: </span>
                    {d.numDeclaracion}
                  </div>
                  <div>
                    <span className="font-bold">Nombre de la Empresa: </span>{" "}
                    {d.nombreEmpresa}
                  </div>
                  <div>
                    <span className="font-bold">Cedula Juridica: </span>{" "}
                    {d.cedJuridica}
                  </div>
                  <div>
                    <span className="font-bold">Patentado: </span>
                    {d.patentado.nombre}
                  </div>
                </div>
                <div className="w-[20%] text-center bg-[url('src/assets/colochos/col5.png')] bg-cover">
                  <Button
                    variant="primary"
                    className="mt-[25%]"
                    onClick={() => verDeclaracion(d.id)}
                  >
                    Ver detalles
                  </Button>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>

        {declaracion ? (
          <>
            {/* Div detalle  declaracion */}
            <div className="col-lg-6 h-100">
              <div id="detalle" className=" w-100 font-bold text-center">
                Detalle de la declaracion #{declaracion.numDeclaracion}
              </div>
              {/* Informacion de la declaracion */}
              <div className=" h-[30rem]">
                <div className="row  ; w-[96%] m-auto">
                  <div className="w-[100%] h-[2rem] text-center bg-[url('src/assets/tripleta.jpg')] bg-cover">
                    <div className="w-100 h-100 bg-gray-900 bg-opacity-70">
                      <div className="w-100 col-sm-4 text-white font-bold text-center text-xl">
                        {declaracion.nombreEmpresa}
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-sm-8">{declaracion.descripcion}</div> */}
                </div>
                <div className="row h-[20rem] w-[96%] m-auto">
                  <div className="col-sm-6 font-bold">
                    <span className="text-center w-100 m-auto">Documentos adjuntados</span>
                    <div className="h-[22rem] overflow-auto">
                      {declaracion.documentos.map((d) => (
                        <div className="border-2 border-gray-600 mb-2 bg-gray-900 h-[4rem] text-white rounded-md w-100 bg-opacity-90 inline-flex">
                          <div className="text-left w-2/3 ml-2  overflow-auto break-words">
                            <span> {d}</span>
                          </div>
                          <div className="inline-flex w-1/3">
                            <div className="text-right w-1/2  text ">
                              <a href={"src/files/" + d} target="_blank" className="">
                                <HiOutlineEye className="inline-flex" color="white" size={25}/>
                              </a>
                            </div>
                            <div className="text-right  w-1/2  inline-flex">
                              <a download={true} href={"src/files/" + d} target="_blank" className="inline-flex">
                                <HiOutlineDownload className="inline-flex" color="white" size={25}/> 
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-sm-6 block">
                    <div className="text-center font-bold text-xl">
                      <span>Estado</span>
                      <Form.Select size="">
                        <option>Pendiente</option>
                        <option>Aceptado</option>
                        <option>Rechazado</option>
                      </Form.Select>
                    </div>
                    <div className="text-center font-bold text-xl">
                      <span>Respuesta</span>
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <FaPencilAlt className="fas prefix h-100" />
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="w-100 text-center">
                      <Button>Enviar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Div detalle  declaracion */}
            <div className="col-lg-6 h-100">
              <div className=" w-100 font-bold text-center">
                Detalle de la declaracion #{"declaracion.numDeclaracion"}
              </div>
              {/* Informacion de la declaracion */}
              <div className=" h-[30rem]">
                <div className="row  h-[10rem] w-[96%] m-auto">
                  <div className="w-[100%] h-[2rem] text-center bg-[url('src/assets/tripleta.jpg')] bg-cover">
                    <div className="w-100 h-100 bg-gray-900 bg-opacity-70">
                      <div className="w-100 col-sm-4 text-white font-bold text-center text-xl">
                        Seleccione una declaracion
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
