const dropArea = document.getElementById("drop-area")
const video = document.getElementById("video")
const output = document.getElementById("output")
const fetchBtn = document.getElementById("fetch")

// dropArea.addEventListener("dragover", (event) => {
//     event.preventDefault()
// })

// dropArea.addEventListener("drop", (event) => {
//     event.preventDefault()
//     // console.log(event.dataTransfer.files)
//     const files = event.dataTransfer.files
//     if (files.length > 0) {
//         const file = files[0];
//         // console.log(file)
//         if (file.type.startsWith("image/")) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const image = new Image();
//                 // console.log(image)
//                 // console.log(event.target)
//                 image.src = event.target.result;
//                 image.style.maxWidth = 100 + "%";
//                 image.style.maxHeight = 100 + "%";
//                 dropArea.innerHTML = "";
//                 dropArea.appendChild(image);
//             }
//             reader.readAsDataURL(file);
//         } else if (file.type.startsWith("video/")) {
//             const objectURL = URL.createObjectURL(file);
//             video.src = objectURL;
//             video.play()
//         } else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 // console.log(event.target)
//                 const data = new Uint8Array(event.target.result);
//                 // console.log(data)
//                 const workbook = XLSX.read(data, {
//                     type: "array"
//                 });
//                 // console.log(workbook)
//                 const sheetName = workbook.SheetNames[0]
//                 // console.log(sheetName)
//                 const sheet = workbook.Sheets[sheetName]
//                 // console.log(sheet)
//                 const htmlTABLE = XLSX.utils.sheet_to_html(sheet)
//                 output.innerHTML = htmlTABLE

//             }
//             reader.readAsArrayBuffer(file);
//         }
//     }
// })


fetchBtn.addEventListener("click", () => {
    fetch("https://randomuser.me/api/?results=5")
    .then((response)=>response.json())
    .then((data)=>data.results.forEach(element => {
       output.innerHTML+=`
       <div class="card">
       <div class="card-image">
           <img src="${element.picture.large}" alt="">
       </div>
       <div class="card-body">
           <p>${element.gender} ${element.name.first} ${element.name.last}</p>
           <p>${element.location.street.name}</p>
           <p>${element.dob.age}</p>
       </div>
   </div>
       ` 
    }))
})

