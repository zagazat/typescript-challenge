### Concat

Implement the JavaScript `Array.conca`t function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

---

Реализовать тип `First<T>`, который принимает массив `T` и возвращает тип первого элемента в массиве.

---

Пример:

```
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

---

Решение: [Concat.ts](./Concat.ts)