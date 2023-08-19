// const a = 'text'
// const b = 34
// const c = true
// const = [] - данные 
// const d = {} - объеты
// const f = function name(params)
//return - после return ничего не пишут
// alert - это функция которая создана во сплывающем окне
// push - 


//let - когда данные меняются


// function fff(params) {
// console.log("hello")
// }
//console.log(fff)

// function sumFunc (a, b) {
//     let res = a + b
//     console.log(res)
//     return res
// }
// const result = sumFunc(+prompt(), +prompt())

// console.log(result + 12)


// function sumFunc (a, b) {
//     let res = a + b
//     console.log(res)
//     return res
// }
// sumFunc(+prompt(), +prompt())
// sumFunc(+prompt(), +prompt())

// const result = sumFunc(+prompt(), +prompt())

// const newResult = 

// console.log(result + 12)



// function sumFunc (a, b) {
//     let res = a + b
//     console.log(res)
//     return res
// }

// const result = sumFunc(+prompt(), +prompt())

// const newResult = sumFunc(34, 23)

// console.log(newResult)
// console.log(result + 12)


// function sumFunc (a, b) {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }

// function sumFunc (x, y) {
//    return x + y
    
// }
// let a = 10
// console.log(a);

// function sumFunc (x, y) {
//     return (x + y);
     
//  }

// sumFunc(5, 3)
// sumFunc(10, 6)

// const result = sumFunc(5, 3)
// document.write(result)

// const obj = {
//     name: 'Vacho'
//     sumFunc: sumFunc
// }
// console.log(obj)

// console.log(typeof console)

// const consol = {
//     assert: assert,
//     clear: clear,
//     log: log
// }

// consol.log()

// Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

// function func (num) {
//     return num ** 3
// }
// console.log(func(3))

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.



// function posNegativ(val) {
//         if (val >= 0) {
//         console.log('+++')
//         }
//         else {
//             console.log('---')
//         } 
        
//     } 



//     const a = +prompt('введите число')

//     function num(a) {
//         if (a >= 0) {
//             console.log("положительное")
//         }
//         else {
//             console.log("отрицательное")
//         }
//     }
//     num(a)

// -------------------------

//     function func2(val) {
//         if (val > 0) {
//             console.log('+++');
//             return '+++'
//         } else if (val === 0) {
//             return '==='
//         } else {
//             return '---'
//         }
//     }
    
//     let itog = func2(4)

// ------------------------------

// for (let i = 0; i < array.length; i++)

// let global = 10

// function num() {
//     // локальная область видимости
// let local = 12
// }

// console.log('global', local)
// console.log('global', global)

// num()

//В программе объявлена переменная list которая содержит массив чисел 
// Используя цикл посчитайте сумму чисел и выведите их в консоль

// const list = [23, 354, -23, 45, 23, 34]
// let res = 0

// for (let i = 0; i < list.length; i++) {
// res = res + list[i]
// console.log(res);
// }

// const list1 = [23, 354, -23, 45, 23, 34]
// let even = 0
// let odd = 0 

// for (let i = 0; i < list1.length; i++) {
// if (list1[i] % 2 === 0) {
//     even = even + list1[i]
// }
// else {
//     odd = odd + list1[i] 
// }

// }
// let total = even - odd
// console.log(total)



// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.


// function func(val_1, val_2) {
//     let arr = []
//     let start 
//     let end 
//     if (val_1 > val_2) {
//         start = val_2
//         end = val_1
//     } else {
//         start = val_1
//         end = val_2
//     }
//     for (let i = start; i < end; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(func(9, 2));
