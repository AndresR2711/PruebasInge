import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { ImageContextProvider } from "./context/ImageContext";
import { RegistrosContextProvider } from "./context/Registros";
import PatentadosContextProvider from "./context/Patentados";
// import "./css/UploadPage.css";
// import './html/Error/Error.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatentadosContextProvider>
      <RegistrosContextProvider>
        <ImageContextProvider>
          <App></App>
          {/* <Footer></Footer> */}
        </ImageContextProvider>
        </RegistrosContextProvider>
    </PatentadosContextProvider>
  </React.StrictMode>
);
