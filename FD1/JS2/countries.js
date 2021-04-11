var countrysH = {};

function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}

function deleteCountry(countryName) {
    delete countrysH[countryName];
}

function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}

function listCountrys() {
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}

addCountry('Германия', 'Берлин');
addCountry('Венгрия', 'Будапешт');
addCountry('Франция', 'Париж');

console.log("список стран:" + listCountrys());

//первая кнопка
function nameNewCoutry (){
    var newNameOfCountry = prompt('Введите название страны, которую хотите добавить:');
    var newCapitalName = prompt('Введите название столицы:');
    addCountry(newNameOfCountry, newCapitalName);
}
// вторая кнопка
function aboutCountry() {
    var nameOfCountry = prompt('Введите название страны:');
    var result= getCountryInfo(nameOfCountry);
    alert(result);
}
// третья кнопка
function listOf() {
    console.log("список стран:" + listCountrys());
}
//четвертая кнопка
function delCountry() {
    var nameOfDelCountry = prompt('Введите название страны, которую хотите удалить из списка:');
    deleteCountry(nameOfDelCountry);
}