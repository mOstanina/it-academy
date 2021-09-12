"use strict";

import {setBlocked} from '../modules/setBlocked';

test('проверка выбраны только заблокированные клиенты', () => {

  expect(setBlocked([ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ])).toBe([ 
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ]);

  expect(setBlocked([ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:-250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ])).toBe([ 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:-250},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ]);

  expect(setBlocked([ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
  ])).toBe([]);

});
