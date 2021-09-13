"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../components/Card';

test('работа Card', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Card workMode={1} key={101} />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();


});
