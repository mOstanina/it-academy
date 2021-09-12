"use strict";

function setActive(clientsStartArray) {
  let newClients = [...clientsStartArray]; // копия самого массива клиентов
  newClients = newClients.filter(function (i) {
    return i.balance >= 0
  })
  return newClients
}

export { setActive };