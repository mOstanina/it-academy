const LOCAL_PL_CREATE = 'LOCAL_PL_CREATE'
const SONG_TO_ADD = 'SONG_TO_ADD';
const SONG_TO_DELETE = 'SONG_TO_DELETE';


const local_PL_create = function () {
    return {
        type: LOCAL_PL_CREATE,
        localPL: null,
    };
}

const toAddSongInNewPL = function (code) {
    return {
        type: SONG_TO_ADD,
        code: code,
    };
}

const toDeleteSongInNewPL = function (code) {
    return {
        type: SONG_TO_DELETE,
        code: code,
    };
}

// const allSongsSetAC = function (allSongs) {
//   return {
//     type: ALL_SONGS_SET,
//     allSongs: allSongs,
//   };
// }


export {
    local_PL_create, LOCAL_PL_CREATE,
    toAddSongInNewPL, SONG_TO_ADD,
    toDeleteSongInNewPL, SONG_TO_DELETE,
}