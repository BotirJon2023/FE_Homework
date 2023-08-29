

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// // numbers.forEach(function(number) {
// // console.log(number)
// // }
// // )

// numbers.forEach(function(number) {
//     if(numbers > 60) {
//         console.log(number)
// }})


//  numbers.forEach(function(number) {
// console.log(number ** 2)
//     } 
//  )





// вывести в консоли
// а) вывести числа больше 60 
// б) квадрат каждого числа


// const buttons = document.querySelectorAll("button") // [{}, {}, {}]

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         if(buttons[i].id == "img") {
//             document.body.style.backgroundImage = "url(./images/img1.jpg)"
//         } else {
//             const color = buttons[i].id // цвет, если нажимаем на red-btn, то color = red
//             document.body.style.backgroundColor = color
//         }
//     })
// }

const buttons = document.querySelectorAll("button") // [{}, {}, {}]

buttons.forEach (function(btn) {
    btn.addEventListener("click", function(btn) {
        if(btn.id == "img") {
                document.body.style.backgroundImage = "url(./images/img1.jpg)"
            } else {
                const color = btn.id 
                document.body.style.backgroundColor = color
            }
        })
    })
    





