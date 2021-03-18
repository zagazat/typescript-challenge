import { MyPick } from "./MyPick";

interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo: MyPick<Todo, 'title' | 'completed'> = {
    title: 'Clean room',
    completed: false,
}