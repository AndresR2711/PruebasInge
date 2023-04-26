import { createContext, useEffect, useState } from "react";

export const RegistrosContext = createContext();

export function RegistrosContextProvider(props) {
  const [registrosData, setRegistrosData] = useState([])
  const [registros, setRegistros] = useState([])

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

  // useEffect(() => {
  //   // setUsers(data);
  // }, []);

  function filtrarData(param) {
    setUsers(
      data.filter(
        (user) =>
          user.cedula.includes(param) ||
          user.nombreEmpresa.includes(param) ||
          (user.nombre + " " + user.apellidos).includes(param)
      )
    );
  }

  function filtrarDataEstado(estado) {
    // setUsers(data.filter((user) => (
    //   user.estado==(estado=="Pendiente")?"1":(estado=="Aceptado")?"2":(estado=="Rechazado")?"3":""
    //   )));
    // console.log(estado)
    // if(estado == "Pendiente"){
    //   console.log("p")
    //   setUsers(data.filter((user) => (user.estado=="1")));
    //   console.log(data.filter((user) => (user.estado=="1")))
    // }
    // if(estado == "Aceptado"){
    //   console.log("a")
    //   setUsers(data.filter((user) => (user.estado=="2")));
    // }
    // if(estado == "Rechazado"){
    //   console.log("r")
    //   setUsers(data.filter((user) => (user.estado=="3")));
    // }
    //   console.log(estado)
      
    //   console.log(users)
  }

  return (
    <RegistrosContext.Provider
      value={{
        users,
        filtrarData,
        filtrarDataEstado
      }}
    >
      {props.children}
    </RegistrosContext.Provider>
  );
}

