// // // DOM - Document Object Model и навигация по HTML

// // числа 
// // строки
// // буль 
// // объекты (массивы)
// // let user = {
// //     name: "Arsen"
// //     }

// //     main = {
// //         className: "main"

// //     }


// // // DOM и навигация по html

// // /*
// //     числа
// //     строки
// //     буль
// //     объекты (массивы) - 
// //         let user = {
// //             name: "Arsen"
// //         }

// //     main = {
// //         className: "main"
// //         innerHTML: "<h1></h1>"
// //         style: {
// //             backgroundColor: "red"
// //         }
// //     }
// // */



// // const title = 

// // querySelector() - поиск первого элемента 
// // querySelecrorAll() - поиск всех элементов

// // функия 

// // function greeting() {
// //     console.log("Hello")
// // }


// // метод 
// //  let user = {
// //     key: value,
// //     greeting: function() {
// //         console.log("hello")
// //     }

// //  }

// // селктор - выбор из HTML
// // 1. по тегу - h1, header, main
// // 2. по классу - item
// // 3. по id 

// const title = document.querySelector("h1")

// console.log(title)
// title.innerText = "Hello Arsen"

// const googleLink = document.querySelector("main a")
// console.log(googleLink)  
// googleLink.innerText = "facebookLink"

// const descr = document.querySelector(".descr")
// console.log(descr)

// const footer = document.querySelector(".footer")
// console.log(footer) 
// footer.innerText = "Hello"


// const footerTex = document.querySelector(".footer")
// const title1 = document.querySelector("h2") 
// .h2.innerText = "TITLE"


// // innerText - свойство получить или назначить текст внутри тега
// //     title = {
// //         innerText: "Hello World"
// //     }




// // Найти элементы
// // а) найти тег ссылки на гугл
// // б) найти тег с классом footer
// // в) найти заголовок в main



// const title = document.querySelector("h1")
// title.innerText = "Это мой первый заголовок"

// const texts = document.querySelectorAll("p")
// // texts[0].innerText = "Привет. Как дела?"
// // texts[1].innerText = "Привет. Как дела?"
// // texts[2].innerText = "Привет. Как дела?"
// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Привет. Как дела?"
    
// }


// console.log(texts)


// const googleLink = document.querySelector("main a")
// googleLink.innerText = "Faceboock"
// const href = googleLink.getAttribute("href")
// console.log(href)
// googleLink.setAttribute("href", "https://fb.com/")

// const links = document.querySelectorAll("a")
// for(let i = 0; i < texts.length; i++) {
//     links[i].innerText = "Instagram"
//     links[i].setAttribute("href", "https://instagram.com/")
// }



// const links = document.querySelectorAll("a") // [{}, {}]
// for(let i = 0; i < links.length; i++) {
//     links[i].innerText = "Instagram"
//     links[i].setAttribute("href", "https://instagram.com")
// }


// const array = [] 

// let number = 10
// number + 5
// number = number + 5
// number += 5

// number = number + 1
// number += 1
// number++ - инкремент



