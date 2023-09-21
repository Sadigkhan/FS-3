// // //foreach
// // // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // arr.forEach((number)=>{
// // //     // if(number%2===0){
// // //     //     console.log(number);
// // //     // }

// // //     number++
// // // })

// // // console.log(arr);

// // //for

// // // for(let i=0;i<arr.length;i++){
// // //     console.log(arr[i])
// // // }

// // //while

// // // let i=0;
// // // while(i<arr.length){
// // //     console.log(arr[i]);
// // //     i++;
// // // }

// // //do while

// // // let i=0;

// // // do{
// // //     console.log(arr[i]);
// // //     i++;
// // // }while(i<arr.length)


// // //map
// // // let arr2=arr.map((number)=>{return number*2})
// // // console.log(arr2);
// // // console.log(arr);

// // //for of

// // // for(let number of arr){
// // //     console.log(number);
// // // }


// // //for in

// // // let person ={
// // //     ad:"Eli",
// // //     soyad:"Eliyev",
// // //     yas:25
// // // }

// // // for(let key in person){
// // //     console.log(person[key]);
// // // }


// // // const person = {
// // //     ad: "Eli",
// // //     soyad: "Eliyev",
// // //     age: 25,
// // //     cars: [
// // //         {name: "Ford",models: ["Fiesta", "Focus", "Mustang"]},
// // //         {name: "BMW",models: ["320", "X3", "X5"]},
// // //         {name: "Fiat",models: ["500", "Panda"]}
// // //         ],
// // //     getFullName: function () {
// // //         return this.ad + " " + this.soyad;
// // //     }
// // // }


// // // person.getFullName=person.getFullName.toString();

// // // person.name = function () {
// // //     return this.ad + " " + this.soyad;
// // //   };

// // // Object.freeze(person.cars);
// // // person.cars.car1 = "Mercedes";
// // // Object.freeze(person.soyad)
// // // person.soyad="Mehman"; 
// // // person.cars.forEach((car)=>{
// // //     car.models.forEach((model)=>{
// // //         console.log(model);
// // //     })
// // // });

// // // console.log(person);
// // // let newString=JSON.stringify(person);
// // // console.log(newString);
// // // console.log(JSON.parse(newString));
// // // document.getElementById("body").innerHTML = Object.values(person).join(" ");

// // // console.log(Object.values(person))

// // // let adlar=["Eli","Veli","Mehman","Gulsare","Natiq"]

// // // let strigifiedNames=JSON.stringify(adlar);
// // // console.log(strigifiedNames)
// // // console.log(JSON.parse(strigifiedNames))

// // // Object.freeze(person.ad);
// // // person.ataadi = "Mehman"

// // // delete person.getFullName;
// // // console.log(person);

// // // console.log(person.getFullName());

// // // let sur="soy";
// // // let name="ad"
// // // let surname=sur+name;


// // // let surname="soyad"
// // // console.log(person.ad);
// // // console.log(person[surname]);
// // // console.log(person["age"])

// // // let x=person;
// // // x.ad="Mehman";
// // // x.soyad="Hesenov";

// // // let c=x;
// // // c.ad="Veli";
// // // c.soyad="Veliyev";


// // // x.ad="Gulsare";
// // // x.soyad="Guliyeva";



// // // console.log(person.getFullName());
// // // console.log(x.getFullName());
// // // console.log(c.getFullName());



// // // const human={}
// // // human.ad="Eli";
// // // human.soyad="Eliyev";
// // // human.age=25;
// // // console.log(human);


// // // const student=Object.create(human);
// // // student.ad="Mehman";
// // // student.soyad="Eliyev";
// // // student.age=25;
// // // student.univer="BSU";
// // // console.log(student);


// // // const teacher= new Object();
// // // teacher.ad="Veli";
// // // teacher.soyad="Eliyev";
// // // teacher.age=25;
// // // teacher.univer="BSU";
// // // teacher.profession="Math Teacher";
// // // console.log(teacher);





// // //Getters and setters

