/*

//const array = ["Hello", "Hello world", 10, true]
//console.log(array)

//const obj = {

//}

//const user = {
//    email: "test@mail.ru",
//    name: "Arsen",
//    age: "25",
//    hobbies: ["Footbal", "Hokey"],
//    info:{
//    descr: "Lorem dsfsdfdsafsadfasfasfasfasfsa"
//}
//}

//console.log(user)
//console.log(user.name)
//console.log(user.hobbies[0])

// Задача: создать объект продукта с ценой и названием


//const product1 = {
  //  name: "Milk",
   // price: "1000",
   // }

    //const product2 = {
      //  name: "Bread",
    //    price: "2000",
  //      }
    

//console.log(product)
//console.log(product.price)


/* const products = [
    {
        name: "IPhone_13", 
        price: 10000
    },
    {
        name: "IPhone_14", 
        price: 12000
    },
    {
        name: "IPhone_15", 
        price: 15000
    }

]

// Циклы массивов данных

// for(let i = 0; i < products.leght; i++) {
//    console.log(products[i].name)
//}


//console.log(products[0].name)
//console.log(products[1].name)
//console.log(products[2].name)

let sum = 0
for(let i = 0; i < products.length; i++)
{
      sum = sum + products[i].price
}

console.log(sum)
*/
// let num = 30
// num = num + 20
// num += 20 





// console.log(products[i].price)


// const user = {
    //    email: "test@mail.ru",
    //    name: "Arsen",
    //    age: "25",
    //    hobbies: ["Footbal", "Hokey"],
    //    info:{
    //    descr: "Lorem dsfsdfdsafsadfasfasfasfasfsa"
    //}
    //}
    
    //console.log(user)
    //console.log(user.name)
    //console.log(user.hobbies[0])

/*
    const users = [
{name: "Ivaan",
emai: "ivaan@mail.com",
age: 25,
login: "Ivaan@CAT",
password: "Ivaan@123!Ivaan", 
},
    {name: "Vasiliy",
    emai: "vasiliy@mail.com",
    age: 26,
    login: "vasiliy@CAT",
    password: "Vasiliy@123!Vasiliy", 
    },
        
        {name: "Peter",
        emai: "peter@mail.com",
        age: 15,
        login: "Peter@CAT",
        password: "Peter@123!Peter", 
        },

    ]
    
//    for(let i = 0; i < users.length; i++) {
//   if(users[i].age > 18) {
    //    console.log(users[i].login)
  //  }
//}


const validatedUsers = [] //
for(let i = 0; i < users.length; i++) {
    if(users[i].age > 18) {
        validatedUsers.push({login: users[i].login, age : users[i].age}) // push - метод который добавляет элемент в конец массива
    }
}
console.log(validatedUsers)


     //    console.log(users[i])
    //    console.log(users[i]email)
        //console.log(`Ваш email ${users[i].email}, а Ваш логин ${users[i].login}`)
    

   // }
    
    

    //console.log(`Ваш email ${email}, а Ваш логин ${email}, а Ваш логин ${login}`)
    
     

    //{
        //  name: "Milk",
         // price: "1000",
         // }

*/


const products = [
{
    name: "Acer",
    category: "laptop"
},
{
    name: "Samsung",
    category: "TV"
},
{
    name: "IPhone_14",
    category: "phone"
},
{
    name: "Panasonic",
    category: "TV"
}

] 

for(let i = 0; i < products.length; i++) {
if(products[i].category == "TV") {
    console.log(products[i].name) 
}
}
