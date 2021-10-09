"use strict";

import { showBlocked } from '../modules/showBlocked';

test('проверка выбраны только добавленные в плей-лист (недоступные к добавленнию) в плей-лист ', () => {

  expect(showBlocked([
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ], [44, 45, 46, 47])).toEqual([
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ]);

  expect(showBlocked([
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ], [44, 47])).toEqual([
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ]);

  expect(showBlocked([
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ], [4, 27])).toEqual([]);

});
