import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="relative bg-contain bg-[url('src/assets/tripleta.jpg')] h-100 bg-opacity-30 m-0 bg-repeat">
        <div className="h-[100%]  bg-black bg-opacity-50">
          <div className="bg-[url('src/assets/curls.png')] h-[12%] bg-contain bg-no-repeat opacity-70"></div>
          <div className="row  h-[6rem] text-end  w-100 mt-2 m-auto bg-black bg-opacity-50 ">
            <div className="col-sm-4 m-auto h-100 text-white inline-flex font-bold text-3xl text-center">
              <div className="m-auto h-100 w-100 inline-flex ">
                <img
                  src="src/assets/unnamed.png"
                  className="h-[100%] m-auto"
                ></img>
                <span className="mt-[1.5rem] font-light">
                  Municipalidad de Sarchi
                </span>
              </div>
            </div>
            <div className="col-sm-4 m-auto h-100 text-white text-center text-3xl"></div>
            <div className="col-sm-4 m-auto h-100 text-white text-center">
              {/* <a className="mt-4 text-white mr-5">Home</a> */}
              <Button
                className="mt-4 bg-black bg-opacity-50 hover:text-white"
                variant="outline-light"
              >
                <NavLink
                    className="text-white no-underline m-auto hover:text-gray-600"
                    to="/login"
                  >
                    Iniciar Sesion
                  </NavLink>
              </Button>{" "}
              <Button
                className="mt-4 bg-black bg-opacity-50"
                variant="outline-light"
              >
                <NavLink
                    className="text-white no-underline m-auto hover:text-gray-600"
                    to="/registroSistema"
                  >
                    Registrarse
                  </NavLink>
              </Button>{" "}
            </div>
          </div>          
        </div>
      </div>
      
    </div>
  );
}
