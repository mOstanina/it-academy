var lastName;
var name;
var patronymic;
var fio;
var age;

function typeOfYUserName(message) {
    while (nameType === "" || nameType === undefined || !isNaN(nameType)) {
        var nameType = prompt(message);
    };
    return nameType;
}
lastName = typeOfYUserName("Введите Вашу фамилию:");
name = typeOfYUserName("Введите Ваше имя:");
patronymic = typeOfYUserName("Введите Ваше отчество:");

fio = lastName + " " + name + " " + patronymic;

while (isNaN(age)) {
    age = parseInt(prompt("Введите Ваш возраст в годах"));
}

var ageInDays = age * 365;
var ageAfterFiveYears = age + 5;
var isPensioner;
var gender = confirm("нажмите \"ОК\", если Вы мужчина или \"Отмена\", если Вы женщина");

if (gender == true) {
   isPensioner =  age < 65 ? "нет":"да";
   gender = "мужской";
}
else {
 isPensioner =  age < 58 ? "нет":"да";
 gender = "женский";
};

alert("Ваше ФИО: " + fio + "\n" + "Ваш возраст в годах: " + age + "\n" + "Ваш возраст в днях: " + ageInDays + "\n" + "через 5 лет Вам будет: " + ageAfterFiveYears + "\n" + "Ваш пол: " + gender + "\n" + "Вы на пенсии: " + isPensioner)