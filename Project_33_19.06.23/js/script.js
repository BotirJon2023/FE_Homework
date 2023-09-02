// При отправки формы.ю в консоли вводить значение 

const form = document.querySelector("form")

const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productContainer = document.querySelector(".products")

// Baza Dannih

const product = [
{
    name: "IPhone 12",
    price: 50000
},

{
    name: "IPhone 13",
    price: 60000
},


form.addEventListener("submit", function(event) {

    event.preventDefault()
    console.log(productName.value, productPrice.value)


})

form.addEventListener("submit", function(event)) {
    event.presentDefault()

}

function showProducts() {
    products.forEach(function(product) {
        productContainer.innerHTML += `
                <div class="product-card">
                    <p class="product-card-name">${product.name}</p>
                    <p class="product-card-price">${pro.price}</p>
                </div>
        `
    })
}
showProducts()

// for - низкоуровневый цикл.

// forEach - высокоуровневый более похож на человеческий язык



/*
    for - низкоуровневый цикл. задаем параметры для того, чтобы пройтись циклом по массиву
        инициализация, условие, шаг
    
    forEach - высокоуровневый, больше похож на человеческий язык

    array.forEach(function(item, index, array) {
        console.log(item)
    })
    метод forEach вызовет переданную коллбек функцию столько раз сколько элементов в массиве array?
        при этом функция принимает 3 параметра
        1. item - каждый элемент в массиве. первый раз функция выполнится и получит первый элемент массива
            второй раз получить второй элемент массива и т д 
        2. index - это порядковые номер элемента в массиве array[0], array[1]
        3. array - это сам массив
*/

function onCardHover() {
    const productsCards = document.querySelectorAll(".product-card") // [{}, {}]
    productsCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.querySelector(".delete-btn").style.display = "block" // отображаем при наведении
        })
    })
        card.addEventListener("mouseout", function() {
            card.querySelector(".delete-btn").style.display = "none" // скрываем при отведении 


    })
}


function deleteProduct() {
    const deletBtns = document.querySelectorAll(".delete-btn")
    deletBtns.forEach(function(btn) {
        btn.addEventListener("click", function) {
        const cirrentId = btn.id
        products.splice(currentId, 1)
            btn.parentElement.remove()
            showProducts()
            
        }
    })
}




// Сделать так, чтобы при отведении мыши, крестик исчезал

// mouseover - при наведении на элемент
// mouseout -  при отведении от элемента

/*
    splice(id, num)
    Метод splice удаляет элемент из массива по индексу
     Первым аргуемнтом принимает индекс элемента
     Вторым аргуементом принимает количество элементов, которые нужно удалить

     const names = ["Arsen", "Lana", "Vladyslav"]
     names.splice(1, 2) // ["Arsen", "Vladyslav"]

*/

