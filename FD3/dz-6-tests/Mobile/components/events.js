import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 

// событие "ChangeInfoClicked" - кликнута кнопка редактировать, его сэмиттирует MobileClient и примет MobileCompany
// событие "DeleteClient" - кликнута кнопка удалить, его сэмиттирует MobileClient и примет MobileCompany
// событие "SaveClient" - кликнута кнопка сохранить, его сэмиттирует Card и примет MobileCompany

export {mobileEvents};
