"use strict";

import { toDelete } from '../modules/toDelete';

test('проверка удаления клиента', () => {
  const arr1 = [{ id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 }]

  expect(toDelete(arr1[1], arr1)).toEqual([
    { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
    { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
    { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 }
  ]);
  expect(toDelete(arr1[3], arr1)).toEqual([
    { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
    { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
    { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  ]);

  // expect(toDelete(
  //   { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  //   [
  //     { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  //     { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  //     { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  //     { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 }
  //   ]
  // )).toEqual([
  //   { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  //   { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  //   { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 }
  // ]);

  // expect(toDelete(
  //   { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 },
  //   [
  //     { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  //     { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  //     { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 },
  //     { id: 120, fam: "Григорьев", im: "Григорий", otch: "Григорьевич", balance: -220 }
  //   ]
  // )).toEqual([
  //   { id: 101, fam: "Иванов", im: "Иван", otch: "Иванович", balance: 200 },
  //   { id: 105, fam: "Сидоров", im: "Сидор", otch: "Сидорович", balance: 250 },
  //   { id: 110, fam: "Петров", im: "Пётр", otch: "Петрович", balance: 180 }
  // ]);

});
