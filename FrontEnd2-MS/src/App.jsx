import { useContext, useEffect, useState } from "react";
import Verificaciones from "./html/verificaPatentados/VerificaRegistros";
import Profile from "./html/Profile";
import FileUpload from "./html/fileUpload/FileUpload";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegistroSistema from "./html/registro/RegistroSistema";
import Error404 from "./html/Error/Error404";
import Login from "./html/registro/Login";
import { ImageContext } from "./context/ImageContext";
import InformacionDirectorio from "./html/registroDirectorio/InformacionDirectorio";
import Declaraciones from "./html/Declaraciones";
import Inicio from "./html/Inicio.jsx";
import NavigationBarPatentado from "./components/NavBarPatentado";
import NavigationCambio from "./components/NuevaNav";
import NavigationBarAdmin from "./components/NavBarAdmin";
import RegistrosPatentes from "./html/verificaPatentes/VerificaPatentes";
import ScrollButton from "./components/ScrollButton";
import MisPatentes from "./html/patentado/MisPatentes";
import OlvidasteContra from "./html/registro/CambioContrasena";

//P6SLSDqftpZyeMDyVEfZ_OahVn-0aivwBMcjeKECyQk

function App() {
  const { images, addImage, deleteImage } = useContext(ImageContext);
  const [usuario, setUsuario] = useState((JSON.parse(localStorage.getItem("usuario")))?
  (JSON.parse(localStorage.getItem("usuario"))):null);
  const [files, setFiles] = useState([]);
  useEffect(()=>{
    
  },[])
  
  window.onbeforeunload= function(e){
    localStorage.setItem("usuario",JSON.stringify(usuario))
  }

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  return (
    <BrowserRouter>
    <ScrollButton></ScrollButton>
      <div className="">
        <Routes>
          <Route path="/" element={<Inicio></Inicio>} />
          <Route
            path="/login"
            element={
              <Login setUsuario={setUsuario}></Login>
            }
          />
          <Route
            path="/Olvidaste"
            element={
              <>
              <NavigationCambio></NavigationCambio>
              <OlvidasteContra setUsuario={setUsuario}></OlvidasteContra>
            </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <NavigationBarPatentado></NavigationBarPatentado>
                {/* <Home></Home> */}
                
              </>
            }
          />
          {/* <Route path="/" element={<Principal></Principal>} /> */}
          <Route
            path="/infoDirectorio"
            element={
              <>
                <NavigationBarPatentado></NavigationBarPatentado>
                <InformacionDirectorio
                  images={images}
                  addImage={addImage}
                  deleteImage={deleteImage}
                ></InformacionDirectorio>
              </>
            }
          />
          <Route
            path="/directorio/:id"
            element={
              <>
                <NavigationBarPatentado></NavigationBarPatentado>
                <InformacionDirectorio
                  images={images}
                  addImage={addImage}
                  deleteImage={deleteImage}
                  usuario={usuario}
                ></InformacionDirectorio>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {usuario && usuario.usuario.rol == 2 ? (
                  <>
                    <NavigationBarAdmin></NavigationBarAdmin>
                    <Profile usuario={usuario}></Profile>
                  </>
                ) : (
                  <>
                    <NavigationBarPatentado></NavigationBarPatentado>
                    <Profile usuario={usuario}></Profile>
                  </>
                )}
              </>
            }
          />
          {/* <Route
            path="/pagina1"
            element={
              <>
                <NavigationBar></NavigationBar>
                <Navigate to="/"></Navigate>
              </>
            }
          />{" "}
          redireccionar */}
          <Route
            path="/registroSistema"
            element={
              <>
                <RegistroSistema></RegistroSistema>
              </>
            }
          />
          <Route
            path="/verificaciones"
            element={
              <div >
                <NavigationBarAdmin></NavigationBarAdmin>
                <Verificaciones
                  // filtrarData={filtrarData}
                  // filtrarDataEstado={filtrarDataEstado}
                ></Verificaciones>
              </div>
            }
          ></Route>
          <Route
            path="/registrosPatentes"
            element={
              <>
                <NavigationBarAdmin></NavigationBarAdmin>
                <RegistrosPatentes></RegistrosPatentes>
              </>
            }registrosPatentes
          ></Route>
          <Route
            path="/patentes"
            element={
              <>
                <NavigationBarPatentado></NavigationBarPatentado>
                <MisPatentes usuario={usuario} />
              </>
            }
          ></Route>
          <Route
            path="/cargar/:id"
            element={
              <>
                <NavigationBarPatentado></NavigationBarPatentado>
                <FileUpload
                  files={files}
                  setFiles={setFiles}
                  removeFile={removeFile}
                />
              </>
            }
          ></Route>
          <Route
            path="/declaraciones"
            element={
              <>
                <NavigationBarAdmin></NavigationBarAdmin>
                <Declaraciones />
              </>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
          {/* <div className="ml-8 mr-8 bg-scroll">
        <Verificaciones data={users} filtrarData={filtrarData} filtrarDataEstado={filtrarDataEstado}></Verificaciones>
         <GridComplexExample></GridComplexExample> 
      </div> */}
          {/* <Profile></Profile> */}
          {/* <UploadPage></UploadPage> */}
          {/* <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} /> */}
        </Routes>
        {/* <Footer></Footer> */}
      </div>
      
    </BrowserRouter>
  );
}

export default App;
