import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { InputAgregarImagen } from "./InputAgregarImagen";

export function ModalAgregarImagen({ addImage }) {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [file, setFile] = useState();
  const [text, setText] = useState(false)

  const handleClose = () => {
    setShow(false);
    setFile(null)
    setText(false)
  };

  function add() {
    if (!file) {
      setText(true)
      return;
    }

    addImage(file);
    setFile(null)
    setText(false)
    handleClose();
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="in-line text-center"
        variant="light"
        onClick={handleShow}
      >
        <AiOutlinePlusCircle className="inline-block"></AiOutlinePlusCircle>
        <span className="ml-2">Anadir Imagen a la galeria</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione la imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body text-center">
            {text? <span className="text-red-500 font-semibold">Debe seleccionar una imagen</span>:<></>}
            {file ? (
              <img
                src={imageUrl}
                alt="foto"
                className="rounded-square img-fluid m-auto rounded"
                style={{ width: "150px" }}
              ></img>
            ) : null}
            <InputAgregarImagen setImageUrl={setImageUrl} setFile={setFile}></InputAgregarImagen>
            <div className="d-flex justify-content-center mb-2"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={add}>
            Anadir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
