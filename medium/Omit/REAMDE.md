### MyReturnType

Implement the built-in Omit<T, K> generic without using it.

Constructs a type by picking all properties from T and then removing K

---

Релизовать встроенный тип `Omit<T, K>`, не прибегая к его использованию.

Создает тип используя всё из `T`, и удаляя `K`

---

Пример:

```
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

---

Решение: [MyOmit.ts](./MyOmit.ts)