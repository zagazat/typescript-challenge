import { TupleToObject } from "./TupleToObject";

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const result: TupleToObject<typeof tuple> = {
    tesla: 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y',
}
