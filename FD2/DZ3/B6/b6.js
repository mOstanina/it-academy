var wrapP = buildWrapper("P");
var wrapH1 = buildWrapper("H1");
function buildWrapper(tagNew) {
    var a = function getUserString(userStr) {
        var arrayOfUserString = userStr.split(" ");
        var languageArr = ['{lang:"ru"}', "{lang:'ru'}", '{lang:"en"}', "{lang:'en'}",]
        for (var i = 0; i < arrayOfUserString.length; i++) {
            var c = arrayOfUserString[i];
            if (languageArr.indexOf(c) !== -1) {
                var indexInArray = arrayOfUserString.indexOf(c);
                var langOfuserString = " " + arrayOfUserString.splice(indexInArray, arrayOfUserString.length).join(" ").replace(/[:]/g, "=").replace(/[{}]/g, "");
            }else{
                langOfuserString ="";
            }
        }
        arrayOfUserString = arrayOfUserString.join(" ");
        function convertString(stringToConvert) {
            var mnemo = {
                "<": "&lt",
                ">": "&gt",
                "&": "&amp",
                "'": "&#039",
                '"': "&quot",
            };
            function changeSymbol(symbol) {
                return mnemo[symbol];
            }
            return stringToConvert.replace(/[<&>\'\"]/g, changeSymbol);
        }
        return ("\<" + tagNew  + langOfuserString + "\>" + convertString(arrayOfUserString) + "\<\/" + tagNew + "\>");
    };
    return a;
};
console.log(wrapP("Однажды в студёную зимнюю & пору, {lang:'ru'}"));
// console.log(wrapH1("СТИХИ", { align: "center", title: "M&M's" }));
