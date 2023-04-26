import React, { useEffect, useState, ReactDOM } from "react";
import { Button } from "react-bootstrap";
import { ModalCambiarFotoPerfil } from "../components/ModalCambiarFotoPerfil";
import { NavLink, useNavigate } from "react-router-dom";

//https://mdbootstrap.com/docs/standard/extended/profiles/

export default function Profile({ usuario }) {
  const navigate = useNavigate();
  const [name, setName] = useState(usuario.nombre);
  const [fullName, setFullName] = useState(usuario.nombre);
  const [email, setEmail] = useState(usuario.correo);
  const [phone, setPhone] = useState(usuario.telefono);
  const [cedula, setCedula] = useState(usuario.cedula);
  const [address, setAddress] = useState(usuario.direccion);
  const [isDisabled, setIsDisabled] = useState(true);
  const [profileImgUrl, setprofileImgUrl] = useState("");

  const fetchImage = async () => {
    const response = await fetch(
      "http://localhost:8080/imgs/perfil/" + usuario.usuario
    );
    if (!response.ok) {
      console.log("error");
      return;
    }
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setprofileImgUrl(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div id="1" className="mb-24">
      <section className="bg-red">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={
                      profileImgUrl
                        ? profileImgUrl
                        : "src/assets/default_profile.png"
                    }
                    alt="avatar"
                    className="rounded-square img-fluid m-auto rounded"
                    style={{ width: "150px" }}
                  ></img>
                  <ModalCambiarFotoPerfil
                    url={profileImgUrl}
                    setprofileImgUrl={setprofileImgUrl}
                  />
                  <h5 className="my-3">{name}</h5>
                  <p className="text-muted mb-1">{usuario.telefono}</p>
                  <p className="text-muted mb-4">{usuario.correo}</p>
                  <div className="d-flex justify-content-center mb-2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Nombre</p>
                    </div>
                    <div className="col-sm-9">
                      <input
                        id="i-1"
                        type="text"
                        onChange={(event) => setFullName(event.target.value)}
                        className="text-muted mb-0 w-full inp"
                        value={fullName}
                        disabled={isDisabled}
                      ></input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Cedula</p>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        onChange={(event) => setCedula(event.target.value)}
                        className="text-muted mb-0 w-full inp"
                        value={cedula}
                        disabled={isDisabled}
                      ></input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3 ">
                      <p className="mb-0">Correo</p>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        className="text-muted mb-0 w-full inp"
                        value={email}
                        disabled={isDisabled}
                      ></input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Telefono</p>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        onChange={(event) => setPhone(event.target.value)}
                        className="text-muted mb-0 w-full inp"
                        value={phone}
                        disabled={isDisabled}
                      ></input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Direccion</p>
                    </div>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        onChange={(event) => setAddress(event.target.value)}
                        className="text-muted mb-0 w-full inp"
                        value={address}
                        disabled={isDisabled}
                      ></input>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row m-auto text-center">
                    {usuario && usuario.usuario.rol == 1 ? (
                      <div className="col-sm-4 m-auto">
                        <Button variant="success">
                          <NavLink
                            className="no-underline m-auto text-white"
                            to={"/patentes"}
                          >
                            <h1 className="text-base">Ver mis patentes</h1>
                          </NavLink>
                        </Button>
                      </div>
                    ) : null}

                    {/* <div className="col-sm-2"></div> */}
                    {/* <div className="col-sm-6">
                      <Button
                        onClick={() => setIsDisabled(false)}
                        variant="primary"
                        className="mr-10"
                      >
                        Editar perfil
                      </Button>

                      <Button
                        onClick={() => setIsDisabled(true)}
                        disabled={isDisabled}
                        variant="secondary"
                        className="m-auto"
                      >
                        Guardar
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="m-auto text-center"></div>

      <div></div>
    </div>
  );
}

// {usuario.usuario.rol != 2 ? (
//   <div className="container h-100 mb-20">
//     <div className="row m-auto text-center text-3xl font-semibold">
//       <span className="border-t-2 border-b-2 border-double border-white bg-green-600 text-white">
//         Mis Patentes
//       </span>
//     </div>
//     <div className="row m-auto h-[75%] w-100 border-black border-2">
//       {patentes
//         ? patentes.map((patente) => (
//             <div
//               key={patente.id}
//               className="col-lg-4  h-100 mt-4 border-b-2 border-gray-700"
//             >
//               <ImageAndTextExample
//                 patente={patente}
//               ></ImageAndTextExample>
//               {patente.estado == 0 ? (
//                 <>
//                   <div className="m-auto text-center w-100">
//                     <Button
//                       disabled
//                       className="w-[16rem] m-2"
//                       variant="secondary"
//                     >
//                       <NavLink
//                         className="no-underline m-auto text-white"
//                         to={"/directorio/" + patente.id}
//                       >
//                         <h1 className="text-base">En Revision</h1>
//                       </NavLink>
//                     </Button>
//                   </div>
//                   {/* <div className="m-auto text-center">
//               <Button className="w-[16rem] m-2">
//                 <NavLink
//                   className="no-underline m-auto text-white"
//                   to={"/cargar/" + patente.id}
//                 >
//                   <h1 className="text-base">
//                     Realizar Declaracion Jurada
//                   </h1>
//                 </NavLink>
//               </Button>
//             </div> */}
//                 </>
//               ) : patente.estado == 1 ? (
//                 <div className="m-auto text-center w-100">
//                   <Button
//                     // onClick={}
//                     className="w-[16rem] m-2 text-center"
//                     variant="secondary"
//                   >
//                     <BsEyeSlashFill className="m-auto"></BsEyeSlashFill>
//                   </Button>
//                   <Button
//                     onClick={() =>
//                       navigate("/directorio/" + patente.idPatente, {
//                         state: { patente: "1" },
//                       })
//                     }
//                     className="w-[16rem] m-2"
//                     variant="success"
//                   >
//                     <h1 className="text-base">Editar Directorio</h1>
//                   </Button>
//                 </div>
//               ) : patente.estado == 2 ? (
//                 <div className="m-auto text-center w-100">
//                   <>
//                     <div className="top-0 z-10 h-6 border-2 border-black absolute w-7 bg-black"></div>
//                     {/* <span className="font-semibold text-red-600">Este registro ha sido rechazado</span> */}
//                     <Button
//                       onClick={() =>
//                         navigate("/directorio/" + patente.idPatente, {
//                           state: { patente: "1" },
//                         })
//                       }
//                       className="w-[16rem] m-2"
//                       variant="success"
//                     >
//                       <h1 className="text-base">Ver</h1>
//                     </Button>
//                     <Button className="w-[16rem] m-2" variant="danger">
//                       <NavLink
//                         className="no-underline m-auto text-white"
//                         to={"/editarDirectorio/" + patente.id}
//                       >
//                         <h1 className="text-base">Eliminar</h1>
//                       </NavLink>
//                     </Button>
//                   </>
//                 </div>
//               ) : null}
//             </div>
//           ))
//         : null}
//       <>
//         <div className="row m-auto text-center mt-4 mb-4">
//           <div className="col-lg-6 m-auto">
//             <Button
//               onClick={() => {
//                 ReactDOM.createRoot(
//                   document.getElementById("root")
//                 ).render(<>holaaaa</>);
//               }}
//               className=""
//             >
//               <h1 className="text-base">Agregar Patente al Directorio</h1>
//             </Button>
//           </div>
//           <div id="2"></div>
//         </div>
//       </>
//     </div>
//   </div>
// ) : null}
