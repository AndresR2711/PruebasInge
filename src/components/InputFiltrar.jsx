import { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InputFiltrar({ filtrarRegistros}) {
  const [filtroInput, setFiltroInput] = useState('')
  const [estado, setEstado] = useState('')
  return (
    <div className="row ">
      <div className="col-lg-6 m-auto flex ">
        <InputGroup
          onChange={(e) => {
            setFiltroInput(e.target.value)
            filtrarRegistros(e.target.value,estado)
          }}
          className="mb-3"
        >
          <Form.Control
            placeholder="Filtrar por nombre o cedula"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Form.Select 
          onChange={(e) => {
            setEstado(e.target.value)
           filtrarRegistros(filtroInput,e.target.value)
          }}
          className="font-bold text-gray-700 h-100 text-lg w-[2rem]"
          defaultValue={"Todos"}
          style={{
            width: 150
          }}
        >
          <option value={0}>Todos</option>
          <option value={1}>Pendientes</option>
          <option value={2}>Aceptados</option>
          <option value={3}>Rechazados</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default InputFiltrar;
