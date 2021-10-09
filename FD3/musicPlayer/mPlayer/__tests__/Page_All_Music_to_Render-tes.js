"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Page_All_Music_to_Render from '../components/Page_All_Music_to_Render';

test('работа Page_All_Music_to_Render', () => {

  // создаём тестовую версию компонента
  let list = [
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ];
  let userPL=[45,48];
  let filteredStr=""

  const component = renderer.create(
    <Page_All_Music_to_Render
      listOfAllSongs={list}
      filtered={filteredStr}
      workMode={"allSongs"}
      cardMode={"shortMode"}
      userPlayList={userPL}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('работа Page_All_Music_to_Render (выбрана сортировка по букве T)', () => {

  // создаём тестовую версию компонента
  let list = [
    { code: 44, isInList: true, groupName: "Status Quo", songName: "In The Army Now", url: "../songs/Status Quo - In The Army Now.mp3" },
    { code: 45, isInList: true, groupName: "Stereophonics", songName: "Maybe Tomorrow", url: "../songs/Stereophonics - Maybe Tomorrow.mp3" },
    { code: 46, isInList: false, groupName: "System Of A Dow", songName: "Lonely Day", url: "../songs/System Of A Down - Lonely Day.mp3" },
    { code: 47, isInList: true, groupName: "The Beatles", songName: "Come Together", url: "../songs/The Beatles - Come Together.mp3" },
  ];
  let userPL=[45,48];
  let filteredStr="T"

  const component = renderer.create(
    <Page_All_Music_to_Render
      listOfAllSongs={list}
      filtered={filteredStr}
      workMode={"allSongs"}
      cardMode={"shortMode"}
      userPlayList={userPL}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

