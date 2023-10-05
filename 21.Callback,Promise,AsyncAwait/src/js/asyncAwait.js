// // bir funkisiyanin asinxron teyin etmek  ucun async yaziriq
// // async yazdigimiz zaman bu funksiya mutleq promise qaytarir
// async function Salam(){

// }

// // async funksiyalarin icinde await yazdigimiz zaman funksiya promise qaytarmalidir
// // await yazdigimiz zaman funksiya bitene qeder kodlarin islemesini dayandirir

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {   // resolveAfter2Seconds funksiyasi promise qaytarir 
//                                         //asagidaki kod blokunda await yazdigimiz ucun bu funksiya promise qaytarmalidir
//       setTimeout(() => {
//         resolve('Tamamlandi');
//       }, 2000);
//     });
//   }

// async function asyncCall() {
//     console.log('calling');

//     const result = await resolveAfter2Seconds();
//     console.log(result); // result 2 saniye sonra resolved olur, ve ekrana resolved yazilir.
//                         //await yazdigmiz funksiya tamamlanana qeder asagidaki kodlar islemir
//     console.log("asinxronluq bitdi")

//   }

//   asyncCall()

// const myList=[];


// async function fetchData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         console.log(response)
//         const data= await response.json()
//         console.log(data)
//         myList.push(...data)
//         console.log(myList)
//     }
//     catch (err){
//         console.error(err)
//     }
// }

// fetchData()


console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000);

console.log(3)

setTimeout(() => {
    console.log(4)
    setTimeout(() => {
        console.log(5)
    }, 1000);
    new Promise((resolve, reject) => {
        console.log(6)
        resolve()
    }).then(() => {
        console.log(7)
    })
}, 0);

new Promise((resolve, reject) => {
    console.log(8)
    resolve()
}).then(() => {
    console.log(9)
})

console.log(10)

//Rovsen 1,3,10,8,9,2,4,5,6,7
//Gulsare 1,3,10
//firuz 1,3,10,4,5,6,7,8,9,2

//Hoca - 1,3,8,9,4,6,7,2,5