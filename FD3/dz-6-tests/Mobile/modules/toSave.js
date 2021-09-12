"use strict";

function toSave(inf, clientsStartArray, workMode) {
    let newClients = [...clientsStartArray]; // копия самого массива клиентов
    if (workMode === 1) {
        newClients.forEach((el, i) => {
            if (el.id === inf.id) {
                if (!(el.fam === inf.fam &&
                    el.im === inf.im &&
                    el.otch === inf.otch &&
                    el.balance === inf.balance)
                ) {
                    newClients[i] = inf;
                }
            }
        })
        return newClients
    } if (workMode === 2) {
        console.log(inf)
        let newId = newClients[newClients.length - 1].id + 10
        inf = { ...inf, id: newId }
        newClients = [...newClients, inf];
        return newClients
    }
}

export { toSave };