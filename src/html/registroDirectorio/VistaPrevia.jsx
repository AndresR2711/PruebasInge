import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import CarouselVistaPrevia from "../../components/CarouselVistaPrevia";
import { FaTiktok } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsWhatsapp,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { Viewer } from "../../components/ImageViewer";

export default function VistaPrevia(props) {
  console.log(props);
  return (
    <>
      <div className="bg-slate-400 bg-opacity-20 w-100 mt-40">
        <div className="-mt-40 relative z-0 mb-2">
          <CarouselVistaPrevia
            imgsPortada={props.imgsPortada}
            nombre={props.nombreEmpresa}
          ></CarouselVistaPrevia>
        </div>
        <div className="row w-100">
          {/* Columna izquierda (descipcion y galeria) */}
          <div className="col-lg-8">
            <div className="w-[96%] m-auto">
              <div className="row   bg-white rounded-lg">
                <h1 className="font-bold text-2xl m-2">Descripcion</h1>
                <p className="text-muted m-2">{props.descripcion + "ffff"}</p>
              </div>
              <div className="row mt-2 bg-white rounded-lg h-[20rem]">
                <div className="sticky top-0 h-[10%]">
                  <h1 className="font-bold text-2xl m-2 top-0 sticky bg-white">
                    Galeria
                  </h1>
                </div>
                {/* <MyGalleryPreview images={props.imgsRegulares}></MyGalleryPreview> */}
                <div className="h-[90%] overflow-auto">
                  <Viewer images={props.imgsRegulares}></Viewer>
                </div>
              </div>
            </div>
          </div>
          {/* Columna derecha (contacto y social) */}
          <div className="col-lg-4">
            <div className="row  bg-white rounded-lg">
              <div className="sticky top-0 bg-white w-100 rounded-lg">
                <h1 className="font-bold m-2 text-2xl opacity-100 bg-white">
                  Contacto
                </h1>
              </div>
              <div className="w-100">
                {props.direccion ? (
                  <div className="row">
                    <div className="col-sm-3 break-words">
                      <h2 className="font-semibold text-base">Direccion</h2>
                    </div>
                    <div className="col-sm-9 break-words">
                      <span className="w-100  font-light">{props.direccion}</span>
                    </div>
                  </div>
                ) : null}
                {props.correo ? (
                  <div className="row">
                    {" "}
                    <div className="col-sm-3 break-words">
                      <h2 className="font-semibold text-base">Email</h2>
                    </div>
                    <div className="col-sm-9">
                      <span className="font-light">
                        <a href={props.correo}>{props.correo}</a>
                      </span>
                    </div>
                  </div>
                ) : null}{" "}
                {props.sitioWeb ? (
                  <div className="row">
                    <>
                      <div className="col-sm-3 break-words">
                        <h2 className="font-semibold text-base">Sitio Web:</h2>
                      </div>
                      <div className="col-sm-9 break-words ">
                        <a href={props.sitioWeb}>
                          <span className="font-light">{props.sitioWeb}</span>
                        </a>
                      </div>
                    </>
                  </div>
                ) : null}
                {props.telefono1 ? (
                  <div className="row flex w-100">
                    <div className="col-sm-3 break-words ">
                      <h2 className="font-semibold text-base">Telefono 1</h2>
                    </div>
                    <div className="col-sm-9 ">
                      <span className="font-light">{props.telefono1}</span>
                    </div>
                  </div>
                ) : null}
                {props.telefono2 ? (
                  <div className="row">
                    <div className="col-sm-3 break-words">
                      <h2 className="font-semibold text-base">Telefono 2</h2>
                    </div>
                    <div className="col-sm-9 ">
                      <span className="font-light">{props.telefono2}</span>
                    </div>
                  </div>
                ) : null}
                {props.palabrasClave ? (
                  <div className="row">
                    <div className="col-sm-3 break-words">
                      <h2 className="font-semibold text-base">
                        Palabras Clave
                      </h2>
                    </div>
                    <div className="col-sm-9 ">
                      <span className="font-ligh italic">
                        {props.palabrasClave}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row  bg-white rounded-lg mt-2">
              <div className="row">
                <h1 className=" m-2 font-bold text-2xl ">Social</h1>
              </div>
              <div className="row">
                <div className="col-sm-3 inline-block justify-center text-center w-100">
                  {props.whatsapp ? (
                    <a href={props.whatsapp}>
                      <BsWhatsapp className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                  {props.facebook ? (
                    <a href={props.facebook}>
                      <BsFacebook className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                  {props.instagram ? (
                    <a href={props.instagram}>
                      <BsInstagram className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                  {props.twitter ? (
                    <a href={props.twitter}>
                      <BsTwitter className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                  {props.youtube ? (
                    <a href={props.youtube}>
                      <BsYoutube className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                  {props.tiktok ? (
                    <a href={props.tiktok}>
                      <FaTiktok className="inline-flex m-4" size={40} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-11 bg-slate-400 bg-opacity-20"></div>
    </>
  );
}
