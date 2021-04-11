var lastName = prompt("Введите Вашу фамилию:", "Ваша фамиля");
var name = prompt("Введите Ваше имя:", "Ваше имя");
var patronymic = prompt("Введите Ваше отчество:", "Ваше отчество");
var fio;
lastName === "Ваша фамиля" ? fio = "Вы не указали Ваше ФИО!" : name === "Ваше имя" ? fio = "Вы не указали Ваше ФИО!" : patronymic === "Ваше отчество" ? fio = "Вы не указали Ваше ФИО!" : fio = lastName + " " + name + " " + patronymic;
var age = parseInt(prompt("Введите Ваш возраст", "Ваш возраст в годах"));

//isNaN(age) ? age = "Вы не указали Ваш возраст!"

if (isNaN(age)) {
    age = "Вы не указали Ваш возраст!"
}
if (age > 120) {
    age = "Вы указали нереальный возраст!"
}
var ageInDays = age * 365;
if (isNaN(age)) {
    ageInDays = "Вы не указали Ваш возраст!"
}
var ageAfterFiveYears = age + 5;
if (isNaN(age)) {
    ageAfterFiveYears = "Вы не указали Ваш возраст!"
}
var isPensioner;
var gender = confirm("Вы мужчина?");
if (gender == true) {
    if (age < 65) {
        isPensioner = "нет";
    }
    if (age >= 65) {
        isPensioner = "да";
    }
    else if (isNaN(age)) {
        isPensioner = "Вы не указали возраст";
    }
}
else {
    if (age < 58) {
        isPensioner = "нет";
    }
    if (age >= 58) {
        isPensioner = "да";
    }
    else if (isNaN(age)) {
        isPensioner = "Вы не указали возраст";
    }
};
gender === true ? gender = "мужской" : gender = "женский";
alert("Ваше ФИО: " + fio + "\n" + "Ваш возраст в годах: " + age + "\n" + "Ваш возраст в днях: " + ageInDays + "\n" + "через 5 лет Вам будет: " + ageAfterFiveYears + "\n" + "Ваш пол: " + gender + "\n" + "Вы на пенсии: " + isPensioner)