//Promise

// 1. Promise nedir?
//Promise gelecekde tamamlanacaq bir asinxron funksiyani temsil eden bir JavaScript obyektidir.
//Funksiya tamamlandiginda prossesin ugurlu (resolved) ve ya ugursuz (rejected) oldugunu gosteren
//bir netice (result) donur (return).

// 2. Promise obyektinin 3 esas statusu var:
// a. Pending: Promise yaradildiqdan sonra ve ya resolve ve reject metodu cagirilmadan evvel statusu pendingdir.
// b. Resolved: Promise funksiyasi ugurla tamamlandiginda statusu resolved olur.
// c. Rejected: Promise funksiyasi ugursuz tamamlandiginda statusu rejected olur.



// 3. Promise yaradilmasi:

// const promise = new Promise(function (resolve, reject) {
//     // resolve("Success");
//     // reject("Error");
// });

// 4. Promise funksiyasinin ishlemesi:
// Promise funksiyasi resolve ve ya reject metodu ile ishleyir.

// 5. Promise funksiyasinin ishlemesi ucun 2 funksiya istifade olunur:
// a. then(): Promise funksiyasi ugurla tamamlandiginda ishleyen funksiyadir.
// b. catch(): Promise funksiyasi ugursuz tamamlandiginda ishleyen funksiyadir.



// promise.then(data=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.error(err)
// })


//6. Promise chaining:
// Promise chaining asinxron funksiyalarin bir birine baglanmasi ile yaranir.
// Promise chaining probleminin helli ise Async/Await

// function wait(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// wait(1000)
//     .then(function () {
//         console.log("1");
//         return wait(2000);
//     })
//     .then(function () {
//         console.log("2");
//         return wait(3000);
//     })
//     .then(function () {
//         console.log("3");
//         return wait(1000);
//     })
//     .then(function () {
//         console.log("4");
//     })
//     .catch(function (error) {
//         console.log(error);
//     }); // catch() funksiyasi ile promise chaining de cixan error gosterilir


//Promise.all([promise1,promise2,promise3]) //her zaman array olaraq qebul edir arqumentleri,
// sira onemli deyi, butun promiseler resolve olunmalidir
// eks teqdire Promise.all funksiyasi ise dusmur


//Promise.any([promise1,promise2,promise3]) //prossesi ilk bitiren promisenin resultini qaytarir
//promiselerden her hansi biri reject olunsa bele funksiya isleyecek


//Promise.race() //




// 7. Promise.all() funksiyasi:
// Promise.all() funksiyasi bir nece promise obyektlerini array olaraq qebul edir bitirib bitirmemesine baxmir ve
// butun promise obyektlerinin tamamlanmasini gozleyir.
// Promise.all() funksiyasi 1 argument qebul edir. Bu argument bir array olmalidir.
// Promise.all() funksiyasi butun promise obyektlerinin tamamlanmasini gozleyir ve butun promise obyektleri
// tamamlandiqda ishleyir.Eger bir promise obyekti ugursuz tamamlanarsa butun promise obyekti ugursuz tamamlanir.
// Promise.all() funksiyasi butun promise obyektlerinin neticelerini array olaraq qaytarir.
//Harda istifade olunur? Bir nece asinxron funksiyalarin neticelerini birlesdirmek ucun istifade olunur.


// const promise1 = asyncFuntion1();
// const promise2 = asyncFuntion2();
// const promise3 = asyncFuntion3();

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         // Butun Promise'ler ugurlu olduğunda çalışacak kod
//     })
//     .catch(error => {
//         // En az bir Promise ugursuz olduğunda isleyecek kod
//     });




// const apiEndpoint1 = "https://api.github.com/users/1";
// const apiEndpoint2 = "https://api.github.com/users/2";
// const apiEndpoint3 = "https://api.github.com/users/3adadasdasd";

// function fetchData(apiEndpoint) {
//     return new Promise((resolve, reject) => {
//         fetch(apiEndpoint)
//             .then(response => {
//                 if (response.status === 200) {
//                     resolve(response.json()); // response.json() funksiyasi Promise qaytarir
//                 } else {
//                     reject(new Error("Error while fetching data")); // Error obyekti qaytarir
//                 }
//             })
//             .catch(error => reject(error)); // Error obyekti qaytarir
//     });
// }

// const promise1 = fetchData(apiEndpoint1);
// const promise2 = fetchData(apiEndpoint2);
// const promise3 = fetchData(apiEndpoint3);

// Promise.all([promise1, promise2, promise3])
//     .then((datas) => {
      
//         // console.log("Datalar ugurla cekildi")
//         // console.log(datas)
//     })
//     .catch(err=>{
//         console.error(err)
//     })


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
  // Expected output: "two"