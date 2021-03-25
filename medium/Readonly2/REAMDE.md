### MyReadonly2

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

---

Реализовать дженерик-тип `MyReadonly2<T, K>`, который принимает 2 аргумента.

`K` - это параметры, которые должны быть приведены к readonly. Если `K` не указан, значит ВСЕ ключи `T` должны быть приведены как обычный `Readonly<T>`

---

Пример:

```
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```

---

Решение: [MyReadonly2.ts](./MyReadonly2.ts)