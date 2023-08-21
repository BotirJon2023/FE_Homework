// создание элементов 

// create element() - метод создания элемента

// const title = document.createElement("h1") 


// Для каждого продукта из массива сздать  див, 

// <d>



// // Задача. Есть массив объектов prodcuts. Для каждого продукта создать разметку
// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     },
// ]


// /*
//     <div class="product">
//         <h5>Назввание продукта</h5>
//         <p>Цена продукта</p>
//     </div>
// */


// // const title = document.createElement("h1")

// // const names =["Arsen", "Yuliya","Lana", "Maria"]

// // const section = document.querySelector("section")
// // for(let i = 0; i < names.length; i++) {
// //     section.innerHTML += `<p class="text"> ${names[i]} <p>`
// // }




// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     },
// ]
// const section = document.querySelector("section")
// for(let i = 0; i < products.length; i++) {
//     section.innerHTML += `<div class="product">
//         <h5>${products[i].name}</h5>
//         <p>${products[i].price}</p>
//         </div> `
// }

// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
// }

// section.innerHTML += `<h1>Сумма продуктов составляет ${sum}</h1>`


// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]

