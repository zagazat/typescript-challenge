import { MyReadonly } from "../../easy/Readonly/MyReadonly";

export type MyReadonly2<T, U extends keyof T> =
    U extends keyof T
        ? (T & {
            readonly [Key in U]: T[U]
        })
        : MyReadonly<T>