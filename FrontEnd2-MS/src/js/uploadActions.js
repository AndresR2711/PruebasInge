
import axios from "axios";

const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export const uploadImage = (imageData) => async dispatch => {
    console.log("upload")
    if (imageData.entries().next().value[1] !== null) {
        const response = await axios.post("http://localhost:8080/imgs/1234", imageData, {
            onUploadProgress:progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            }
        });
        dispatch({
            type: UPLOAD_IMAGE,
            payload: response.data
        });
    }
};