// // let input=document.getElementById("pass");
// // let eye=document.getElementById("eye");


// // function Show(){
// //     if(input.type=="password"){
// //         input.type="text";
// //         eye.classList.replace("fa-eye","fa-eye-slash")
// //     }else{
// //         input.type="password";
// //         eye.classList.replace("fa-eye-slash","fa-eye")
// //     }
// // }

// // eye.addEventListener("click",Show);


// // keyup event //keydown event //keypress event

// // let inp=document.getElementById("smsInp");
// // let smsLength=document.querySelector("#smsLength")
// // let smsCount=document.querySelector("#smsCount")


// // inp.addEventListener("keydown",function(){
// //     let inpLength=inp.value.length;
// //     smsLength.innerText=inpLength;
// //     let smsCountVal=Math.ceil(inpLength/160);
// //     smsCount.innerText=smsCountVal;
// // });

// // function count(){
// //     let inpLength=inp.value.length;
// //     smsLength.innerText=inpLength;
// //     let smsCountVal=Math.ceil(inpLength/160);
// //     smsCount.innerText=smsCountVal;
// // }

// let board=document.querySelector(".board");
// let snake=document.querySelector(".snake");



// window.onkeydown=function(event){
//     let key=event.key;
//     let left=snake.offsetLeft;
//     let top=snake.offsetTop;
//     let boardWidth=board.offsetWidth;
//     let boardHeight=board.offsetHeight;
//     let snakeWidth=snake.offsetWidth;
//     let snakeHeight=snake.offsetHeight;

//     // console.log(key)

//     if(key=="ArrowLeft"){
//         if(left>0){
//             snake.style.left=left-10+"px";
//         }
//     }else if(key=="ArrowRight"){
//         if(left<boardWidth-snakeWidth){
//             snake.style.left=left+10+"px";
//         }
//     }else if(key=="ArrowUp"){
//         if(top>0){
//             snake.style.top=top-10+"px";
//         }
//     }else if(key=="ArrowDown"){
//         if(top<boardHeight-snakeHeight){
//             snake.style.top=top+10+"px";
//         }
//     }
// }



let btn=document.querySelector("#btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("hello")
});