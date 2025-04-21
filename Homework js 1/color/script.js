"use  strict";

// Написать программу, которая по введенному коду цвета выводит название цветов радуги.

let colorCode = prompt('Введите код цвета');
let normalizedColor = colorCode.toLowerCase();
switch (normalizedColor) {
  case '#ff0000':
  case '#f0':
    alert('Красный');
    break;
  case '#ffa500':
    alert('Оранжевый');
    break;
  case '#ffff00':
  case '#ff0':
    alert('Желтый');
    break;
  case '#008000':
    alert('Зеленый');
    break;
  case '#00ffff':
  case '#0ff':
    alert('Голубой');
    break;
  case '#0000ff':
  case '#00f':
    alert('Синий');
    break;
  case '#800080':
    alert('Пурпурный');
  default:
    alert('Цвет не найден в палитре!');
}


// через конструкцию if..else

// let colorName = prompt("Введите код цвета");
// let formaterColor = colorName.toLowerCase();

// if (formaterColor === "#ff0000" || formaterColor === "#f0") {
//   alert("Красный");
// } else if (formaterColor === "#ffa500") {
//   alert("Оранжевый");
// } else if (formaterColor === "#ffff00" || formaterColor === "#ff0") {
//   alert("Желтый");
// } else if (formaterColor === "#008000") {
//   alert("Зеленый");
// } else if (formaterColor === "#00ffff" || formaterColor === "#0ff") {
//   alert("Голубой");
// } else if (formaterColor === "#0000ff" || formaterColor === "#00f") {
//   alert("Синий");
// } else if (formaterColor === "#800080") {
//   alert("Пурпурный");
// } else {
//   alert("Цвет не найден в палитре!");
// }
