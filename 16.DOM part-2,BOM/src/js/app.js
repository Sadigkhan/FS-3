// let first=document.getElementById('first');
// let second=document.getElementById('second');
// let third=document.getElementById('third');

// // console.log(first)
// // console.log(second)
// // console.log(third)

// let first=document.querySelector('.first');
// let first2=window.document.querySelector('.first');


// console.log(first)
// console.log(first2)

// let btn=document.getElementById('btn');

// btn.addEventListener('click',function(){
//     window.open();
// });


// setTimeout(SayHello,3000)
// setInterval(SayHello,4000)


// function SayHello(){
//     console.log('Hello');
// }


// let myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


let hammen = document.getElementById('hammen');
let xmen = document.getElementById('xmen');
let menubtn = document.getElementById('menubtn');
let sidebar = document.getElementById('sidebar');

menubtn.addEventListener('click', function () {
    sidebar.classList.toggle('opened');
    hammen.classList.toggle('hidden');
    xmen.classList.toggle('hidden');
});


let drops = document.getElementsByClassName('dropdownbtn');




for (let index = 0; index < drops.length; index++) {
    
    drops[index].addEventListener('click', function () {
        // console.log('opened')
        // console.log(drops[index].parentElement)
        drops[index].classList.toggle('active');
        drops[index].parentElement.nextElementSibling.classList.toggle('show');  
    })
}

// function dropDown(e) {
//     e.addEventListener('click', function () {
//         console.log('opened')
//         e.parentElement().nextElementSibling().classList.toggle('show');
//     })
// }