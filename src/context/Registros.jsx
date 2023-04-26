import { createContext, useEffect, useState } from "react";

export const RegistrosContext = createContext();

export function RegistrosContextProvider(props) {
  const [registrosPatentesData, setRegistrosPatentesData] = useState([]);
  const [registrosPatentes, setRegistrosPatentes] = useState([]);
  const [registrosPatentadosData, setRegistrosPatentadosData] = useState([]);
  const [registrosPatentados, setRegistrosPatentados] = useState([]);

  function getRegistrosPatentes() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8000/administrador/patentes", requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((res)=>{
        setRegistrosPatentesData(res)
        setRegistrosPatentes(res)
      })
      .catch((error) => console.log("error", error));
  }

  function filtrarRegistrosPatentes(nombre, estado) {
    console.log(nombre,estado)

    if (estado==0 && nombre == "" ) {
      setRegistrosPatentes(registrosPatentesData);
      return;
    }
    if (estado==0  && nombre != "") {
      setRegistrosPatentes(
        registrosPatentesData.filter((registro) =>
          registro.nombre.toUpperCase().includes(nombre.toUpperCase())
        )
      );
      return;
    }
    setRegistrosPatentes(
      registrosPatentesData.filter(
        (registro) =>
          registro.estado== estado &&
          registro.nombre.toUpperCase().includes(nombre.toUpperCase())
      )
    );
  }


  //===========================================

  function getRegistrosPatentados() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/administrador/patentados", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch("http://localhost:8080/registro/registros", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => JSON.parse(result))
    //   .then((res)=>{
    //     setRegistrosPatentadosData(res)
    //     setRegistrosPatentados(res)
    //   })
    //   .catch((error) => console.log("error", error));
  }

  function filtrarRegistrosPatentados(nombre, estado) {
    console.log(nombre,estado)

    if (estado==0 && nombre == "" ) {
      setRegistrosPatentados(registrosPatentadosData);
      return;
    }
    if (estado==0  && nombre != "") {
      setRegistrosPatentados(
        registrosPatentadosData.filter((registro) =>
          registro.nombre.toUpperCase().includes(nombre.toUpperCase())
        )
      );
      return;
    }
    setRegistrosPatentados(
      registrosPatentadosData.filter(
        (registro) =>
          registro.estado== estado &&
          registro.nombre.toUpperCase().includes(nombre.toUpperCase())
      )
    );
  }


  return (
    <RegistrosContext.Provider
      value={{
        registrosPatentes,
        getRegistrosPatentes,
        filtrarRegistrosPatentes,
        registrosPatentados,
        getRegistrosPatentados,
        filtrarRegistrosPatentados
      }}
    >
      {props.children}
    </RegistrosContext.Provider>
  );
}
