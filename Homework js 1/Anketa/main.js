"use  strict";

// ФИО
let lastName = prompt('Введите вашу фамилию:');
let firstName = prompt('Введите ваше имя:');
let middleName = prompt('Введите ваше отчество:');

if (!isNaN(lastName) || !isNaN(firstName) || !isNaN(middleName)) {
  alert('Вы ввели некорректные данные!');

} else {
  // возраст
  let age = +prompt('Введите ваш возраст в годах:');

  if (!age || age < 0) {
    alert('Вы ввели некорректный возраст!');
  } else {
    // пол
    let genderMale = confirm('Ваш пол - мужской? Нажмите OK если "Да" или Отмена если "Нет"');
    let gender = genderMale ? 'мужской' : 'женский';

    // пенсионный возраст
    let pensionAgeMale = 65;
    let pensionAgeFemale = 58;
    let pensioner = genderMale ? age >= pensionAgeMale : age >= pensionAgeFemale;
    let isPensioner = pensioner ? 'да' : 'нет';

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
  }
}
