import { SONG_TO_ADD, SONG_TO_DELETE, USER_SONGS_LOADING, USER_SONGS_ERROR, USER_SONGS_SET, USER_SONGS_TO_SAVE } from './playlistReducerAC';
const initState = {

    status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    playlist: [],

}
function playlistReducer(state = initState, action) {
    switch (action.type) {

        // case LOCAL_PL_CREATE: {
        //     // надо создать новый счётчик
        //     // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
        //     // console.log('action:', action);
        //     // console.log('state до обработки редьюсером:', state);
        //     let newState = {
        //         ...state, localPL: []
        //     };
        //    // console.log('state после обработки редьюсером:', newState);
        //     return newState;
        // }

        case USER_SONGS_LOADING: { //загрузка
            let newState = {
                status: 1,
                userSongs: [],
            };
            return newState;
        }

        case USER_SONGS_ERROR: { // если ошибка
            let newState = {
                status: 2,
                userSongs: [],
            };
            return newState;
        }

        case USER_SONGS_SET: { // установка пришедших данных
            console.log("!!!"+action.playlist.length)
           
           // let lastUserPL=action.playlist[action.playlist.length-1]
            let newState = {
                status: 3,
                userSongs: action.playlist[(action.playlist.length-1)],
            };
            return newState;
        }
        /////////
        case SONG_TO_ADD: {  //добавление
            // надо создать новый счётчик
            // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
            // console.log('action:', action);
            // console.log('state до обработки редьюсером:', state);
            // console.log(state)
            if (![...state.userSongs].includes(action.code)) {
                //console.log("!!!!!!!!!");
                var newState = {
                    ...state,
                    userSongs: [...state.userSongs, action.code]
                };
            } else {
                return state;
            }

            return newState;
        }

        case SONG_TO_DELETE: {  //удаление
            // console.log('action:',action);
            // console.log('state до обработки редьюсером:',state);
            let ind = [...state.userSongs].indexOf(action.code)
            // console.log(ind)
            let newListAfterDelete = [...state.userSongs]
            newListAfterDelete = newListAfterDelete.slice()

            newListAfterDelete.splice(ind, 1)
            //console.log(newListAfterDelete)
            var newState = {
                ...state,
                userSongs: newListAfterDelete

            };
            //console.log('state после обработки редьюсером:',newState);
            return newState;
            //return state;
        }

        case USER_SONGS_TO_SAVE: { // сохранение в AJAX
            let newState = {
                ...state,
                userSongs: action.playlist,
            };
            console.log(newState)
            return newState;
        }

        default:
            return state;
    }
}

export default playlistReducer;
