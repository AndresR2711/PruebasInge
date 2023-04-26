import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFileAlt, FaSpinner, FaTrash, FaFilePdf } from "react-icons/fa";
// import './FileItem.scss'
import { Button } from "react-bootstrap";

const FileItem = ({ file, deleteFile }) => {
  return (
    <div
      className="w-[96%] m-auto bg-slate-300 mt-2 rounded-md"
      key={file.name}
    >
      {/* <FontAwesomeIcon icon={faFileAlt} /> */}
      <div className=" w-100 h-[5rem] flex">
        {/* <div className=" h-[50%] mt-[5%] w-[10%] text-center font-bold break-words">
          <FaFilePdf size={30} className="m-auto"/>
        </div> */}
        <div className=" h-100 ml-2   w-[80%] text-sm font-bold break-words 0 inline-flex">
          <span className="inline-flex">{file.name}</span>
        </div>
        <div className="w-[10%] h-[100%]  text-center hover:text-red-500 mr-2">
          {file.isUploading && (
            <Button
              className="text-center m-auto"
              variant=""
              // icon={FaSpinner} className="fa-spin"
              onClick={() => deleteFile(file.name)}
            >
              <FaTrash className="m-auto"></FaTrash>
            </Button>
          )}
          {!file.isUploading && (
            <Button
              className="w-100 text-center m-auto"
              onClick={() => deleteFile(file.name)}
            >
              <FaTrash className="m-auto"></FaTrash>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileItem;
