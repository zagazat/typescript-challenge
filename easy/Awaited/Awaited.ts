// Тип переданный в Awaited является Promise<ExampleType>.
// Нам нужно извлечь ExampleType, но при этом мы не знаем какой тип имеет ExampleType

export type Awaited<E> = E extends Promise<infer ExampleType> ? ExampleType : E;