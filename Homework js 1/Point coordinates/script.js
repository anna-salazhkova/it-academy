"use  strict";

// Требуется написать программу, определяющую по координатам точки, в какой четверти она находится.

let xCoordinate = +prompt('Введите х координату\nНапример: x = 4,');
let yCoordinate = +prompt('Введите y координату\nНапример: y =-4,');


if (!xCoordinate || !yCoordinate) {
  alert('Вы ввели некорректное число!');
} else if (xCoordinate > 0) {
  if (yCoordinate > 0) {
    alert('Точка находится в 1 четверти');
  } else {
    alert('Точка находится в 4 четверти');
  }
} else if (xCoordinate < 0) {
  if (yCoordinate > 0) {
    alert('Точка находится в 2 четверти');
  } else {
    alert('Точка находится в 3 четверти');
  }
}