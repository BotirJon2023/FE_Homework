


// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         if(buttons[i].id == "img") {
//             document.body.style.backgroundImage = "url(./img/img1.jpg)"
//         } else {
//             const color = buttons[i].id // цвет, если нажимаем на red-btn, то color = red
//             document.body.style.backgroundColor = color
//         }
//     })
// }
const buttons = document.querySelectorAll("button") // [{}, {}, {}]

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if(buttons[i].id == "img") {
            document.body.style.background = "url(./img/img1.jpg)"
        } else {
            const color = buttons[i].id // цвет, если нажимаем на red-btn, то color = red
            document.body.style.background = color
        }
    })
}


const names = ["Arsen", "Bogdan","Aleksei","Botirjon"]
// for(let i = 0; i < names.length; i++) {
// console.log(names[i])
// } 

names.forEach(function(name) {
    console.log(name)
}
) 

// коллбек, котороый передаем в forEach выполнится столько раз, сколько элементов в массиве.
// 1. name = "Arsen" -- function(name) {console.log(name)} // Arsen
// 2. name = "Bogdan" -- function(name) {console.log(name)} // Bogdan
// 3. name = "Alexei" -- function(name) {console.log(name)} // Alexei
// 4. name = "Botirjon" -- function(name) {console.log(name)} // Botirjon

// forEach() - это способ выполнить операции для каждого элемента массива, но без явного описания цикла
// forEach(item, index, arr) принимает три аргумента




