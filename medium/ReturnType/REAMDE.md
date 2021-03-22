### MyReturnType

Implement the built-in `ReturnType<T>` generic without using it.

---

Релизовать встроенный тип `ReturnType<T>`, не прибегая к его использованию.

---

Пример:

```
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```

---

Решение: [MyReturnType.ts](./MyReturnType.ts)