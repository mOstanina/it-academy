"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileClient from '../components/MobileClient';

test('работа MobileClient', () => {

  // создаём тестовую версию компонента
  let id1=101;
  let inf={id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200};
  const component = renderer.create(
    <MobileClient key={id1} id={inf.id} info={inf}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('работа MobileClient', () => {

  // создаём тестовую версию компонента
  let id1=101;
  let inf={id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180};
  const component = renderer.create(
    <MobileClient key={id1} id={inf.id} info={inf}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
