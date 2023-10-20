let container = document.querySelector("#Products .container .row")
let productCount=document.querySelector(".productCount")
let productPrice=document.querySelector(".productPrice")

console.log(productCount,productPrice)
if(localStorage.getItem("basket")===null){
    localStorage.setItem("basket",JSON.stringify([]))
    productCount.innerText=0;
    productPrice.innerText=0;
}

fetch("db.json")
.then(response=>response.json())
.then(data=>{
    let html=""
    data.products.forEach(product=>{
       html+=`
       <div class="col-lg-3">
       <div class="custom-card">
           <div class="img-div">
               <img src="${product.image}" alt="">
           </div>
           <div class="content">
               <h3 class="prod-title">${product.name}</h3>
               <h2 class="prod-price">${product.price}<span>$</span></h2>
           </div>
           <div class="addBasket">
               <button data-price="${product.price}" data-id="${product.id}" class="add-basket-btn">Add Basket</button>
           </div>
       </div>
   </div>
       `
    })
    container.innerHTML=html

    let addBasketBtns=document.querySelectorAll(".add-basket-btn")
    addBasketBtns.forEach(btn=>{
        btn.addEventListener("click",function(){
            if(localStorage.getItem("basket")===null){
                localStorage.setItem("basket",JSON.stringify([]))
            }
            let basket=JSON.parse(localStorage.getItem("basket"))
            let data_id=this.getAttribute("data-id")
            let data_price=this.getAttribute("data-price")
            // console.log(basket)
            let exist=basket.find(a=>a.id==data_id)
            if(exist){
                exist.count++
            }
            else{
                basket.push({
                    id:data_id,
                    count:1,
                    price:data_price
                })
            }
            
            productCount.innerText=basket.length;
            let price=0;
            basket.forEach(prod=>{
                price+=Number(prod.count)*Number(prod.price)
            })
            productPrice.textContent=price.toFixed(2)+"$"

           
            localStorage.setItem("basket",JSON.stringify(basket))


        })
    })        
})


