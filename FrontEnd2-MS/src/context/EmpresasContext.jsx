import React, { createContext, useEffect, useState } from "react";
// import { categoriasData } from "./empresas";

export const EmpresasContext = createContext();

export default function EmpresasContextProvider(props) {
  const [registrosData, setRegistrosData] = useState([])
  const [empresas, setEmpresas] = useState([])

  function getRegistros() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/registro/patente/registros", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setRegistros(JSON.parse(result))
        // console.log(registros)
      })
      .catch((error) => console.log("error", error));
  }

  function filtrarEmpresasCategoria(categoria) {
    console.log(categoria);
    if (categoria.toUpperCase() == "TODAS") {
      console.log("todas");
      setEmpresas(empresasData);
      return;
    }
    setEmpresas(
      empresasData.filter(
        (empresa) => empresa.categoria.toUpperCase() === categoria.toUpperCase()
      )
    );
  }

  function filtrarEmpresasPalabraClave(palabraClave) {
    if (palabraClave == "") {
      setEmpresas(empresasData);
      return;
    }
    setEmpresas(
      empresasData.filter((empresa) =>
        empresa.palabrasClave
          .toUpperCase()
          .includes(palabraClave.toUpperCase())
      )
    );
  }

  function filtrarEmpresasCategoriaPalabra(categoria, palabra, nombre) {
    if (categoria.toUpperCase() == "TODAS" && palabra == "" && nombre == "") {
      setEmpresas(empresasData);
      return;
    }
    // if (categoria.toUpperCase() == "TODAS" && (palabra != "" || nombre != "")) {
    //   setEmpresas(
    //     empresasData.filter((empresa) =>
    //       empresa.palabrasClave.toUpperCase().includes(palabra.toUpperCase()) &&
    //       empresa.nombre.toUpperCase().includes(nombre.toUpperCase())
    //     )
    //   );
    //   return;
    // }
    setEmpresas(
      empresasData.filter(
        (empresa) =>
          empresa.categoria.toUpperCase() === categoria.toUpperCase() &&
          empresa.palabrasClave.toUpperCase().includes(palabra.toUpperCase()) &&
          empresa.nombre.toUpperCase().includes(nombre.toUpperCase())
      )
    );
  }

  function ordenarA_Z(){
    console.log("ordena A-Z")
    // console.log(empresas.sort((x,y)=>x.nombreEmpresa.localeCompare(y.nombreEmpresa)))
    setEmpresas([])
    console.log(empresas)
    setEmpresas(empresas.sort((x,y)=>x.nombreEmpresa.localeCompare(y.nombreEmpresa)))
    console.log(empresas)
    return
  }

  return (
    <EmpresasContext.Provider
      value={{
        getEmpresas,
        empresasData,
        empresas,
        categorias,
        filtrarEmpresasCategoria,
        filtrarEmpresasPalabraClave,
        filtrarEmpresasCategoriaPalabra,
        ordenarA_Z
      }}
    >
      {props.children}
    </EmpresasContext.Provider>
  );
}
