// 7. *Сравнить null и 0. Попробуйте объяснить результат.

// для нестрогого равенства == значений undefined и null действует особое правило:
// эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
// Поэтому null == 0 ложно.


// console.log(typeof(null))
// console.log(typeof(0))

console.log(null == 0) //false сравниваются типы object(null ни к чему не приводятся) и number
console.log(null >= 0) //true (0 >=0 ?? да 0 = 0)
console.log(null > 0) //false (0 > 0 ?? нет 0 = 0)
// нестрогое равенство и сравнения > < >= <= преобразуют null в число 0
console.log(null === 0) //false строгое равенство сравнивает null и число,
// в данном случае null не число, а пустое значение (object)


