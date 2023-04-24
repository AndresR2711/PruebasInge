import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const style = {
  color: "black",
  fontSize: "3.5em",
};

import logo from "../assets/logo.png"

function NavigationCambio() {
  return (
    <>
  <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="ml-4">
              <img src={logo} alt="Logo" className="h-20" />
            </div>
            <a href="/" className="text-white text-4xl font-bold no-underline">
              Municipalidad de Sarchí
            </a>
           
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-white text-3xl no-underline px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </a>
              <a href="/login" className="text-white text-3xl no-underline px-3 py-2 rounded-md text-sm font-medium">
                Inicio De Sesion
              </a>
              <a href="/registroSistema" className="text-white text-3xl no-underline px-3 py-2 rounded-md text-sm font-medium">
                Registro
              </a>
              <a href="/Profile" className="text-white text-3xl no-underline px-3 py-2 rounded-md text-sm font-medium">
                Perfil
              </a>
            </div>
          </div>
        </div>
      </div>

    </nav>
    </>
  );
}

export default NavigationCambio;
