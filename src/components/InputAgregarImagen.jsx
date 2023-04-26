import Form from "react-bootstrap/Form";

export function InputAgregarImagen({ setImageUrl, setFile }) {
  function path(evt) {
    // var tgt = evt.target || window.event.srcElement,
    //   files = tgt.files;

    // Obtener el archivo seleccionado
    const file = evt.target.files[0]

    // Crear un objeto FileReader
    const reader = new FileReader();

    // Cuando se cargue el archivo
    reader.onload = function (evt) {
      // Obtener los datos del archivo en forma de array de bytes
      const data = new Uint8Array(evt.target.result);

      // Crear un objeto Blob con los datos del archivo
      const blob = new Blob([data], { type: file.type });

      // Hacer lo que quieras con el objeto Blob...
      setImageUrl(URL.createObjectURL(blob));
      setFile(blob)
    };

    // Leer el archivo como un array de bytes
    reader.readAsArrayBuffer(file);

    return
    // FileReader support
    if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
        setImageUrl(fr.result);
      };
      fr.readAsDataURL(files[0]);
      setFile(files[0]);
    }

    // Not supported
    else {
      // fallback -- perhaps submit the input to an iframe and temporarily store
      // them on the server until the user's session ends.
    }
  }

  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          onChange={(e) => path(e)}
          type="file"
          accept="image/png, image/jpeg"
        />
      </Form.Group>
    </>
  );
}
