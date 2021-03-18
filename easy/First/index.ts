import { First } from "./First";

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

const a: head1 = 'a'
// const b: head1 = 'b' // Type '"b"' is not assignable to type '"a"'.

const c: head2 = 3
// const d: head2 = 'd' // Type '"d"' is not assignable to type '3'.
