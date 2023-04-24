

import React, { createContext } from 'react'

export const PatentadosContext = createContext();

export const data = [
  {
    id: 1,
    nombre: "3101500042 SOCIEDAD ANONIMA",
    // apellidos: "Barrantes Castro",
    cedula: "3101500042",
    telefono: "62088253",
    direccion: "Sarchi Norte",
    email: "",
    estado: 1,
    usuario: { usuario: "3101500042", contrasenna: 12345, rol:1 },
    patentes: [ ],
  },
  {
    id: 2,
    nombre: "3101580033 S.A.",
    // apellidos: "Mora Castro",
    cedula: "3101580033",
    telefono: "24544586",
    direccion: "Sarchi Norte",
    email: "",
    estado: 2,
    usuario: { usuario: "3101580033", contrasenna: 123456, rol:1 },
    patentes: [],
  },
  {
    id: 3,
    nombre: "3101613989 SOCIEDAD ANONIMA",
    // apellidos: "Rodriguez Bonilla",
    cedula: "3101613989",
    telefono: "62328141",
    direccion: "Sarchi Norte",
    email: "",
    estado: 1,
    usuario: { usuario: "3101613989", contrasenna: 1234567, rol:1 },
    patentes: []
  },
  {
    id: 4,
    nombre: "3101778853 S.A." ,
    // apellidos: "Solis Rivera",
    cedula: "3101778853",
    telefono: "24543110",
    direccion: "Sarchi Sur",
    email: "",
    estado: 3,
    usuario: { usuario: "3101778853", contrasenna: 12345678, rol:1},
    patentes: []
  },
  {
    id: 5,
    nombre: "ACUÑA HUERTAS STEVEN",
    // apellidos: "Mendez Vargas",
    cedula: "206960101",
    telefono: "24544010",
    direccion: "Sarchi Sur",
    email: "",
    estado: 1,
    usuario: { usuario: "206960101", contrasenna: 123456789 , rol:1},
    patentes: []
  },
  {
    id: 6,
    nombre: "AGROPECUARIA SARCHISEÑA S.A",
    apellidos: "Alfaro Zamora",
    cedula: "3101219605",
    telefono: "83461414",
    direccion: "Sarchi Norte",
    email: "Sebastian@gmail.com",
    estado: 1,
    usuario: { usuario: "3101219605", contrasenna: "0123456789", rol:1},
    patentes: []
  }
  ,
  {
    id: 7,
    nombre: "Municipalidad de Sarchi",
    apellidos: "",
    cedula: "12345678",
    telefono: "83461414",
    direccion: "Costado de la plaza Sarchi Norte",
    email: "muni.sarchi@gmail.com",
    estado: 1,
    usuario: { usuario: 7, contrasenna: "2222", rol:2}
  },
];

export default function PatentadosContextProvider(props) {
    return (
      <PatentadosContext.Provider
        value={{
          patentados:data
        }}
      >
        {props.children}
      </PatentadosContext.Provider>
    );
}

