import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AlertModal({title, description,smShow, setSmShow}) {

  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        
      >
        <Modal.Header closeButton className='bg-red-500 bg-opacity-60'>
          <Modal.Title id="example-modal-sizes-title-sm" className='text-center m-auto'>
           <span className=''>{title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-red-500 bg-opacity-60'>{description}</Modal.Body>
      </Modal>
    </>
  );
}
