//const LOCAL_PL_CREATE = 'LOCAL_PL_CREATE'
const SONG_TO_ADD = 'SONG_TO_ADD';
const SONG_TO_DELETE = 'SONG_TO_DELETE';
const USER_SONGS_LOADING = 'USER_SONGS_LOADING';
const USER_SONGS_ERROR = 'USER_SONGS_ERROR';
const USER_SONGS_SET = 'USER_SONGS_SET';
const USER_SONGS_TO_SAVE = 'USER_SONGS_TO_SAVE';

// const local_PL_create = function () {
//     return {
//         type: LOCAL_PL_CREATE,
//         localPL: null,
//     };
// }

const userSongsLoadingAC = function () { //загрузка
    return {
        type: USER_SONGS_LOADING,
    };
}

const userSongsErrorAC = function () { //ошибка
    return {
        type: USER_SONGS_ERROR,
    };
}

const userSongsSetAC = function (playlist) { //устанока
    return {
        type: USER_SONGS_SET,
        playlist: playlist,
    };
}

const toAddSongInNewPL = function (code) { //добавление
    return {
        type: SONG_TO_ADD,
        code: code,
    };
}

const toDeleteSongInNewPL = function (code) { //удаление
    return {
        type: SONG_TO_DELETE,
        code: code,
    };
}

const toSaveUserPLInAjax = function (playlist) { // сохранение в AJAX
    console.log(playlist)
    return {
        type: USER_SONGS_TO_SAVE,
        playlist: playlist,
    };
}
//toSaveUserPLInAjax
export {
    // local_PL_create, LOCAL_PL_CREATE,
    toAddSongInNewPL, SONG_TO_ADD,
    toDeleteSongInNewPL, SONG_TO_DELETE,
    userSongsLoadingAC, USER_SONGS_LOADING,
    userSongsErrorAC, USER_SONGS_ERROR,
    userSongsSetAC, USER_SONGS_SET,
    toSaveUserPLInAjax, USER_SONGS_TO_SAVE,
}