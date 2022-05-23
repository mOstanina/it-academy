"use strict";

window.onload = () => {
    returnVariantsArray();
};

async function loadVariants() {
    let url = "/variants";
    let response = await fetch(url, {method: "GET"});
    if (response.status === 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

async function loadStat(typeResponse) {
    let url = "/stat";
    let fetchOptions=null
    switch (typeResponse) {
        case "XML": {
            fetchOptions={
                headers: {
                    "Accept": "application/xml",
                },
            };
            break;
        }

        case "HTML": {
            fetchOptions={
                headers: {
                    "Accept": "text/html",
                },
            };
            break;
        }

        case "JSON": {
            fetchOptions={
                headers: {
                    "Accept": "application/json",
                },
            };
            break;
        }

        default:
            fetchOptions={
                headers: {
                    "Accept": 'application/json',
                },
            };
            break;
    }
    let response = await fetch(url, fetchOptions);
    if (response.status === 200) {
        if(!typeResponse){
            let json = await response.json();
            return json;
        }else {
            let res = await response.text();
            document.getElementById("textareaView").innerHTML = res
            return res;
        }

    }
    throw new Error(response.status);
}

async function leavVote(variantId) {
    let url = "/vote";
    const bodyRes={id:variantId}
    let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyRes),
        })
    if (response.status === 200) {

        await refreshStatistic() // обновление статистки
    }else {
        throw new Error(response.status);
    }

}

const renderListOfVariants = function (arr) {
    return arr.variants.map((item, index) => {
            return `<input type='button' value='${item.value}' onclick=leavVote('${item.id}') />`;
    }).join(`<br/><br/>`);
};

const statisticArr = function (arr) {
    return arr.variants.map((item, index) => {
        return `<div><span>${item.id}</span><span>)</span>&nbsp&nbsp<span>${item.value}</span><span>:</span>&nbsp&nbsp<span>${item.count}</span></div>`;
    }).join(`<br/>`);
};

async function refreshStatistic(){
    const statistic= await loadStat()
    document.getElementById("stat").innerHTML = statisticArr(statistic);
}

async function returnVariantsArray() {
    const array = await loadVariants();
    const result = renderListOfVariants(array);
    await refreshStatistic()
    document.getElementById("variants").innerHTML = result;
    document.getElementById("XML").onclick = ()=>{loadStat("XML")}
    document.getElementById("HTML").onclick = ()=>{loadStat("HTML")}
    document.getElementById("JSON").onclick = ()=>{loadStat("JSON")}
}