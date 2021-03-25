import { MyPick } from "../../easy/Pick/MyPick";
import { MyExclude } from "../../easy/Exclude/MyExclude";

export type MyOmit<K, T extends keyof K> = MyPick<K, MyExclude<keyof K, T>>