import { MyReturnType } from "./MyReturnType";

const fn = (v: boolean) => {
    if (v)
        return 1;
    else
        return 2;
}

type Ret = MyReturnType<typeof fn>;

// const b: Ret = 1; // ok
// const c: Ret = '' // Type '""' is not assignable to type '1 | 2'