// // // let person={
// // //         ad:"",
// // //         soyad:"",
// // //         age:null,
// // //         get getAge(){
// // //             return this.age;
// // //         },
// // //         set setAge(age){
// // //             if(age>18){
// // //                 this.age=age;
// // //             }
// // //             else{
// // //                 this.age=age
// // //                 console.log(`${this.ad} yasiniz 18den cox olmalidir.Sizin movcud yasiniz: ${age}`)
// // //             }
// // //         },
// // //         set setAd(ad){
// // //             if(ad.trim().length>2){
// // //                 this.ad=ad;
// // //             }
// // //             else{
// // //                 console.log("Ad 2 herfden cox olmalidir")
// // //             }
// // //         },
// // //         get getAd(){
// // //             return this.ad;
// // //         },
// // //         set setSoyad(soyad){
// // //             if(soyad.trim().length>5){
// // //                 this.soyad=soyad;
// // //             }
// // //             else{
// // //                 console.log("Soyad 2 herfden boyuk olmalidir")
// // //             }
// // //         },
// // //         get getSoyad(){
// // //             return this.soyad;
// // //         },
// // //         get adSoyad(){
// // //             return this.ad+" "+this.soyad;
// // //         },

// // //         get fullInfo(){
// // //             return this.ad+" "+this.soyad+" "+this.age;
// // //         },

// // //         getAdSoyad:function(){
// // //             return this.ad+" "+this.soyad;
// // //         }

// // //     }
// // // class Person{
// // //     constructor(ad,soyad,age){
// // //         this.ad=ad;
// // //         this.soyad=soyad;
// // //         this.age=age;
// // //     }
// // // }

// // // person.setAd="Eli";
// // // person.setSoyad="Eliyev";
// // // person.setAge=15;
// // // console.log(person.fullInfo);
// // // person.setSoyad="Memmedov";

// // // console.log(person.adSoyad);
// // // Object.freeze(person);
// // // person.setAd="Elvin2";
// // // person.setSoyad="Memmedov2";
// // // console.log(person.getAdSoyad());

// // // function Human(name, age) {
// // //     this.name = name;
// // //     this.age = age;
// // // }

// // // let human = new Human("Eli", 25);
// // // console.log(human);

// // function Person(name, age) {
// //     // Private properties

// //     let _name = name;
// //     let _age = age;

// //     // Public methods to access private properties
// //     this.getName = function () {
// //         return this._name;
// //     };

// //     this.getAge = function () {
// //         return _age;
// //     };

// //     this.setName = function (newName) {
// //         if (newName.trim().length > 2) {
// //             _name = newName;
// //         } else {
// //             console.log("Ad 2 herfden cox olmalidir")
// //         }

// //     }
// // };

// // this.setAge = function (newAge) {
// //     if (newAge >= 0) {
// //         _age = newAge;
// //     }
// // };



// // let person = new Person();
// // person.setName("El");

// // // Create a new Person object
// // //   var person1 = new Person('John', 30);

// // //   let person2=new Person();
// // //   person2._name="Veli";
// // //     // person2.setName("Veli");
// // //     person2.setAge(25);
// // //     console.log(person2.getName());
// // //     console.log(person2.getAge());

// // //   // Access private properties using public methods
// // //   console.log(person1.getName()); // Output: John
// // //   console.log(person1.getAge());  // Output: 30

// // //   // Modify private properties using public methods
// // //   person1.setName('Alice');
// // //   person1.setAge(25);

// // //   console.log(person1.getName()); // Output: Alice
// // //   console.log(person1.getAge());  // Output: 25




// // Define object
// const obj = {counter : 0};

// // Define setters and getters
// Object.defineProperty(obj, "reset", {
//   get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
//   get : function () {this.counter++;}
// });
// Object.defineProperty(obj, "decrement", {
//   get : function () {this.counter--;}
// });
// Object.defineProperty(obj, "add", {
//   set : function (value) {this.counter += value;}
// });
// Object.defineProperty(obj, "subtract", {
//   set : function (value) {this.counter -= value;}
// });

// // Play with the counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// obj.add=10;
// console.log(obj.counter);


// function Person(ad, soyad) {
//     this.ad = ad;
//     this.soyad = soyad;
// }

// Person.prototype.nationality = "Azeri";
// let person1 = new Person("Eli", "Eliyev" );
// person1.nationality = "Rus"

class Human{

    constructor(ad,soyad){
        super();
        this.ad=ad;
        this.soyad=soyad;
    }
}

class Adult extends Human{
    constructor(ad,soyad,workPlace){
        super(ad,soyad);
        this.workPlace=workPlace;
    }
}

let human1=new Human("Eli","Eliyev");
console.log(human1);

let adult1=new Adult("Eli","Eliyev","BSU");
console.log(adult1);