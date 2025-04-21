"use  strict";


// ФИО
let lastName = prompt('Введите вашу фамилию:');
let firstName = prompt('Введите ваше имя:');
let middleName = prompt('Введите ваше отчество:');

// возраст
let age = +prompt('Введите ваш возраст в годах:');


// пол
let genderMale = confirm('Ваш пол - мужской? Нажмите OK если "Да" или Отмена если "Нет"');

let gender;
if (genderMale) {
  gender = 'мужской';
} else {
  gender = 'женский';
}

// пенсионный возраст
let pensionAgeMale = 65;
let pensionAgeFemale = 57;

let pensioner;
if (genderMale) {
  pensioner = age >= pensionAgeMale;
} else {
  pensioner = age >= pensionAgeFemale;
}

let isPensioner;
if (pensioner) {
  isPensioner = 'да';
} else {
  isPensioner = 'нет';
}

// дополнительные данные
let ageInDays = age * 365;
let ageIn5Years = age + 5;


// сообщение
let message = `
Ваше ФИО: ${lastName} ${firstName} ${middleName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageInDays}
Через 5 лет вам будет: ${ageIn5Years}
Ваш пол: ${gender}
Вы на пенсии: ${isPensioner}
`;

alert(message);