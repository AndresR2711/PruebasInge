import axios from 'axios'
import React from 'react'
import FileItem from './FileItem';

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        // axios.delete(`http://localhost:8080/upload?name=${_name}`)
        //     .then((res) => removeFile(_name))
        //     .catch((err) => console.error(err));
        removeFile(_name)
    }
    return (
        <div className="w-100 m-auto">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} 
                    removeFile={removeFile}/>))
            }
        </div>
    )
}

export default FileList