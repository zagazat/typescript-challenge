### Icludes

Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`. For example

---

Реализовать JavaScript метод `Array.includes` используя систему типов

---

Пример:

```
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```

---

Решение: [Includes.ts](./Includes.ts)