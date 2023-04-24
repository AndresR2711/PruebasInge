// const input = document.querySelector("input")
// const output = document.querySelector("output")
// let imagesArray = []

// input.addEventListener("change", () => {
//     const file = input.files
//     imagesArray.push(file[0])
//     displayImages()
//   })

//   function displayImages() {
//     let images = ""
//     imagesArray.forEach((image, index) => {
//       images += `<div class="image">
//                   <img src="${URL.createObjectURL(image)}" alt="image">
//                   <span onclick="deleteImage(${index})">&times;</span>
//                 </div>`
//     })
//     output.innerHTML = images
//   }

//   function deleteImage(index) {
//     imagesArray.splice(index, 1)
//     displayImages()
//   }

  // axios
    //   .post(
    //     "http://localhost:8080/imgs/id/12345",
    //     imageData,
    //     {
    //       headers: {
    //         accept: "application/json",
    //         "Accept-Language": "en-US,en;q=0.8",
    //         "Content-Type": `multipart/form-data; boundary=${imageData}`,
    //       },
    //     })
    //   .then((response) => {
    //     setShow(true)
    //   })
    //   .catch((error) => {
    //     //handle error
    //     console.log(error);
    //   });
    const fetch = require("node-fetch");
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "JSESSIONID=C774E6158730A8861450F927A116AD67");

var graphql = JSON.stringify({
  query: "",
  variables: {}
})
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("localhost:8000/patentado/perfil", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));