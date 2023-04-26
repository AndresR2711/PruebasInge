let patentado={
    id: 1,
    nombre: "3101500042 SOCIEDAD ANONIMA",
    // apellidos: "Barrantes Castro",
    cedula: "208260483",
    telefono: "62088253",
    direccion: "50 mts Sur Escuela Calle San Miguel",
    email: "ale13bc@outlook.com",
    estado: 1,
    usuario: { usuario: "3101500042", contrasenna: 12345, rol:1 },
    patentes: [
      {
        id:1,
        nombreEmpresa: "Super Pan",
        telefonoEmpresa: "12345678",
        direccionEmpresa: "1234 Calle Sn Miguel",
      },
      {
        id:2,
        nombreEmpresa: "Muebleria Xallachi",
        telefonoEmpresa: "12345678",
        direccionEmpresa: "1234 Calle Sn Miguel",
      }
      ,
      {
        id:3,
        nombreEmpresa: "Pulperia La Esperanza",
        telefonoEmpresa: "12345678",
        direccionEmpresa: "1234 Calle Sn Miguel",
      }
      ,
      {
        id:4,
        nombreEmpresa: "Carniceria SC",
        telefonoEmpresa: "12345678",
        direccionEmpresa: "1234 Calle Sn Miguel",
      },
    ],
  }






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




  const data = [
    {
      id: 1,
      nombre: "Alejandro",
      apellidos: "Barrantes Castro",
      cedula: "208260483",
      telefono: "62088253",
      nombreEmpresa: "Super Pan",
      telefonoEmpresa: "12345678",
      direccionEmpresa: "1234 Calle Sn Miguel",
      estado: "1",
    },
    {
      id: 2,
      nombre: "Freddy",
      apellidos: "Mora Castro",
      cedula: "90876520",
      telefono: "24544586",
      nombreEmpresa: "Fabrica De Sillas y Mecedoras Sarchi",
      telefonoEmpresa: "24544586",
      direccionEmpresa: "20727, Provincia de Alajuela, Sarchí",
      estado: "2",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellidos: "Rodriguez Bonilla",
      cedula: "23458102",
      telefono: "62328141",
      nombreEmpresa: "Muebles Modernos Sarchi",
      telefonoEmpresa: "62328141",
      direccionEmpresa: "2012, Provincia de Alajuela, Sarchí, 2012",
      estado: "1",
    },
    {
      id: 4,
      nombre: "Antonio",
      apellidos: "Solis Rivera",
      cedula: "10103245",
      telefono: "24543110",
      nombreEmpresa: "Centro de carnes S&D",
      telefonoEmpresa: "24543110",
      direccionEmpresa: "3MR2+395, C. 4, Provincia de Alajuela, Sarchí",
      estado: "3",
    },
    {
      id: 5,
      nombre: "Ramon",
      apellidos: "Mendez Vargas",
      cedula: "78532190",
      telefono: "24544010",
      nombreEmpresa: "CAZA Maquinaria Industrial S.A.",
      telefonoEmpresa: "24544010",
      direccionEmpresa: "3MQ3+GHG, Provincia de Alajuela, Sarchí",
      estado: "1",
    },
    {
      id: 6,
      nombre: "Sebastian",
      apellidos: "Alfaro Zamora",
      cedula: "345620983",
      telefono: "83461414",
      nombreEmpresa: "Bodega Equipos GyB",
      telefonoEmpresa: "83461414",
      direccionEmpresa:
        "3MP4+8V4, C. Bajo del Trapiche, Sarchí Sur, Provincia de Alajuela, Sarchí",
      estado: "1",
    },
    {
      id: 6,
      nombre: "Sebastian",
      apellidos: "Alfaro Zamora",
      cedula: "345620983",
      telefono: "83461414",
      nombreEmpresa: "Bodega Equipos GyB",
      telefonoEmpresa: "83461414",
      direccionEmpresa:
        "3MP4+8V4, C. Bajo del Trapiche, Sarchí Sur, Provincia de Alajuela, Sarchí",
      estado: "1",
    },
    {
      id: 6,
      nombre: "Sebastian",
      apellidos: "Alfaro Zamora",
      cedula: "345620983",
      telefono: "83461414",
      nombreEmpresa: "Bodega Equipos GyB",
      telefonoEmpresa: "83461414",
      direccionEmpresa:
        "3MP4+8V4, C. Bajo del Trapiche, Sarchí Sur, Provincia de Alajuela, Sarchí",
      estado: "1",
    },
    {
      id: 6,
      nombre: "Sebastian",
      apellidos: "Alfaro Zamora",
      cedula: "345620983",
      telefono: "83461414",
      nombreEmpresa: "Bodega Equipos GyB",
      telefonoEmpresa: "83461414",
      direccionEmpresa:
        "3MP4+8V4, C. Bajo del Trapiche, Sarchí Sur, Provincia de Alajuela, Sarchí",
      estado: "1",
    }
  ];
  


  const data2 = [
    {
      id: 1,
      nombre: "Alberto",
      apellidos: "Mora Bogantes",
      cedula: "208260483",
      telefono: "62088253",
      correo: "alberto.mora.bog@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 2,
      nombre: "Freddy",
      apellidos: "Mora Castro",
      cedula: "90876520",
      telefono: "24544586",
      correo: "freddy.mora12@gmail.com",
      estado: 2,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 3,
      nombre: "Carlos",
      apellidos: "Rodriguez Bonilla",
      cedula: "23458102",
      telefono: "62328141",
      correo: "MueblesModernosSarchi@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 4,
      nombre: "Antonio",
      apellidos: "Solis Rivera",
      cedula: "10103245",
      telefono: "24543110",
      correo: "solriveraant@gmail.com",
      estado: 3,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 5,
      nombre: "Ramon",
      apellidos: "Mendez Vargas",
      cedula: "78532190",
      telefono: "24544010",
      correo: "ramon.mv@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 6,
      nombre: "Carlos",
      apellidos: "Rojas Chavez",
      cedula: "345620983",
      telefono: "83461414",
      correo: "bodegaequiposgyb@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 7,
      nombre: "Sebastian",
      apellidos: "Alfaro Zamora",
      cedula: "345620983",
      telefono: "83461414",
      correo: "sebastianalfarozamora@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    },
    {
      id: 8,
      nombre: "Ronald",
      apellidos: "Bonilla",
      cedula: "345620983",
      telefono: "83461414",
      correo: "ron.bonilla@gmail.com",
      estado: 1,
      observaciones: "",
      cedJuridica: "2222",
      imgCedula1: null,
      imgCedula2: null,
      archivoAdjunto: null,
    }
  ];
  