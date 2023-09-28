let sliderImg = document.getElementById("sliderImg");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let sliderContainer=document.querySelector(".slider-container")
let currentIndex = 0;
let images = [
    "src/images/img1.jpg",
    "src/images/img2.jpeg",
    "src/images/img3.jpeg"
]


function Slider() {
    if(currentIndex >= images.length){
        currentIndex = 0;
    }else if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    sliderImg.src = images[currentIndex];
}


prevBtn.addEventListener("click", function () {
    currentIndex--;
    Slider()
})

nextBtn.addEventListener("click", function () {
    currentIndex++;
    Slider()
})


let autoPlay;
function SlideIntervalCreator(){
        autoPlay=setInterval(function(){
        currentIndex++;
        Slider()
    },2000)
}
SlideIntervalCreator();

sliderContainer.addEventListener("mouseover",function(){
    clearInterval(autoPlay)
})
sliderContainer.addEventListener("mouseout",function(){
    SlideIntervalCreator();
})

let tabs =document.querySelectorAll(".tabs div")
let contents=document.querySelectorAll(".content div")


for(let tab of tabs){
    tab.addEventListener("click",function(){
        let activeElement=document.querySelector(".active")
        activeElement.classList.remove("active")
        this.classList.add("active")

        let index=this.getAttribute("data-index")

        for(let content of contents){
            if(index==content.getAttribute("data-index")){
                content.classList.add("show")
            }else{
                content.classList.remove("show")
            }
        }

    })
}
