// отправки формы

const form = document.querySelector("form")
const email = document.querySelector(".email")
const pass = document.querySelector(".password")


form.addEventListener("submit", function(event) {
    event.preventDefault() // отменяет действие по умолчанию 
//    console.log(email.value, pass.value)
    const userData = {
        email: email.value, 
        password: pass.value
    }
})



/*
    1. click по кнопке submit - не обязательно отправляет форму (не заполнены поля, неправильно заполнены)
    2. отправка формы (submit) - происходит только при успешном вводе всех данных и успешной отправки формы


    event - это объект событие, которое создается всегда по умолчанию 

    */



