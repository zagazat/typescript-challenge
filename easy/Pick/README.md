### MyPick

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`

---

Релизовать встроенный тип `Pick<T, K>`, не прибегая к его использованию. 

Возвращает новый тип, в котором перечисляются только те свойства из `T`, которые указаны в `K`.

---

Пример:

```
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

---

Решение: [MyPick.ts](./MyPick.ts)