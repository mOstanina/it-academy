"use strict";

import { showAdded } from '../modules/showAdded';

test('проверка выбраны только недобавленные в плей-лист (т.е. доступные к добавлению)', () => {
  expect(showAdded([
    { code: 1, isInList: false, groupName: "4 Non Blondes", songName: "What's Up", url: "../songs/4 Non Blondes - What's Up.mp3" },
    { code: 2, isInList: true, groupName: "Aerosmith", songName: "Amazing", url: "../songs/Aerosmith - Amazing.mp3" },
    { code: 3, isInList: true, groupName: "Aerosmith", songName: "Pink", url: "../songs/Aerosmith - Pink.mp3" },
  ], [2])).toEqual([
    { code: 1, isInList: false, groupName: "4 Non Blondes", songName: "What's Up", url: "../songs/4 Non Blondes - What's Up.mp3" },
    { code: 3, isInList: true, groupName: "Aerosmith", songName: "Pink", url: "../songs/Aerosmith - Pink.mp3" },
  ]);

  expect(showAdded([
    { code: 1, isInList: false, groupName: "4 Non Blondes", songName: "What's Up", url: "../songs/4 Non Blondes - What's Up.mp3" },
    { code: 2, isInList: true, groupName: "Aerosmith", songName: "Amazing", url: "../songs/Aerosmith - Amazing.mp3" },
    { code: 3, isInList: true, groupName: "Aerosmith", songName: "Pink", url: "../songs/Aerosmith - Pink.mp3" },
  ], [2, 3])).toEqual([
    { code: 1, isInList: false, groupName: "4 Non Blondes", songName: "What's Up", url: "../songs/4 Non Blondes - What's Up.mp3" },
  ]);
});
