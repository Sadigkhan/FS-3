// // let body=document.getElementById("body")
// // let p=document.getElementsByTagName("p")
// // let demos=document.getElementsByClassName("demo")
// // let demos2=document.querySelectorAll(".demo")

// // console.log(demos)
// // console.log(demos2)

// // for(element of demos2){
// //     console.log(element)
// // }

// // console.log(demos)
// // for(element of demos){
// //     console.log(element)
// // }




// // NodeList.prototype.forEach = Array.prototype.forEach
// // HTMLAllCollection.prototype.forEach = Array.prototype.forEach

// // demos.forEach(element => {  
// //     console.log(element)
// // });


// // for(element of p){
// //     console.log(element)
// // }
// // console.log(demos2)

// // for(element of demos2){
// //     console.log(element)
// // }

// // demos2.forEach(element => {
// //     console.log(element)
// // });
// // for(let i=0;i<demos2.length;i++){
// //     console.log(demos2[i])
// // }


// //Creating HTMl Elements
// // let body=document.getElementById("body")
// // let div=document.createElement("div")
// // let div2=document.createElement("div")
// // let h1=document.createElement("h1")
// // // div.className="demo"
// // div.setAttribute("class","demo")
// // div.className="demo2"
// // div.classList.add("demo3")


// // body.appendChild(div)
// // body.replaceChild(div2,div)

// // body.removeChild(div)


// // let btn=document.getElementById("btn")

// // function AddText(){
// //     document.writeln("Hello ")

// //     document.write("Hello World")
// // }

// // btn.onclick=AddText




// let img1=document.getElementById("img1")
// let img2=document.getElementById("img2")
// let img3=document.getElementById("img3")

// let img3Src=img3.src

// img1.addEventListener("mouseover",function(e){
// img3.src=e.target.src
// console.log(e.target.value)
// })
// img1.addEventListener("mouseout",function(e){
//     img3.src=img3Src;
// })

// img2.addEventListener("mouseover",function(e){
//     img3.src=e.target.src
//     })
//     img2.addEventListener("mouseout",function(e){
//         img3.src=img3Src;
//     })



let red=document.getElementById("Red")
let green=document.getElementById("Green")
let yellow=document.getElementById("Yellow")



green.addEventListener("click",function(e){
    e.stopImmediatePropagation()
    console.log("Stopped")
})

red.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("red")
})

green.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("green")

})

yellow.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("yellow")
})

green.addEventListener("mouseover",function(e){
    e.stopImmediatePropagation()
    green.style.backgroundColor="blue"

})

