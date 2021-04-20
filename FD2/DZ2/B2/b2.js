var userMessage = prompt("Веедите любую строку");
function reverseString(message){
   return message.split('').reverse().join('');
}
console.log(reverseString(userMessage));