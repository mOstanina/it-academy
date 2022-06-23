"use strict";

window.onload = () => {
    returnSavedArray();
};

async function loadSavedArray() {
    let url = "/savedArray";
    let response = await fetch(url, {method: "GET"});
    if (response.status === 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

async function pasteInfo(it){
    const array = await loadSavedArray();

    document.getElementById("method").value = array[it].method;
    document.getElementById("url").value = array[it].url;
    document.getElementById("Content-Type").value =  array[it].headers.ContentType;
    document.getElementById("Accept").value = array[it].headers.Accept;
    document.getElementById("body").value =  array[it].body;
}

const renderSavedArray = function (arr) {
    return Object.keys(arr).map((item)=>{
        return `<input type='button' value='${item}' onclick = pasteInfo("${item}") />`;
    }).join(`<br/><br/>`);
};

async function returnSavedArray() {
    const array = await loadSavedArray();
    const result = renderSavedArray(array);
    document.getElementById("saved").innerHTML = result;
}

async function runRequest(val) {
    let methodRequest = document.getElementById("method").value;
    let urlRequest = document.getElementById("url").value;
    let ContentType = document.getElementById("Content-Type").value;
    let Accept = document.getElementById("Accept").value;
    let bodyRequest = document.getElementById("body").value;

    const bodyRes = {
        method : methodRequest,
        url : urlRequest,
        headers : {ContentType:ContentType, Accept:Accept},
        body : bodyRequest,
    }

    let url = val; //либо "run", либо "save"
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(bodyRes),
    })
    if (response.status === 200) {
        if(val==="run"){
            let re= await response.json()
            const headersArray = function (arr) {
                return Object.keys(arr).map((item)=>{
                    return `<div><span>${item}</span><span>:</span><span>${arr[item][0]}</span></div>`;
                }).join(`<br/>`);
            };

            document.getElementById("answerStatus").innerHTML = re.status;
            document.getElementById("answerHeaders").innerHTML = headersArray(re.headers._headers);
            document.getElementById("answerBody").innerHTML = re.data;
        }

    }else {
        throw new Error(response.status);
    }

}
