import {EventEmitter} from 'events';

let trackEvents=new EventEmitter(); 

// событие "AddTrack" - кликнута кнопка добавить, его сэмиттирует Track и примет All_Music
// событие "DeleteTrack" - кликнута кнопка удалить, его сэмиттирует Track и примет All_Music

export {trackEvents};
