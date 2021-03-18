export type MyReadonly<Initial> = {
    readonly [K in keyof Initial]: Initial[K]
}