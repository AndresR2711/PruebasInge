import React, { useContext, useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Button } from "react-bootstrap";
import { MyGallery } from "../../components/GaleriaPatente";
import { ModalAgregarImagen } from "../../components/ModalAgregarImagen";
import RegistroDirectorio from "./RegistroDirectorio";
import VistaPrevia from "./VistaPrevia";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import {
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { ImageContext } from "../../context/ImageContext";

export default function InformacionDirectorio({
  patente,
  usuario,
  cantPatentes,
  actualizar,
  setHide,
}) {
  console.log(patente)
  const { images, addImage, deleteImage } = useContext(ImageContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(false);
  const [patenteAux, setPatenteAux] = useState();

  //atributos de la patente para el directorio comercial
  const [nombreEmpresa, setnombreEmpresa] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sitioWeb, setSitioWeb] = useState("");
  const [telefono1, setTelefono1] = useState("");
  const [telefono2, setTelefono2] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [palabrasClave, setPalabrasClave] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [imgsPortada, setImgsPortada] = useState([]);
  const [imgsGaleria, setImgsGaleria] = useState([]);

  const [btnText, setBtnText] = useState("Ver vista previa");
  const [txtError, setTxtError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function getImgs() {
    function getImgsPortada() {
      const urls = [];
      setIsLoading(true);
      for (let i = 0; i < patente.cantImgsPortada; i++) {
        urls.push(
          "http://localhost:8080/images/portada/" + patente.idPatente + "/" + i
        );
      }

      async function fetchImagenes() {
        const promesas = urls.map((url) =>
          fetch(url).then((respuesta) => respuesta.blob())
        );
        const blobs = await Promise.all(promesas);
        setImgsPortada(blobs);
        setIsLoading(false);
      }
      fetchImagenes();
    }

    function getImgsRegulares() {
      const urls = [];
      setIsLoading(true);
      for (let i = 0; i < patente.cantImgsGaleria; i++) {
        urls.push(
          "http://localhost:8080/images/galeria/" + patente.idPatente + "/" + i
        );
      }

      async function fetchImagenes() {
        const promesas = urls.map((url) =>
          fetch(url).then((respuesta) => respuesta.blob())
        );
        const blobs = await Promise.all(promesas);

        setImgsGaleria(blobs);
        setIsLoading(false);
      }
      fetchImagenes();
    }
    getImgsPortada();
    getImgsRegulares();
  }

  function guardar() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ubicacion: "Sarchi",
      cedulaJuridica: "213321212121",
      nombreComercial: "juanito perez",
      tipo: "su madre",
      descripcion: "idk",
      sitioWeb: "carritos.com",
      email: "carritodsew22sa23232@gmail.com",
      telefono1: "323232",
      telefono2: "543151243512",
      direccionComercial: "sarchi",
      urlTwitter: "dsd",
      urlFacebook: "ds",
      urlWhatsapp: "sds",
      urlInstagram: "dss",
      coordenadas: "dsd",
      palabrasClave: "dsds",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(usuario.cedula)
    fetch(
      "http://localhost:8000/verificacion/patente/registro/patente?cedula="+usuario.cedula,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

      return
    if (imgsPortada.length < 1) {
      setTxtError("Debe agregar almenos 1 foto de portada");
      handleShow();
      return;
    }
    if (imgsGaleria.length < 1) {
      setTxtError("Debe agregar almenos 1 foto de galeria");
      handleShow();
      return;
    }

    if (categoria == "" || categoria == 0) {
      setTxtError("Seleccione una categoria");
      handleShow();
      return;
    }

    // console.log("pAux",patenteAux);

    // return;
    var idPatente = patenteAux
      ? patenteAux.idPatente
      : usuario.cedula + "_" + cantPatentes;

    var patente = {
      idPatente: idPatente,
      numero: cantPatentes,
      cedulaPatentado: usuario.cedula,
      nombre: nombreEmpresa,
      correo,
      direccion1,
      direccion2,
      sitioWeb,
      telefono1,
      telefono2,
      whatsapp,
      facebook,
      instagram,
      twitter: "",
      palabrasClave,
      descripcion,
      cantImgsPortada: imgsPortada.length,
      cantImgsGaleria: imgsGaleria.length,
      categoria: categoria,
      estado: 1,
    };

    console.log(patente);
    return;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(patente),
      redirect: "follow",
    };

    //ENVIA EL REGISTRO DE LA PATENTE
    fetch("http://localhost:8080/registro/patente/registrar", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    const requestsPortada = [];
    const requestsGaleria = [];

    setIsLoading(true);
    console.log("enviando");

    // ENVIA IMAGENES DE PORTADA
    for (let i = 0; i < patente.cantImgsPortada; i++) {
      var formdata = new FormData();
      formdata.append("image", imgsPortada[i]);
      requestsPortada.push(
        new Request(
          "http://localhost:8080/images/portada/" + patente.idPatente + "/" + i,
          {
            method: "POST",
            body: formdata,
          }
        )
      );
    }
    // ENVIA IMAGENES DE GALERIA
    for (let i = 0; i < patente.cantImgsGaleria; i++) {
      var formdata = new FormData();
      formdata.append("image", imgsGaleria[i]);
      requestsPortada.push(
        new Request(
          "http://localhost:8080/images/galeria/" + patente.idPatente + "/" + i,
          {
            method: "POST",
            body: formdata,
          }
        )
      );
    }
    async function fetchImagenes(requests) {
      setIsLoading(true);
      const promesas = requests.map((request) => {
        fetch(request).then((respuesta) => console.log(respuesta));
      });
      Promise.all(promesas).then((response) => {
        document.getElementById("container").scrollIntoView();
        setIsLoading(false);
        actualizar();
      });
    }
    fetchImagenes(requestsPortada);
    fetchImagenes(requestsGaleria);

    localStorage.setItem("usuario", JSON.stringify(usuario));
    // actualizar();
    setHide(true);

    // navigate("/profile");
  }

  function addImgPortada(file) {
    console.log("portada");
    if (imgsPortada.length >= 3) {
      setTxtError("Solamente puede agregar 3 fotos de portada");
      setShowModal(true);
      return;
    }
    setImgsPortada([...imgsPortada, file]);
    console.log(imgsPortada);
  }

  function addImgRegular(file) {
    // imgsGaleria.push(file);
    setImgsGaleria([...imgsGaleria, file]);
  }

  function deleteImgPortada(id) {
    setImgsPortada(imgsPortada.filter((img, i) => i !== id));
  }

  function deleteImgRegular(id) {
    setImgsGaleria(imgsGaleria.filter((img, i) => i !== id));
  }

  function seePreview() {
    setPreview(true);
    setBtnText("Quitar vista previa");
    document.getElementById("preview").scrollIntoView();
    // element.scrollIntoView(true);
    // window.scroll(0,120)
  }

  function quitPreview() {
    setPreview(false);
    setBtnText("Ver vista previa");
  }

  useEffect(() => {
    if (patente != null) {
      getImgs();
      setPatenteAux(patente);
      setnombreEmpresa(patente.nombre);
      setCorreo(patente.correo);
      setCategoria(patente.categoria);
      setSitioWeb(patente.sitioWeb);
      setDireccion(patente.direccion);
      setTelefono1(patente.telefono1);
      setTelefono2(patente.telefono2);
      setWhatsapp(patente.whatsapp);
      setFacebook(patente.facebook);
      setInstagram(patente.instagram);
      setDescripcion(patente.descripcion);
      setPalabrasClave(patente.palabrasClave);
    } else {
      setPatenteAux(null);
      setnombreEmpresa("");
      setCorreo("");
      setSitioWeb("");
      setDireccion("");
      setTelefono1("");
      setTelefono2("");
      setWhatsapp("");
      setFacebook("");
      setInstagram("");
      setDescripcion("");
      setPalabrasClave("");
      setImgsGaleria([]);
      setImgsPortada([]);
    }
    // console.log("pat", patente);
  }, [patente]);

  return (
    <>
      <div className="container">
        <RegistroDirectorio
          patente={patente}
          setnombreEmpresa={setnombreEmpresa}
          setCorreo={setCorreo}
          setSitioWeb={setSitioWeb}
          setDireccion={setDireccion}
          setTelefono1={setTelefono1}
          setTelefono2={setTelefono2}
          setCategoria={setCategoria}
          setDescripcion={setDescripcion}
          setPalabrasClave={setPalabrasClave}
          setWhatsapp={setWhatsapp}
          setFacebook={setFacebook}
          setInstagram={setInstagram}
          setTwitter={setTwitter}
          setYoutube={setYoutube}
          setTiktok={setTiktok}
          
          nombreEmpresa={nombreEmpresa}
          correo={correo}
          direccion={direccion}
          sitioWeb={sitioWeb}
          telefono1={telefono1}
          telefono2={telefono2}
          categoria={categoria}
          descripcion={descripcion}
          palabrasClave={palabrasClave}
          whatsapp={whatsapp}
          facebook={facebook}
          instagram={instagram}
          twitter={twitter}
          tiktok={tiktok}
          youtube={youtube}
        ></RegistroDirectorio>

        <div className="text-center font-bold">
          <h1 className="text-3xl">Galeria de fotos</h1>
        </div>

        <div className="text-center font-bold">
          <h1 className="text-xl">Fotos de portada (3)</h1>
        </div>
        {/* Fotos de portada */}
        <div className=" w-full bg-cover mb-10">
          <div className="border-8 ">
            <MyGallery
              images={imgsPortada}
              deleteImage={deleteImgPortada}
            ></MyGallery>
          </div>
          <div className="w-full h-2/4 text-center">
            <ModalAgregarImagen addImage={addImgPortada}></ModalAgregarImagen>
            <span></span>
          </div>
        </div>

        <div className="text-center font-bold">
          <h1 className="text-xl">Fotos normales (9)</h1>
        </div>
        {/* Fotos de galeria */}
        <div className=" w-full bg-cover">
          <div className="border-8 ">
            <MyGallery
              images={imgsGaleria}
              deleteImage={deleteImgRegular}
            ></MyGallery>
          </div>

          <div className="w-full h-2/4 text-center">
            <ModalAgregarImagen addImage={addImgRegular}></ModalAgregarImagen>
            <span></span>
          </div>
          <div className="w-full h-2/4 text-right mb-8">
            {/* <Button className="m-2" variant="danger">Retroceder</Button> */}
            <Button
              variant="success"
              onClick={!preview ? (e) => seePreview() : (e) => quitPreview()}
              className="m-2"
            >
              {btnText}
            </Button>
            {patente &&
            (patente.estado == 1 ||
              patente.estado == 3 ||
              patente.estado == 4) ? (
              <Button
                onClick={(e) => {
                  document.getElementById("container").scrollIntoView();
                  setHide(true);
                }}
                className="m-2"
              >
                Quitar
              </Button>
            ) : (
              <>
                <Button
                  variant="danger"
                  onClick={(e) => {
                    document.getElementById("container").scrollIntoView();
                    setHide(true);
                  }}
                  className="m-2"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={(e) => {
                    guardar();
                  }}
                  className="m-2"
                >
                  Guardar
                </Button>
              </>
            )}
          </div>
        </div>

        <div
          hidden={!isLoading}
          className="bg-gray-900 h-screen w-100 left-0 bottom-0 absolute bg-opacity-50 flex items-center"
        >
          <h1 className="m-auto text-white">
            <Spinner></Spinner>
          </h1>
        </div>
        {/* ========================================================================= */}
        {/* Modals */}
        {/* ========================================================================= */}
        <Modal show={showModal} onHide={handleClose} className="bg-opacity-50">
          <Modal.Body>
            <Alert variant="danger">{txtError}</Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Entendido
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* ========================================================================= */}
      {/* Vista Previa */}
      {/* ========================================================================= */}
      {preview ? (
        <div id="preview">
          <VistaPrevia
            nombreEmpresa={nombreEmpresa}
            correo={correo}
            direccion={direccion}
            sitioWeb={sitioWeb}
            telefono1={telefono1}
            telefono2={telefono2}
            categoria={categoria}
            descripcion={descripcion}
            palabrasClave={palabrasClave}
            whatsapp={whatsapp}
            facebook={facebook}
            instagram={instagram}
            twitter={twitter}
            tiktok={tiktok}
            youtube={youtube}
            imgsPortada={imgsPortada}
            imgsRegulares={imgsGaleria}
          ></VistaPrevia>
        </div>
      ) : null}
    </>
  );
}
