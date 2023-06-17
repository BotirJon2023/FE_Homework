// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


const numbersDiv = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  numbersDiv.innerHTML += `<p>${i}</p>`
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = ['Hello World', 'Welcome to Uzbekistan', 'Best work is FrontEnd Developer', 'My mane is Botirjon'];

const stringsContainer = document.querySelector('.strings_container');

for (let i = 0; i < strings.length; i++) {
    stringsContainer.innerHTML += `<p>${strings[i]}</p>`
}


// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
  {
    first_name: "John",
    last_name: "Wayne",
    age: 35,
  },
  {
    first_name: "Bruse",
    last_name: "Willis",
    age: 23,
  },
  {
    first_name: "Chack",
    last_name: "Norris",
    age: 15,
  },
  {
    first_name: "Silvester",
    last_name: "Stallone",
    age: 18,
  },
  {
    first_name: "Arnold",
    last_name: "Schwarzenneger",
    age: 48,
  },
  {
    first_name: "Stewen",
    last_name: "Siggal",
    age: 12,
  },
];

let section = document.querySelector("section");

for (let i = 0; i < users.length; i++) {
  if (users[i].age > 18) {
    section.innerHTML += `<div class="users_container">
                            <p>${users[i].first_name}</p>
                            <p>${users[i].last_name}</p>
                            <p>${users[i].age}</p>       
                        </div>`;
  }
}