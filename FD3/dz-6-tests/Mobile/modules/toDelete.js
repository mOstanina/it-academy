"use strict";

function toDelete(inf, clientsStartArray) {

    let newClients = [...clientsStartArray];
    newClients = newClients.filter(function (i) {
        return i !== inf
    })
    return newClients
}

export { toDelete };