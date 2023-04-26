import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./fileUpload.scss";
import axios from "axios";
import FileList from "./FileList";
import { Button, Form } from "react-bootstrap";
import SpinnerLoading from "../../components/Spinner";
import Modal from "react-bootstrap/Modal";
import { Footer } from "../../components/Footer";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const [formData, setFormData] = useState(new FormData());
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [added, setAdded] = useState(false);

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    setAdded(true)
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    // add file
    formData.append("files", file);
    setFormData(formData);
    // for(const value of formData.get("files")){
    console.log(formData.get("files"));
    console.log(formData.entries.length)
    // }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setShowConfirmationModal(false);
    console.log("handle submit");
    setIsLoading(true);

    let request = new Request("http://localhost:8080/files/files/12", {
      method: "POST",
      body: formData,
    });
    (async () => {
      const response = await fetch(request);
      if (response.ok) {
        setIsLoading(false);
        console.log("todo bien");
        setSent(true);
      }
      if (!response.ok) {
        console.log("error");
        setShowModal(false);
        setIsLoading(false);
        setSent(false);
      }
    })();
  }

  function confirmar(e) {

    if (!added) {
      setShowEmptyModal(true);
      return;
    }
    setShowConfirmationModal(true);
  }

  return (
    <div className="w-100 container">
      {!sent ? (
        <>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="row w-100 h-[100%] m-auto">
              <div className="col-lg-4">
                <div className="m-auto w-100 h-100">
                  <h1>Instrucciones</h1>
                  <span>
                    1. Seleccionar el archivo de la declaracion Jurada
                    <br></br>
                    2. Dar Click en "Enviar"
                  </span>
                </div>
              </div>

              <div className="col-lg-4  h-[15rem] mt-4">
                <div className="file-card h-[75%]">
                  <div className="file-inputs">
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={uploadHandler}
                    />
                    <button>Seleccionar Archivo(s)</button>
                  </div>

                  <p className="main">Formatos soportados:</p>
                  <p className="">PDF</p>
                </div>
                <div className="mt-[5%] text-center h-[20%]">
                  <Button className="mr-2" variant="danger">
                    {" "}
                    Cancelar
                  </Button>
                  <Button
                    className="mr-2"
                    variant="primary"
                    onClick={(e) => confirmar(e)}
                  >
                    {" "}
                    Enviar Declaracion
                  </Button>
                </div>
              </div>

              <div className="col-lg-4 h-[27rem] overflow-auto mt-4">
                <div className="w-100 bg-gray ">
                  <div className="w-100 m-auto text-center font-bold border-b-4 border-gray-700 w-100 text-2xl top-0 sticky bg-white">
                    Archivos adjuntados
                  </div>
                  <div className="w-100">
                    <FileList files={files} removeFile={removeFile} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2"></div>
            <div
              style={{ display: isLoading ? "table" : "none" }}
              className="bg-cover bg-slate-600 absolute z-10 h-100 w-100 top-0 left-0 bg-opacity-30"
            >
              <div className="table-cell align-middle text-center">
                <SpinnerLoading></SpinnerLoading>
              </div>
            </div>
          </Form>

          {/* //modal confirmar envio  */}
          <Modal
            show={showConfirmationModal}
            onHide={() => setShowConfirmationModal(false)}
          >
            <Modal.Header closeButton className="text-center">
              <Modal.Title>Confirmacion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Esta seguro(a) de que desea realizar la declaracion jurada?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowConfirmationModal(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* //modal informar de agregar archivo */}
          <Modal show={showEmptyModal} onHide={() => setShowEmptyModal(false)}>
            <Modal.Header closeButton className="text-center">
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>Debe agregar almenos 1 documento</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowEmptyModal(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={(e) => setShowEmptyModal(false)}
              >
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <div className="row   bg-cover">
            <div className="col-lg-4 h-[10rem] m-auto items-center">
              {/* <div className="text-center text-white font-semibold text-2xl align-middle"><span>Datos enviados Correctamente</span></div> */}
            </div>
          </div>
          <div className="row  bg-[url('./assets/tripleta.jpg')] bg-cover">
            <div className="col-lg-4 h-[10rem] m-auto bg-gray-900 bg-opacity-70 items-center">
              <div className="text-center text-white font-semibold text-2xl align-middle">
                <span>Datos enviados Correctamente</span>
              </div>
            </div>
          </div>

          {/* <div className="row border-4 border-black">
            <div className="col-lg-4 border-4 border-black h-[10rem] m-auto"></div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default FileUpload;
