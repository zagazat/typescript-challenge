### First

Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.

---

Реализовать тип `First<T>`, который принимает массив `T` и возвращает тип первого элемента в массиве.

---

Пример:

```
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

---

Решение: [First.ts](./First.ts)