### LengthOfTuple

For given a tuple, you need create a generic `Length`, pick the length of the tuple

---
Реализовать тип `Length`, который вернёт длину переданного в него кортежа

---
Пример:

```
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

---

Решение: [LengthOfTuple.ts](./LengthOfTuple.ts)