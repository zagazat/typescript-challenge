export type TupleToObject<A extends readonly any[]> = {
    [K in A[number]]: A[number]
}