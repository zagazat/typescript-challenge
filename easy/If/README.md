### If

Implement a utils `If` which accepts condition `C`, a truthy return type `T`, and a falsy return type `F`. `C` is expected to be either true or false while `T` and `F` can be any type.

---

Реализовать тип `If`, принимающий три параметра: `C` - true/false, `T` - если `C` = true, `F` - если `C` = false

---

Пример:

```
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

---

Решение: [If.ts](./If.ts)