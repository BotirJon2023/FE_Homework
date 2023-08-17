//    const name = 'Ivan Ivanov';
//    const age = 18;
//    alert(`User is ${name}, he is ${age}`);


// let players = [
//    {
//    username: "Player_1",
//    health: 100,
//    damage: 90
//},
// {
//    username: "Player_2",
//    health: 90,
//    damage: 120
// }
    
//]
// console.log(players[1].health)


// function summator(num1, num2) {
//    return num1 + num2
// }
// alert(summator(10, 4))

// for (let n=1; n<=10; n++) {
//    console.log(n)
// }

// function sum_even_numbers() {
//     let sum = 0;
  
//    for (let i = 2; i <= 10; i += 2) {
//      sum += i;
//    }
  
//    return sum;
//  }
// console.log(sum_even_numbers())

// function average_rating(grades) {
//    let sum = 0;
    
//    for (let i = 0; i < grades.length; i++) {
//      sum += grades[i];
//    }
    
//    return sum / grades.length;
//}
  
// console.log(average_rating([3, 4, 5]));



    
// ]
//function calc_avg_damage(players) {
//let sum = 0;
//    for (let i = 0; i < players.length; i++) {
//        sum += players[i].damage;
//        }
            
//        return sum / players.length;

//}

//    let players = [
//        {
//        username: "Player_1",
//        health: 100,
//        damage: 90
//     },
//      {
//        username: "Player_2",
//        health: 90,
//        damage: 120
//      }
//    ]
    

//const average_damage = calc_avg_damage(players)
//console.log(`Средний ущерб для указанных игроков ${average_damage}`)

// const users = [
//    ['Ivan', 20, 'ivan@example.org'],
//    ['Petr', 30, 'petr@example.org'],
//    ['Pavel', 40, 'pavel@example.org']
// ]

// console.log(users[0] [0])
// console.log(users[2] [1])
// console.log(users[1] [2])

// function apply_dicount(price, discount) {
//    let sum = 0;
//    for (let i = 0; i < price.length; i++) {
//    discount = price * 0,10
//            }
//}

// apply_dicount(1000, 20)

//const product = {title: 'Product 1', price: 500, quantity: 10};

//function currency_exchange(product) {
//	return product.price * 1.06;
//}

//console.log(currency_exchange(product));



function calc_area(radius) {
    return Math.PI * radius ** 2;
}

console.log(
    calc_area(10)
);