export type MyPick<Initial, Key extends keyof Initial> = {
    [K in Key]: Initial[K]
}