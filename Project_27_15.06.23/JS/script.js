// const btn = document.querySelector(".btn")

// btn.addEventListener("click", function() {
//     console.log("Приветствую!")
// })

// function sum() {
//     console.log("Ваша сумма Х")
// }

// adEvantListener - метод который позволяет вызвать функцию по происшествии какого либо события

// addEventListener (type, cb) - принимает два аргумента 
// type - тип события - click, submit, change, input
// cb - callback funcktion - фнукция 


// const btn = document.querySelector(".btn")
// const text = document.querySelector(".text")
// let num = 0 // число, которое хранит текущее значение 

// btn.addEventListener("click", function() {
//     num++ // num = num + 1
//     text.innetText = num
    
// })

// const btn = document.querySelector(".btn")
// const text = document.querySelector(".text")
// let num = 0 // число, которое хранит текущее значение 

// btn.addEventListener("click", function() {
//     num++ // num = num + 1
//     text.innerText = num
// })

// const btnMinus = document.querySelector(".btn-minus")

// btnMinus.addEventListener("click", function() {
//     if(num > 0) {
//         num--     // num-- //num = num - 1
//     }
  
//     text.innerText = num
// })

const redBtn = document.querySelector(".red-btn")
redBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "red"
})

const greenBtn = document.querySelector(".green-btn")
greenBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "green"
})


const yellowBtn = document.querySelector(".yellow-btn")
yellowBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "yellow"
})


const blueBtn = document.querySelector(".blue-btn")
blueBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "blue"
})


const orangeBtn = document.querySelector(".orange-btn")
orangeBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "orange"
})


const imgBtn = document.querySelector(".img-btn")
imgBtn.addEventListener("click", function() {
document.body.style.backgroundColor = "img"
})


const redBtn = document.querySelector(".red-btn")
redBtn.addEventListener("click", function)
document.body.styke.backgroundColor = "rgb(129, 115, 255)"
redBtn.style.color = "black"

const buttons = document.querySelectorAll("button") // [{}, {}, {}]

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if(buttons[i].id == "img") {
            document.body.style.backgroundImage = "url(./images/img1.jpg)"
        } else {
            const color = buttons[i].id // цвет, если нажимаем на red-btn, то color = red
            document.body.style.backgroundColor = color
        }
    })
}

