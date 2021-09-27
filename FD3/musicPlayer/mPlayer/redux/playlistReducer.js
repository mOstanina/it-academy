import { SONG_TO_ADD, SONG_TO_DELETE, LOCAL_PL_CREATE } from './playlistReducerAC';
const initState = {

    //status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
    localPL: null,

}


function playlistReducer(state = initState, action) {
    switch (action.type) {

        case LOCAL_PL_CREATE: {
            // надо создать новый счётчик
            // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
            // console.log('action:', action);
            // console.log('state до обработки редьюсером:', state);
            let newState = {
                ...state, localPL: []
            };
           // console.log('state после обработки редьюсером:', newState);
            return newState;
        }

          case SONG_TO_ADD: {
            // надо создать новый счётчик
            // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
            // console.log('action:',action);
            // console.log('state до обработки редьюсером:',state);
            if(![...state.localPL].includes(action.code)){
                //console.log("!!!!!!!!!");
                var newState={...state,
                    localPL:[...state.localPL, action.code]};
            }else{
                return state;
            }
            
            return newState;
          }

          case SONG_TO_DELETE: {
            // console.log('action:',action);
            // console.log('state до обработки редьюсером:',state);
            let ind=[...state.localPL].indexOf(action.code)
           // console.log(ind)
            let newListAfterDelete= [...state.localPL]
            newListAfterDelete= newListAfterDelete.slice()
            
            newListAfterDelete.splice(ind,1)
            //console.log(newListAfterDelete)
            var newState={...state,
                localPL:newListAfterDelete
            
            };

                
            //console.log('state после обработки редьюсером:',newState);
            return newState;
            //return state;
          }

        default:
            return state;
    }
}

export default playlistReducer;
