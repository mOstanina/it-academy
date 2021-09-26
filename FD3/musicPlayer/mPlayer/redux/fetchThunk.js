import isoFetch from 'isomorphic-fetch';

import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC } from "./allSongsAC";

function songsThunkAC(dispatch) {
    // Как и любой action creator, countriesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
    return function () {
        dispatch(allSongsLoadingAC());
        isoFetch("http://localhost:3000/playlist", {
        method: 'get',
        headers: {
            "Accept": "application/json",
        },
    })
            .then((response) => { // response - HTTP-ответ
                console.log("1")
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then((data) => {
                console.log("2")
                dispatch(allSongsSetAC(data.rows));
            })
            .catch((error) => {
                console.log("3")
                console.error(error);
                dispatch(allSongsErrorAC());
            })
            ;
    }

}

export { songsThunkAC };


// state = {
//     allSongs: []
// };

// fetchSuccess = (loadedData) => {
//     console.log(loadedData);
//     this.setState({
//         allSongs: loadedData
//     });
// };
// componentDidMount() {
//     function sendReques(method, url) {
//         const headers = {
//             "Content-Tyre": "application/json"
//         }

//         return fetch(url, {
//             method: method,
//             headers: headers
//         }).then(response => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 return response.json().then(error => {
//                     const err = new Error(error)
//                     err.data = error
//                     throw err
//                 })
//             }
//         })
//     }

//     sendReques("get", "http://localhost:3000/playlist")
//         .then(data => {
//             this.fetchSuccess(data);
//         })
//         .catch(err => console.log(err))
// }