document.addEventListener('DOMContentLoaded', () => {
    // 1. Изменение текста заголовка h1
    const header = document.querySelector('h1'); // Находим заголовок h1
    header.innerText = 'Обновленный заголовок!'; // Меняем его текст

    // 2. Добавление порядкового номера к каждому элементу списка li
    const listItems = document.querySelectorAll('ul.custom-list li'); // Находим все элементы списка

    listItems.forEach((item, index) => {
        item.innerText = `${index + 1}. ${item.innerText}`; // Добавляем номер перед текстом каждого элемента
    });
});

// Изменение атрибута src у изображения
let imgElement = document.getElementById('myImage');
imgElement.setAttribute('src', './images/DOM-model.png'); // Новый путь к изображению

// Изменение атрибута href и текста у ссылки
let linkElement = document.getElementById('myLink');
linkElement.setAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model');
linkElement.innerHTML = 'API - DOM'; // Изменение текста ссылки

// Находим элементы кнопок
let addButton = document.getElementById('addButton');
let removeButton = document.getElementById('removeButton');

// Находим список <ul>
let list = document.getElementById('myList');

// Счётчик для добавляемых элементов списка
let itemCount = list.children.length;

// Функция для добавления нового элемента списка
addButton.addEventListener('click', function() {
    // Создаем новый элемент списка <li>
    let newItem = document.createElement('li');
    
    // Увеличиваем счётчик и добавляем текст
    itemCount++;
    newItem.innerText = 'Элемент списка ' + itemCount;
    
    // Добавляем новый элемент в список
    list.appendChild(newItem);
});

// Функция для удаления последнего элемента списка
removeButton.addEventListener('click', function() {
    // Проверяем, есть ли элементы в списке
    if (list.children.length > 0) {
        // Удаляем последний элемент списка
        list.removeChild(list.lastElementChild);
        itemCount--; // Уменьшаем счётчик
    }
});

// Находим абзац по его ID
let paragraph = document.getElementById('myParagraph');

// Находим кнопки по их ID
let changeColorButton = document.getElementById('changeColorButton');
let toggleVisibilityButton = document.getElementById('toggleVisibilityButton');

// Функция для изменения цвета текста абзаца
changeColorButton.addEventListener('click', function() {
    // Проверяем текущий цвет текста и переключаем его
    if (paragraph.style.color === 'blue') {
        paragraph.style.color = 'black'; // Возвращаем черный цвет
    } else {
        paragraph.style.color = 'blue'; // Меняем цвет на синий
    }
});

// Функция для скрытия/показа абзаца
toggleVisibilityButton.addEventListener('click', function() {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; // Показываем абзац
    } else {
        paragraph.style.display = 'none'; // Скрываем абзац
    }
});

// Функция для получения и вывода геометрии элемента
function displayElementSize() {
    const element = document.getElementById('myElement'); // Выбираем элемент
    const rect = element.getBoundingClientRect(); // Получаем его координаты и размеры

    // Выводим размеры в консоль для отладки
    console.log(`Ширина: ${rect.width}, Высота: ${rect.height}`);
    console.log(`Координаты (сверху): ${rect.top}, Координаты (слева): ${rect.left}`);

    // Выводим размеры и координаты на экран
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Ширина: ${rect.width}px</p>
        <p>Высота: ${rect.height}px</p>
        <p>Координаты сверху: ${rect.top}px</p>
        <p>Координаты слева: ${rect.left}px</p>
    `;
}

// Привязываем функцию к кнопке
const button = document.getElementById('getSizeButton');
button.addEventListener('click', displayElementSize);

document.getElementById("submitButton").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const messageElement = document.getElementById("message");

    if (name === "" || email === "") {
        messageElement.innerText = "Пожалуйста, заполните все поля.";
        messageElement.style.color = "red"; // Цвет сообщения
    } else {
        messageElement.innerText = "Спасибо за вашу заявку!";
        messageElement.style.color = "green"; // Цвет сообщения
    }
});