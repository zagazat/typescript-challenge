### MyReadonly

Implement the built-in `Readonly<T>` generic without using it.

Constructs a type with all properties of `T` set to readonly, meaning the properties of the constructed type cannot be reassigned.

---

Релизовать встроенный тип `Readonly<T>`, не прибегая к его использованию.

Создаёт новый тип, со всеми параметры `T`, но недоступными к изменению.

---

Пример:

```
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

---

Решение: [MyReadonly.ts](./MyReadonly.ts)