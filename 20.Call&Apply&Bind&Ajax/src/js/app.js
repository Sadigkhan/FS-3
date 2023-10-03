//call apply bind


//DRY - Don't Repeat Yourself

// let commonDetails={
//     getDetails:function(){
//         console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`)
//     }
// }

// let person={
//     name:"John",
//     age:30,
//     city:"New York",
 
// }

// let person2={
//     name:"Jane",
//     age:25,
//     city:"London",
//     getDetails:function(surname,job){
//         console.log(`${this.name} is ${this.age} years old and lives in ${this.city} and surname is ${surname} and job is ${job}`)
//     }
  
// }

// let person3={
//     name:"Jane",
//     age:25,
//     city:"London",

// }


// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
    // console.log(person.fullName.bind(member));

// commonDetails.getDetails.call(person);
// commonDetails.getDetails.apply(person3);

// person2.getDetails.call(person,"Doe","Developer");
// person2.getDetails.apply(person3,["Doe","Developer"]);


//XMLHttpRequest

// window.addEventListener("DOMContentLoaded",function(){

// })


// const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

window.addEventListener("DOMContentLoaded",function(){
    const xhr = new XMLHttpRequest();
    // console.log(xhr)
    //github users api
    xhr.open("GET","https://api.github.com/users");

    xhr.onload=function(){
        // console.log(this.status)

        if(this.status===200){
            // console.log(this.responseText);
            const users=JSON.parse(this.responseText);
            console.log(users);
            let output="";
            users.forEach(user => {
                output+=`
                <div class="card">
                <div class="img">
                    <img src="${user.avatar_url}" alt="">
                </div>
                <div class="text">
                <a href="${user.html_url}">${user.login}</a>
                    <p>${user.type}</p>
                </div>
            </div>
                `
            });
            result.innerHTML=output;
        }
    }

    xhr.send();

    // xhr.open("GET","data.txt",true);
    // xhr.onload = function(){
    //     if(this.status === 200){
    //         result.textContent = this.responseText;
    //     }
    // }
    // xhr.send();
});