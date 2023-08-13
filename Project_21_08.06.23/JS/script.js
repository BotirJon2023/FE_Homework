
// function makeFood() {
// console.log("Нарезать овощи")
// console.log("Сварить овощи")
//console.log("Заправить овощи Майонезом")
//console.log("Перемешать овощи")

//}
//makeFood() // первый раз приготовили
//makeFood() // второй раз приготовили

/*
функции - это переиспользуемый блок кода 

function Name (параметр1, Параметр2)
тело функции - алгоритм действий
параметр - это входные данные, с которыми работает функция 

Math.power(10, 2)


*/

//function greeting(name) {
  //  const newName = name.toUpperCase()
  //  console.log("Привет, "+ newName)
//}

// greeting("Arsen")

//function calc(num1, num2) {
//console.log(num1 + num2),
//console.log(num1 - num2),
//console.log(num1 * num2),
//console.log(num1 / num2)

//}

// calc(100, 20)


// function max(num1, num2) {
//    if(num1 > num2) {
//    console.log(num1)
// } 
// if(num2 > num1) {
// console.log(num2) 
// }
// }
// max(100, 20)

// printArrayElements(arrey)
// {
//    for(let i =)
//}

// const names = ["Arsen", "Alexander", "Vladimir"]

// const a = +prompt("Введите ширину")
// const b = +prompt("Введите длинну")
// console.log("Площать комнаты равна -" +(a * b))

//function calcSquare(a, b) {
//    console.log(a * b)
//}

//calcSquare(10, 15)

//function congrats(name)
//{
//console.log(`Привет, ${name}, Поздравляю с Днем рождения`)
//}
//congrats("Arsen")

//happyBirthday

// function evenOrOdd(number) {
//     if(number % 2 == 0) {
//        console.log("Четное")
//    }
// else {
//    console.log("Нечетное")
//}

//}

//evenOrOdd(16)

// const arr = []
// function printArray(number) {
    
//    for(let i = 0; i < number; i++) {
// arr.push(i)
//    }
//    console.log(arr)
// }
// printArray(10)

/*
    show - показать
    get - получить
    delete - удалить
    change - изменить
    print - распечатать
    add - добавить
    edit - редактировать 
    calc - посчитать
*/
// Задача. Создать функцию, которая принимает число и выводит массив с числами
// от 0 до этого числа. 
// function showArray(number) {
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// showArray(10)


// Запросить у пользователя 3 имени
// Каждое введенное имя ввести в верхний регистр


function printNames() {
    const names = []
    for(let i = 0; i < 3; i++) {
        const name = prompt("Введите Ваше имя")
    const upperCaseName = name.toUpperCase()
    names.push(upperCaseName)
    }   
console.log(names)
}
printNames()
