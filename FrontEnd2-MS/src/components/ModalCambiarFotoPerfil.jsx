import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiOutlineEdit } from "react-icons/ai";
import { InputAgregarImagen } from "./InputAgregarImagen";

export function ModalCambiarFotoPerfil({url, setprofileImgUrl}) {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState(url)

  const handleClose = () =>{
    setShow(false);
    setprofileImgUrl(imageUrl);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <AiOutlineEdit></AiOutlineEdit>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione la foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body text-center">
            <img
              src={imageUrl}
              alt="foto"
              className="rounded-square img-fluid m-auto rounded mb-2"
              style={{ width: "150px" }}
            ></img>
            <InputAgregarImagen setImageUrl={setImageUrl}></InputAgregarImagen>
            <div className="d-flex justify-content-center mb-2"></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambio
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
