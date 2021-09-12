"use strict";

import { toSave } from '../modules/toSave';

test('проверка сохранения клиентов', () => {

  expect(toSave(
    { fam: "ИвановВВВВ", im: "Иван", otch: "Иванович", balance: 200},
    [
      { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
      { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
      { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
      { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 },
    ],
    2
  )).toBe([
    { id: 101, fam: "ИвановВВВВ", im: "Иван", otch: "Иванович", balance: 200 },
    { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
    { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 },
    { id: 130, fam: "Савельев", im: "Савелий", otch: "Савельевич", balance: 800 },
  ]);

  expect(toSave(
    { fam: "Савельев", im: "Савелий", otch: "Савельевич", balance: 800 },
    [
      { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
      { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
      { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
      { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 },
    ],
    2
  )).toBe([
    { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
    { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
    { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 },
    { id: 130, fam: "Савельев", im: "Савелий", otch: "Савельевич", balance: 800 },
  ]);

});
