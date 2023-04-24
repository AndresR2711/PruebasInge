import React from "react";
import { Button } from "react-bootstrap";

export default function TableRowUser({ registro, verRegistro }) {

  return (
    <>
      <td>
        {registro.cedula} 
        {/* <ImageZoomModal registro={registro} cedula1={cedula1} cedula2={cedula2}></ImageZoomModal> */}
      </td>
      <td>{registro.nombre + " " + registro.apellidos}</td>
      <td>{registro.telefono}</td>
      <td>{registro.correo}</td>
      {/* <td>{registro.cedJuridica ? <a href="">Descargar</a> : "N/A"}</td> */}
      {/* <td>{registro.telefonoEmpresa}</td> */}
      <td>{registro.estado==1?"Pendiente":registro.estado==2?"Aceptado":"Rechazado"}</td>
      {/* <td>{registro.archivoAdjunto ? registro.archivoAdjunto : "N/A"}</td> */}
      <td><Button variant="primary"
                    className=""
                    onClick={() => verRegistro(registro.cedula)}>Ver Detalles del registro</Button></td>
    </>
  );
}
