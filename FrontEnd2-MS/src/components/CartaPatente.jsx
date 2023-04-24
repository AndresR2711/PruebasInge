import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { CiLogin } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { MdStore } from "react-icons/md";
import { NavLink } from "react-router-dom";

function CartaPatente({ patente }) {
  const [src, setSrc] = useState(null)
  
  function getImgPortada(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/images/portada/"+patente.idPatente+"/0", requestOptions)
      .then(response => response.blob())
      .then(result => {setSrc(URL.createObjectURL(result))
      })
      .catch(error => setSrc("src/assets/carreta.png"));
  }
  useEffect(() => {
    getImgPortada()

  }, [patente])
  
  return (
    <div className="h-[15rem] w-[100%] rounded-lg m-auto">
      <Card className="rounded-lg h-100 w-100 overflow-hidden ">
        <Card.Body className="bg-gray-500 text-white text-center font-semibold ">
          <Card.Text className="">{patente.nombreComercial}</Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src={src?src:"src/assets/carreta.png"}
          className="h-[100%] w-[100%] bg-cover"
        />
        <div
              hidden={patente.estado!=3}
              className="bg-gray-900 h-100 w-100 left-0 bottom-0 absolute bg-opacity-50 flex items-center"
            >
              <h1 className="m-auto text-white">RECHAZADA
              </h1> <br/>
             
            </div>
        {/* <div className="text-center absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-5 hover:opacity-60 transition duration-300 ease-in-out bg-black hover:scale-110">
          <div className="text-center block mt-[35%] ml-[8%] text-xs">
            <NavLink
              className="no-underline m-auto text-white"
              to={"/cargar/" + patente.id}
            >
              <h1 className="text-xl">Seleccionar</h1>
            </NavLink>
          </div>
        </div> */}
      </Card>
    </div>
  );
}

export default CartaPatente;
