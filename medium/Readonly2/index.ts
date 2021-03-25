import { MyReadonly2 } from "./MyReadonly2";

interface Todo {
    title: string
    description: string
    completed: boolean
}

const obj: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// obj.title = "Hello" // Error: cannot reassign a readonly property
// obj.description = "barFoo" // Error: cannot reassign a readonly property
obj.completed = true // OK
