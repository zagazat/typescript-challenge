### TupleToObject

Given an array, transform to a object type and the key/value must in the given array.

---

Трансформирует входящий кортеж в объект. Ключ/значение передеаны в кортеже.

---

Пример:

```
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

---

Решение: [TupleToObject.ts](./TupleToObject.ts)