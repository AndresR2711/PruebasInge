import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastStart({setShowToast,showToast,titulo,descripcion}) {
    // const [show, setShow] = useState(showToast);
    const date=new Date();

  return (
    <div className='mt-50'>
        <ToastContainer className="p-3" position={"top-start"}>
          <Toast className='text-white' bg='success'  onClose={() => setShowToast(false)} show={showToast} delay={7000} autohide>
            <Toast.Header closeButton={true}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{titulo}</strong>
              <small>{date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}</small>
            </Toast.Header>
            <Toast.Body>{descripcion}</Toast.Body>
          </Toast>
        </ToastContainer>
    </div>
  );
}

export default ToastStart;