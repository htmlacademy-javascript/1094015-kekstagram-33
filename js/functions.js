// Написать функцию для проверки длины строки.
// Требования:
// 1. Написать функцию
// 2. В функции две строки - одна которую нужно проверить , вторая - максимальная длина.
// 3. Есть строка меньше или равна = true
// 4. Если строка длиннее, то = false

function length(string, number) {
  if (string.length <= number) {
    return true;
  }
  return false;
}

// eslint-disable-next-line no-console
console.log(length('просто', 20));
// eslint-disable-next-line no-console
console.log(length('япростолюблютебяма', 18));
// eslint-disable-next-line no-console
console.log(length('япрототебялюблю', 10));

// Строка короче 20 символов
//checkLengthString('просто', 20); // true
// Длина строки ровно 18 символов
//checkLengthString('япростолюблютебяма', 18); // true
// Строка длиннее 10 символов
//checkLengthString('япрототебялюблю', 10); // false






