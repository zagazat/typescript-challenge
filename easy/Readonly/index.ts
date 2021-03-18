import { MyReadonly } from "./MyReadonly";

interface Some {
    title: string
    description: string
}

const some: MyReadonly<Some> = {
    title: "Hey",
    description: "foobar"
}

// some.title = "Hello" // Error: Cannot assign to 'title' because it is a read-only property.
// some.description = "barFoo" // Error: Cannot assign to 'title' because it is a read-only property.